import { ArrowRightWithCircle } from 'components';
import Link from 'next/link';
import { PropsType } from './types';

const BlackLinkWithArrowRight: React.FC<PropsType> = (props) => {
  return (
    <Link passHref href={props.link}>
      <button className='flex transition-all ease-in-out duration-150 hover:ring-1 ring-0 ring-purple-400 hover:ring-offset-1 ring-offset-transparent flex-grow-0 py-3 rounded-lg bg-gray-800 space-x-2 text-white px-6'>
        <span>{props.text}</span>
        <ArrowRightWithCircle />
      </button>
    </Link>
  );
};

export default BlackLinkWithArrowRight;
