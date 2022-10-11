// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
import {
  PhoneIcon,
  PlayIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  return (
    <div className="relative bg-gray-50">
      <div className="relative bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Apex Longevity</span>
                <Image
                  className="w-auto h-8 sm:h-10"
                  src='/navlogo.png'
                  alt=""
                  height={65}
                  width={200}
                  priority='true'
                />
                <span className="w-auto h-8 sm:h-10 text-{#4f46e5}"></span>
              </a>
            </div>
        
           
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              {/* <a href="#" className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">
                Sign in
              </a> */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-apexB whitespace-nowrap hover:bg-apexG"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

       
      </div>

      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">The Most Compliant Way To Offer</span>{' '}
              <span className="block text-apexB xl:inline">Cash Discounts</span>{' '}
              <span className="block xl:inline">To Your Patients</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              More cash paying patients. Fewer to no insurance patients. FREE digital marketing to attract new patients every month!
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium duration-300 bg-white border border-transparent rounded-md text-apexB hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          {/* <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          /> */}
          <Image
          src='/header1image.jpeg'
          alt='Apex Longevity Header Image' 
          layout='fill'
          objectFit='cover'
          />
        </div>
      </main>
    </div>
  )
}
