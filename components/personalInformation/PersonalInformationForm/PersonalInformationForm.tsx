import { ArrowRightWithCircle } from 'components/icons';
import Link from 'next/link';
import { Input } from '../Input';
import { usePersonalInformationForm } from './usePersonalInformationForm';

const PersonalInformationForm = () => {
  const { formik } = usePersonalInformationForm();
  return (
    <form className='w-full space-y-10' onSubmit={formik.handleSubmit}>
      <Input
        inputName='name'
        placeholder='Name *'
        type='text'
        handleChange={formik.handleChange}
        errors={formik.errors}
        value={formik.values['name']}
        dirty={formik.dirty}
      />
      <Input
        inputName='email'
        placeholder='Email address *'
        type='email'
        handleChange={formik.handleChange}
        errors={formik.errors}
        value={formik.values['email']}
        dirty={formik.dirty}
      />
      <Input
        inputName='phone'
        placeholder='Phone number *'
        type='tel'
        handleChange={formik.handleChange}
        errors={formik.errors}
        value={formik.values['phone']}
        dirty={formik.dirty}
      />
      <Input
        inputName='date_of_birth'
        placeholder='Date of birth *'
        type='date'
        handleChange={formik.handleChange}
        errors={formik.errors}
        value={formik.values['date_of_birth']}
        dirty={formik.dirty}
      />
      <div className='flex pl-12 justify-between w-9/12'>
        <Link href='/'>
          <button
            type='button'
            className='py-3 px-4 bg-white border border-black rounded-lg'
          >
            Back
          </button>
        </Link>
        <button className='flex transition-all ease-in-out duration-150 hover:ring-1 ring-0 ring-purple-400 hover:ring-offset-1 ring-offset-transparent flex-grow-0 py-3 rounded-lg bg-gray-800 space-x-2 text-white px-6'>
          <span>Next</span>
          <ArrowRightWithCircle />
        </button>
      </div>
    </form>
  );
};

export default PersonalInformationForm;
