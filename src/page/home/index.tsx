import React, { useEffect, useState } from 'react';
import FadeInSection from '../../FadeInSection';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Catpicture from '../../catPicture';

type cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const Homepage: React.FC = () => {
  const [res, setRes] = useState<cat[]>([]);
  const Calldata = async (): Promise<cat[]> => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      console.log(response.data);
      setRes(response.data);
      return response.data as cat[];
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    Calldata();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="bg-gray-100 w-72 h-11 my-8 rounded-3xl flex items-center">
          <div className="w-24 h-9 font-bold text-sm text-gray-500 bg-white mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
            Home
          </div>
          <div className="w-24 h-9 font-bold text-sm text-gray-500 bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
            Profile
          </div>
          <Link
            to={'/contact'}
            className="w-24 h-9 font-bold text-sm text-gray-500 bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full h-20 bg-white"></div>
      <FadeInSection delay={400}>
        <div className="flex-col align-middle justify-center items-center">
          <div className="rounded-md text-7xl flex justify-center font-bold ">
            A brand and product
          </div>
          <div className="rounded-md text-7xl flex justify-center font-bold">
            designer working with
          </div>
          <div className="rounded-md text-7xl flex justify-center font-bold">
            clients globally
          </div>
        </div>
        <div className="w-full h-40 flex items-center justify-center">
          <div className="bg-white w-96 h-8 my-8 rounded-3xl flex items-center justify-between">
            <div className="px-2 h-8 font-bold text-sm  bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
              Expertise
            </div>
            <div className="px-2 h-8 font-bold text-sm  bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
              Branding
            </div>
            <div className="px-2 h-8 font-bold text-sm  bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
              Product
            </div>
            <div className="px-2 h-8 font-bold text-sm  bg-gray-100 mx-1 my-2 flex rounded-3xl text-center items-center justify-center">
              Design Systems
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={600}>
        <div className="p-8  text-white rounded-md">
          <Catpicture res={res} />
        </div>
      </FadeInSection>
      <FadeInSection delay={600}>
        <div className="flex-col items-center align-middle justify-center py-60 ">
          <div className="text-5xl flex justify-center items-center">
            Let's work together.
          </div>
          <div className="text-5xl flex justify-center ">Get in touch.</div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Homepage;
