import { Rocket } from 'components';
import { NextPage } from 'next';
import Image from 'next/image';

const Submitted: NextPage = () => {
  return (
    <>
      <div className='w-[47%] flex-shrink-0 relative h-screen bg-red-600'>
        <Image
          src='/assets/submitted.png'
          layout='fill'
          alt='submitted image'
          priority
        />
      </div>
      <div className='flex-grow flex flex-col items-center justify-center space-y-16  '>
        <Rocket />
        <h1 className='text-3xl'>Onboarding completed!</h1>
      </div>
    </>
  );
};

export default Submitted;
