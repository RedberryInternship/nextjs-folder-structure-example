import { ChevronDown } from 'components';
import { PropsType } from './types';
import { useKnowledgeCheckSelect } from './useKnowledgeCheckSelect';

const KnowledgeCheckSelect: React.FC<PropsType> = (props) => {
  const { changeHandler, togglerRef } = useKnowledgeCheckSelect(
    props.handleChange
  );

  return (
    <div
      tabIndex={0}
      ref={togglerRef}
      className=' border-b w-72 relative group flex border-gray-300'
    >
      <span className='flex justify-between  pb-2 items-center w-full'>
        {!props.value ? (
          <span>
            Level of knowledge <span className='text-red-500'>*</span>
          </span>
        ) : (
          props.value
        )}
        <ChevronDown />
      </span>
      <div className='absolute top-full group-focus:flex hidden bg-white left-2 w-full flex-col py-4 g-white shadow-sm rounded-lg'>
        <label
          className='py-2 transition-all duration-150 ease-in hover:bg-gray-200 cursor-pointer'
          htmlFor='beginner'
        >
          <span>Beginner</span>
          <input
            type='radio'
            onChange={changeHandler}
            value='beginner'
            className='hidden'
            name='experience_level'
            id='beginner'
          />
        </label>
        <label
          className='py-2 transition-all duration-150 ease-in hover:bg-gray-200 cursor-pointer'
          htmlFor='intermediate'
        >
          <span>Intermediate</span>
          <input
            type='radio'
            onChange={changeHandler}
            value='intermediate'
            className='hidden'
            name='experience_level'
            id='intermediate'
          />
        </label>
        <label
          className='py-2 transition-all duration-150 ease-in hover:bg-gray-200 cursor-pointer'
          htmlFor='professional'
        >
          <span>Professional</span>
          <input
            type='radio'
            onChange={changeHandler}
            value='professional'
            className='hidden'
            name='experience_level'
            id='professional'
          />
        </label>
      </div>
    </div>
  );
};

export default KnowledgeCheckSelect;
