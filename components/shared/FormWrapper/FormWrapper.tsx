import { DoubleCheck } from 'components';
import { PropsType } from './types';

const FormWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className='flex-grow flex flex-col items-start justify-start'>
      <div className='pl-12 py-4 border-b capitalize w-full border-gray-200'>
        {props.headerText}
      </div>
      <div className='flex flex-col space-y-16 w-full pl-12  mb-20'>
        <div className='flex flex-col space-y-1 w-2/5 mt-12 '>
          <div className='flex items-center self-center w-3/4 justify-between'>
            <div
              className={`w-12 justify-center h-11 flex items-center rounded-xl ${
                props.currentStep >= 1
                  ? 'bg-emerald-50'
                  : 'border border-gray-300'
              }`}
            >
              {props.currentStep === 1 ? 1 : <DoubleCheck />}
            </div>
            <div className='flex-grow border-b mx-4 border-gray-300 h-[1px]'></div>
            <div
              className={`w-12 justify-center h-11 flex items-center rounded-xl ${
                props.currentStep >= 2
                  ? 'bg-emerald-50'
                  : 'border border-gray-300'
              }`}
            >
              2
            </div>
          </div>
          <div className='flex justify-between'>
            <span>Personal information</span>
            <span>Chess experience</span>
          </div>
        </div>
        <div className='py-2'>
          <h1 className='text-3xl'>{props.pageName}</h1>
          <h2 className='text-gray-700 text-xs'>{props.pageDescription}</h2>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default FormWrapper;
