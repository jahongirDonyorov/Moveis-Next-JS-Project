import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Accaunt from './accaunt';
import { useState } from 'react';

function Auth() {
  const [auth, setAuth] = useState<'signup' | 'signin' >('signin')

  const toggleAuth = (state:'signup' | 'signin') => {
    setAuth(state)
  }

  return ( 
  <>
  <Head>
        <title>Auth</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
  <Image src={"./logo.svg"} alt={"logo"} width={70}  height={70} className={'absolute left-4 top-4 cursor-pointer object-contain'} /> 

  <form className='relative mt-24 space-y-8 rounded bg-black/75 py-10  px-6 md:mt-0 md:max-w-md md:mx-14'>
    {/* {auth === 'signin' ? (
      <h1 className='text-4xl font-semibold'>Sign In</h1>
    ) : (
      <h1 className='text-4xl font-semibold'>Sign Up</h1>
      
    )} */}
      <h1 className='text-4xl font-semibold'>{auth === 'signup'? 'Sign Up' : 'Sign In'}</h1>

    {/* <div className="space-y-4">
      <label className='inline-block w-full'>
        <input type="text" placeholder='Email'  className='input'/>
      </label>
      <label className='inline-block w-full'>
        <input type="text" placeholder='Password' className='input'/>
      </label>
    </div> */}
    {auth === 'signin' ? (
      <div className="space-y-4">
      <label className='inline-block w-full'>
        <input type="text" placeholder='Email'  className='input'/>
      </label>
      <label className='inline-block w-full'>
        <input type="text" placeholder='Password' className='input'/>
      </label>
    </div>
    ) : (
      <div className="space-y-4">
      <label className='inline-block w-full'>
        <input type="text" placeholder='Email'  className='input'/>
      </label>
      <label className='inline-block w-full'>
        <input type="text" placeholder='Password' className='input'/>
      </label>
      <label className='inline-block w-full'>
        <input type="text" placeholder='Confirm Password' className='input'/>
      </label>
    </div>
    )}
    <button type='submit' className='w-full bg-[#e10856] py-3 font-semibold'>{auth === 'signin'? 'Sign In':'Sign Up'}</button>

    {auth === 'signin' ? (
      <div className='text-[grey]'>
        not yet accaunt? 
        <button type='button' className='text-white hover:underline ml-2' onClick={()=> toggleAuth('signup')}>
          Sign Up Now
        </button>
     </div>
    ) : (
      <div className='text-[grey]'>
        Already have accaunt? 
        <button type='button' className='text-white hover:underline ml-2' onClick={()=> toggleAuth('signin')}>
          Sign In
        </button>
      </div>
    )}

  </form>
  </>
  )
}

export default Auth