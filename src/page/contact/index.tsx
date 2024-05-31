import React from 'react';
import FadeInSection from '../../FadeInSection';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="bg-gray-100 w-72 h-11 my-8 rounded-3xl flex items-center">
          <Link
            to={'/'}
            className="w-24 h-9 font-bold text-sm text-gray-500 bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center"
          >
            Home
          </Link>
          <div className="w-24 h-9 font-bold text-sm text-gray-500 bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
            Profile
          </div>
          <div className="w-24 h-9 font-bold text-sm text-gray-500 bg-white mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
            Contact
          </div>
        </div>
      </div>
      <div className="w-full h-56 bg-white"></div>
      <FadeInSection delay={400}>
        <div className="flex-col align-middle justify-center items-center">
          <div className="rounded-md text-7xl flex justify-center font-bold ">
            Let's work together.
          </div>
        </div>
      </FadeInSection>
      <FadeInSection delay={500}>
        <div className="flex-col align-middle justify-center items-center">
          <div className="rounded-md text-7xl flex justify-center font-bold">
            Get in touch.
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
