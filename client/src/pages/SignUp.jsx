import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className=' min-h-screen mt-20'>

      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 ">

        {/* left side  */}
        <div className=" flex-1">
          <Link to="/" className='  font-bold dark:text-white text-4xl'> <span className=' px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> manminder's</span> vlog </Link>
          <p className='text-sm mt-5 text-gray-400'>
            Here you can login with your email and passwords . You can also login using google logins
          </p>

        </div>

        {/* right side */}
        <div className=" flex-1">
          <form className=' flex flex-col gap-4' >
            <div className="">
              <Label value=' your username' />
              <TextInput type='text' placeholder='username..' id="username" />
            </div>
            <div className="">
              <Label value=' your email' />
              <TextInput type='email' placeholder='email' id="username" />
            </div>
            <div className="">
              <Label value=' your password' />
              <TextInput type='password' placeholder='password' id="username" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' >
              Sign up
            </Button>

          </form>

          <div className=" m-2 rounded-lg mt-5 text-sm text-gray-500">
            <span>
              have an account <Link to='/sign-in' className='font-semibold hover:underline cursor-pointer text-blue-600'>Sign in</Link>
            </span>
          </div>

        </div>


      </div >
    </div >
  )
}
