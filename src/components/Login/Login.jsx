import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  let userId;
  // const onSubmit = data => console.log(data);
  const onSubmit = data => fetch('https://social-network.samuraijs.com/api/1.0/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(data => data.json())
    .then(data => {
      document.getElementById('qqq').innerHTML = `Вы залогинены вам id: ${data.data.userId}`;
      userId = data.data.userId
      document.getElementById('getProfile').disabled = false;
    })
    .catch(data => {
      debugger;
    });
    function getProfile(e) {
      e.preventDefault(); 
      debugger;
      fetch('https://social-network.samuraijs.com/api/1.0/auth/me', {
        credentials: "include"
      } )
      .then(data => data.json())
      .then(data => {
        document.getElementById('email').innerHTML = `Ваш email: ${data.data.email}`;
        document.getElementById('login').innerHTML = `Ваш логин: ${data.data.login}`;
      })
    }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input {...register('email', { required: true, maxLength: 120 })} />
        <label>password</label>
        <input {...register('password', { required: true, maxLength: 20 })} />
        <label>Age</label>
        {/* <input {...register('Age', { required: true, maxLength: 20 })} />     */}
        <input type='submit' />
      </form>
      <div>
        <p id='qqq'>Вы не залогинены..</p>
        <a id='getProfile' onClick={getProfile}>Play</a>
        <p id='email'></p>
        <p id='login'></p>
      </div>
    </div>

  );
}