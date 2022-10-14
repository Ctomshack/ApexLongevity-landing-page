/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ContactUs() {

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
      console.log(formData)
    });

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
  }
  return (
    <div className="relative bg-white" id='ContactUs'>
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{`Let's Work Together`}</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Submit the contact form or use one of the below options to get in touch with an Apex Longevity representative today
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>36901 American Way, Suite 7</p>
                  <p>Avon, OH 44011</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (877) 712-2739</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@apexlongevity.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form onSubmit={handleSubmit} action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center px-6 py-3 text-base font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-apexB hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexB focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
