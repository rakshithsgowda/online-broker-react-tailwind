import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
    console.log(formData)
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold uppercase'>Sign-up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/photo-1553991562-9f24b119ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80'
            alt='key'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            {/* name */}
            <input
              type='text'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Full name'
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '
            />

            {/* email input */}
            <input
              type='text'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email address'
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '
            />

            {/* password input */}
            <div className='relative mb-6'>
              <input
                id='password'
                value={password}
                onChange={onChange}
                placeholder='password'
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                type={showPassword ? 'text' : 'password'}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className=' mb-6'>
                Have an account ?
                <Link
                  to='/sign-in'
                  className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'
                >
                  Sign-in
                </Link>
              </p>
              <p className='mb-6'>
                <Link
                  to='/forgot-password'
                  className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out '
                >
                  Forgot password
                </Link>
              </p>
            </div>
            {/* signIN  */}
            <button
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-900 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'
              type='submit'
            >
              Sign-UP
            </button>

            <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>

            {/* google connect */}
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
