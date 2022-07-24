import { Check } from 'components/icons';
import { storeCookieInFieldsObject } from 'helpers';
import { ChangeEvent } from 'react';
import { validateSingleField } from './helpers';
import { PropsType } from './types';

const Input: React.FC<PropsType> = (props) => {
  return (
    <div className='relative w-9/12 pl-12'>
      <input
        name={props.inputName}
        className={`w-full border-b border-gray-300 transition-all duration-150 ease-in-out ${
          props.errors[props.inputName] ? 'bg-red-500' : 'focus:bg-gray-300'
        } bg-opacity-40 outline-none ring-0 py-2 pl-4 rounded-md shadow-sm pr-12`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.handleChange(e);
          storeCookieInFieldsObject(e.currentTarget.value, props.inputName);
        }}
        value={props.value}
      />
      {props.dirty && validateSingleField(props.inputName, props.value) ? (
        <div className='absolute top-1/2 left-[90%]  translate-x-full -translate-y-1/2'>
          <Check />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
