import {
  KnowledgeCheckSelect,
  CharacterSelect,
  ArrowRightWithCircle,
} from 'components';
import Link from 'next/link';
import { useChessExperienceForm } from './useChessExperienceForm';

const ChessExperienceForm: React.FC = () => {
  const { formik } = useChessExperienceForm();
  return (
    <form onSubmit={formik.handleSubmit} className='pl-12 w-9/12'>
      <div className='mt-16 flex justify-between  w-full'>
        <KnowledgeCheckSelect
          handleChange={formik.handleChange}
          value={formik.values.experience_level}
        />
        <CharacterSelect
          handleChange={formik.handleChange}
          value={formik.values.character_id}
        />
      </div>
      <div className='mt-20'>
        <span>
          Have you participated in the Redberry Championship?{' '}
          <span className='text-red-500'>*</span>
        </span>
        <div className='flex space-x-6 items-center'>
          <label className='flex items-center space-x-2' htmlFor='yes'>
            <input
              type='radio'
              id='yes'
              value={'true'}
              onChange={formik.handleChange}
              name='already_participated'
            />
            <span>Yes</span>
          </label>
          <label className='flex items-center space-x-2' htmlFor='no'>
            <input
              type='radio'
              id='no'
              value={'false'}
              onChange={formik.handleChange}
              name='already_participated'
            />
            <span>No</span>
          </label>
        </div>
      </div>
      <div className='flex mt-16 justify-between w-full'>
        <Link href='/personal-information'>
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

export default ChessExperienceForm;
