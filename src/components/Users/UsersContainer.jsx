import React from 'react';
import { connect } from 'react-redux';
import { follow,
         setCurrentPage,
         setTotalUsersCount,
         unfollow,
         toggleFollowingProgress, requestUsers } from '../../redux/users_reducer';
import Users from './Users';
import preloader from './../../components/common/Preloader/images/preloader.gif';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers,
         getPageSize,
         getTotalUsersCount,
         getGurrentPage,
         getIsFetching,
         getFollowingInProgress
        } from './../../redux/users_selectors';



class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize);        
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} alt='' />  : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}
 

let mapStateToProps = (state) => {
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getGurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        setTotalUsersCount, toggleFollowingProgress, requestUsers })
)(UsersContainer);



