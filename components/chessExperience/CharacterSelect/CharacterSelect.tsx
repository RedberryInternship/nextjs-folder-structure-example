import { ChevronDown } from 'components';
import { PropsType } from './types';
import { useCharacterSelect } from './useCharacterSelect';

const CharacterSelect: React.FC<PropsType> = (props) => {
  const { changeHandler, togglerRef, grandmasters } = useCharacterSelect(
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
            Choose your character <span className='text-red-500'>*</span>
          </span>
        ) : (
          grandmasters?.find((master) => master.id == props.value)?.name ??
          'Choose your character'
        )}
        <ChevronDown />
      </span>
      <div className='absolute top-full bg-white group-focus:flex hidden left-2 w-full flex-col py-4 g-white shadow-sm rounded-lg'>
        {grandmasters?.map((grandmaster) => (
          <label
            className='py-2 transition-all duration-150 ease-in hover:bg-gray-200 cursor-pointer'
            htmlFor={grandmaster.id.toString()}
            key={grandmaster.id}
          >
            <span>{grandmaster.name}</span>
            <input
              type='radio'
              onChange={changeHandler}
              value={grandmaster.id.toString()}
              className='hidden'
              name='character_id'
              id={grandmaster.id.toString()}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelect;
