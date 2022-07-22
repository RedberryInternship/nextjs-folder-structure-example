import { BlackButtonWithArrowRight } from 'components';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div className='w-[47%] flex-shrink-0 relative h-screen bg-red-600'>
        <Image
          src='/assets/landing-image.png'
          layout='fill'
          alt='landing image'
        />
      </div>
      <div className='flex-grow flex flex-col items-start justify-center space-y-16 bg-orange-600 pl-20'>
        <h1 className='text-white text-8xl leading-[7rem] font-extrabold capitalize'>
          chess says{' '}
          <span className='text-black text-base font-normal'>a lot about</span>{' '}
          <br />
          who you are
        </h1>
        <BlackButtonWithArrowRight
          link='/personal-information'
          text='Get Started'
        />
      </div>
    </>
  );
};

export default Home;
