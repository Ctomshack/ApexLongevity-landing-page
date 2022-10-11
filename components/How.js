import { CheckIcon } from '@heroicons/react/24/outline'
import React from "react"

const features = [
  'Step 1: Submit New Provider application',
  'Step 2: Complete the Apex training video series',
  'Step 3: Set up and submit your unique Apex fee schedule',
  'Step 4: Create & access your Provider account',
  'Step 5: Receive your Welcome Kit',
  
]

export default function How() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gray-900">Become an Apex Longevity Provider for </span>
              <span className="text-apexB"> Free</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Includes every feature we offer plus unlimited member enrollments,
            </p>
            <p className="text-xl text-gray-500 ">
              1-on-1 training, and lifetime customer support
            </p>
          </div>
          <a
            href="#ContactUs"
            className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a>
        </div>
        <div className="pt-16 border-t border-gray-200 xl:grid xl:grid-cols-2 xl:gap-x-8">
          <div>
            <h2 className="text-lg font-semibold text-apexB">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">
              Access your admin dashboard to enroll and update patient memberships, lifetime customer support, and free training to ensure your staff is well-equipped for success with Apex Longevity.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-1 md:gap-x-8 xl:col-span-1 xl:mt-0">
            <ul role="list" className="divide-y divide-gray-200">
              {features.map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="flex py-4 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-apexG" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="flex py-4">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-apexG" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}
