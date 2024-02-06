import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SighIn() {
  const [formData, setFormData] = useState({})
  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(hello);
    if (!formData.email || formData.password) {
      alert('All fields are required');
      return;
    }
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  return (

    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1">
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              manminder's vlog
            </span>
          </Link>
          <p className='text-sm mt-5 text-gray-400'>
            Here you can login with your email and passwords. You can also login using Google logins.
          </p>
        </div>
        <div className="flex-1">
          <form className='flex flex-col gap-4' >

            <div className="">
              <Label value='Your email' />
              <TextInput type='email' placeholder='Email' id="email" onChange={changeHandler} />
            </div>
            <div className="">
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id="password" onChange={changeHandler} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' onSubmit={handleSubmit} >
              Sign-in
            </Button>
          </form>
          <div className="m-2 rounded-lg mt-5 text-sm text-gray-500">
            <span>
              you have  don't an account <Link to='/sign-in' className='font-semibold hover:underline cursor-pointer text-blue-600'>Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

}
