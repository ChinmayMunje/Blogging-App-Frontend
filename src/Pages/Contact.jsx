import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className='py-20 px-4'>
      <div className='flex flex-col items-start justify-start'>
        <h1 className='text-2xl font-bold text-blue-950 underline'>Get In Touch</h1>
        <p>For more details please Contact us.</p>
      </div>

      <div className='grid grid-cols-4 shadow-2xl h-[600px]'>
        <div className='bg-white col-span-3'>
          <div className="flex-1 p-4">
            {/* Content for the left side goes here */}
            <h1 className='text-blue-950 font-bold text-2xl text-start pt-10 pl-5'>Send Us Message</h1>
            <div className='grid grid-cols-2'>

              <form action="" className='pt-4 pl-5 text-start'>
                <label className='text-lg font-medium text-gray-500'>Your Name</label>
                <input type="text" placeholder='Name' name='name' className='w-full border border-blue-900 rounded-xl p-2 mt-1 bg-transparent' />
                <label className='text-lg font-medium text-gray-500'>Email Address</label>
                <input type="email" placeholder='Email' name='email' className='w-full border border-blue-900 rounded-xl p-2 mt-1 bg-transparent' />
                <label className='text-lg font-medium text-gray-500'>Phone no.</label>
                <input type="number" placeholder='Phone no' name='phone' className='w-full border border-blue-900 rounded-xl p-2 mt-1 bg-transparent' />
                <label className='text-lg font-medium text-gray-500'>Message</label>
                <textarea type="text" rows="5" cols="8" placeholder='Enter Your message' name='message' className='w-full border border-blue-900 rounded-xl p-2 mt-1 bg-transparent' />

                <button className='rounded-md mt-4 px-8 py-2 flex items-center text-[14px] font-bold text-white bg-blue-950 border-[2px] border-blue-900'>Send</button>
              </form>
            </div>
          </div>

        </div>
        <div className='bg-blue-900'>
          <div className="flex-1 p-4 text-white">
            <h1 className='font-bold text-2xl text-start pt-10'>Contact Information</h1>
            <div className='flex flex-col pt-4 pl-5 text-start'>
              <div className='flex flex-row'>
                <MdLocationOn className='h-8 w-8 pr-2'/><span>360 Kings Street, Amsterdam Netherlands, PA 19053</span>
              </div>
              <div className='flex flex-row pt-8'>
              <MdPhoneIphone className='h-8 w-8 pr-2'/><span>(800)-900-200-300</span>
              </div>
              <div className='flex flex-row pt-8'>
              <MdOutlineMail className='h-8 w-8 pr-2'/><span>info.Bloglink@gmail.com</span>
              </div>
            </div>

          </div>
          <div className='flex space-x-4 sm:mt-0 pl-10'>
            <a href="" className='text-white transition-all duration-300 hover:text-blue-400'><FaTwitter className='h-6 w-6' /></a>
            <a href="" className='text-white transition-all duration-300 hover:text-blue-400'><FaInstagram className='h-6 w-6' /></a>
            <a href="" className='text-white transition-all duration-300 hover:text-blue-400'><FaFacebookF className='h-6 w-6' /></a>

          </div>
        </div>
      </div>
      </div>


    </>
  )
}

export default Contact


//<div className="flex h-[600px]  shadow-2xl">

{/* Left column with a different color */ }


{/* Right column with a blue color */ }

//</div>//