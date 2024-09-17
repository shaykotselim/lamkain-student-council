// pages/contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        
        <form>
          {/* Name Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
          </div>
          
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
          </div>
          
          {/* Message Textarea */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Enter your message" className="textarea textarea-bordered w-full" rows="5" required></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
