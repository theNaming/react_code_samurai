import profileReducer, { addPostActionCreator, deletePost } from "./profile_reducer";
import React from 'react';



test('length of posts should be incremented', () => {
    // 1. text data
    let action = addPostActionCreator('it-kamasutra.com');
    let state = {
        posts: [
            { id: 1, message: 'Hello, how are you', likesCount: 12 },
            { id: 2, message: 'bay', likesCount: 10 }],       
    }; 
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deliting lenght of messages should be decrement', () => {
    // 1. text data
    let action = deletePost(1);
   
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});
  