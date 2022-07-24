import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Crown } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen w-screen relative flex'>
      <ToastContainer />
      <div className='bg-violet-700 z-10 pl-20 absolute space-x-2 items-center font-bold w-[47%] py-4 text-white flex'>
        <Crown /> <span>Redberry Knight Cup</span>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
