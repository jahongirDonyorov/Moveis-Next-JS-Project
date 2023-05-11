import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Accaunt from './accaunt';
import { useState } from 'react';
import TextFild from '../companets/text-fild/text-fild';
import { Formik,Form} from 'formik'
// https://rb.gy/kbrbd
function Auth() {
  const [auth, setAuth] = useState<'signup' | 'signin' >('signin')

  const toggleAuth = (state:'signup' | 'signin') => {
    setAuth(state)
  }

  const onSubmit = formData => {
    console.log(formData);
  }

  return ( 
  <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent '>
  <Head>
        <title>Auth</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>

  <Image src={`https://rb.gy/kbrbd`} alt={'bg'} fill className='object-cover -z-10 !hidden sm:!inline opacity-60'  />

  <Image 
    src={"./logo.svg"} 
    alt={"logo"} 
    width={70}  
    height={70} 
    className={'absolute left-4 top-4 cursor-pointer object-contain'} 
  /> 

  <div className='relative mt-24 space-y-8 rounded bg-black/75 py-10  px-6 md:mt-0 md:max-w-md md:px-14'>

      <h1 className='text-4xl font-semibold'>{auth === 'signup'? 'Sign Up' : 'Sign In'}</h1>

    <Formik initialValues={{email:'', password:''}} onSubmit={onSubmit}>
      <Form>
          <div className="space-y-4">
            <TextFild name='email' type={'email'} placeholder='Email'/>
            <TextFild name='password' type={'password'} placeholder='Password'/>
          </div>

          {auth === 'signin' ? (
            <button type='submit' className='w-full bg-[#e10856] py-3 mt-4 font-semibold'>
              Sign In
            </button>
          ) : (
            <button type='submit' className='w-full bg-[#e10856] py-3 mt-4 font-semibold'>
              Sign Up
            </button>
          )}
      </Form>
    </Formik>


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

  </div>
  </div>
  )
}

export default Auth