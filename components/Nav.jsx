'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
  const isUserLoggedIn = true;
  const [provider, setProvider] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProvider = async() => {
      const response = getProviders();

      setProvider(response);
    }

    fetchProvider();
  }, []);


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 items-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link
              href='/create-prompt'
              className='black_btn'
            >
            Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Log Out
            </button>


            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                alt='profile'
                width={30}
                height={30}
                className='rounded_full'
              >

              </Image>
            </Link>
          </div>
        ) : (
          <>
          {provider && Object.values(provider).map((provider) => (
            <button
            type='button'
            key={provider.key}
            className='black_btn'
            onClick={() => signIn(provider.id)}>
          
            </button>
          ))}
          </>
        )}
      </div>

      {/* Mobile Nav */}
<div className='sm:hidden flex relative'>
  {isUserLoggedIn ? (
    <div className='flex'>
      <Image
        src='/assets/images/logo.svg'
        alt='profile'
        width={30}
        height={30}
        className='rounded-full'
        onClick={() => setToggleDropdown((prev) => !prev)}
      />
      
      {toggleDropdown && (
        <div className='dropdown'>
          <Link
            href='/profile'
            className='dropdown_link'
            onClick={() => setToggleDropdown(false)}
          >
            My Profile
          </Link>
          <Link
            href='/create-prompt'
            className='dropdown_link'
            onClick={() => setToggleDropdown(false)}
          >
            Create Prompt
          </Link>
          <button
            type="button"
            onClick={() => {
              setToggleDropdown(false);
              signOut();
            }}
            className='mt-5 w-full black_btn'
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  ) : (
    <>
      {providers && Object.values(providers).map((provider) => (
        <button
          type='button'
          key={provider.id}
          className='black_btn'
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </button>
      ))}
    </>
  )}
</div>

    </nav>
  )
}

export default Nav;
