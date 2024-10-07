import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We're passionate about creating amazing web experiences and sharing knowledge with the community.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary"><FaGithub /></a>
              <a href="#" className="text-xl hover:text-primary"><FaTwitter /></a>
              <a href="#" className="text-xl hover:text-primary"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-base-content/10 text-center text-sm">
          <p>© 2023 Your Company Name. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Your Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
