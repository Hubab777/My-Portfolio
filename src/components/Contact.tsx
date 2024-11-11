'use client'

import React, { useState } from 'react';
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState(''); // Status for feedback

  
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent page reload
    setStatus('Sending...');

    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus('Failed to send the message. Please try again.');
    }
  };

  return (
    <div id="contact" className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>

        {/* This is Contact Info Section */}
        <div className='space-y-8'>
          <h2 className='text-5xl text-yellow-600 border-b-4 inline-block pb-2'>Get In Touch</h2>
          <p className='text-gray-400 text-[18px] pt-2'>Give me a call or leave your message here by submitting this form.</p>
          <div data-aos="zoom-in-right" className='flex gap-3 items-center'>
            <AiTwotoneMail size={40} className='hover: text-[#FD8D30]'/> hubabikram@gmail.com
          </div>
          <div data-aos="zoom-in-right" className='flex gap-3 items-center'>
            <FaPhone size={40} className='hover: text-[#FD8D30]' /> 0322-2413676
          </div>
        </div>

        {/* This is Contact Form Section */}
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='h-[40px] bg-transparent border border-accent px-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='h-[40px] bg-transparent border border-accent px-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="message">Message</label>
            <textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-transparent border border-accent px-2 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500'
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className="px-6 py-3 font-semibold text-white rounded-lg shadow-md 
            bg-gradient-to-r from-teal-500 via-orange-500 to-gray-700 
            hover:from-yellow-300 hover:via-red-400 hover:to-gray-500 transition-all duration-300"
          >
            SEND MESSAGE
          </button>

          {/* This is Feedback Message */}
          {status && (
            <p className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-yellow-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
