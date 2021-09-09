import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiStar } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Sidebar = ({ user }) => {
  return (
    <aside className='flex flex-col p-2'>
      <div className='md:block flex justify-between items-center px-2'>
        {/* avatar  */}
        <div className='hidden md:block'>
          <Image
            src='https://github.com/Mandar899.png'
            width='250'
            height='250'
            className='rounded-full'
          />
        </div>

        <div className='block md:hidden'>
          <Image
            src='https://github.com/Mandar899.png'
            width='100'
            height='100'
            className='rounded-full'
          />
        </div>

        {/* name and username  */}
        <div className='px-2'>
          <h1 className='mt-4 text-2xl font-semibold text-gray-300'>
            {user?.name}
          </h1>
          <Link href='https://github.com/Mandar899'>
            <h4 className='text-gray-400 font-thin text-lg leading-4'>
              {user?.login}
            </h4>
          </Link>
        </div>
      </div>

      {/* user bio  */}
      <p className='mt-4 text-gray-300 text-sm'>{user?.bio}</p>

      {/* followers / followings / stars  */}
      <div className='mt-4 lg:flex-row md:flex-col flex items-center'>
        <div className='flex items-center'>
          <FiUsers className=' text-gray-400 h-3 w-3 mr-1' />
          <p className='text-gray-500 text-sm md:inline-flex'>
            <span className='text-gray-200 mr-1'>{user?.followers}</span>
            followers
          </p>
        </div>
        <p className='md:hidden lg:inline-flex text-gray-200 text-xs mx-1'>
          &bull;
        </p>
        <div className='flex items-center'>
          <p className='text-gray-500 text-sm md:inline-flex'>
            <span className='text-gray-200 mr-1'>{user?.following}</span>{' '}
            following
          </p>
        </div>
        <p className='lg:inline-flex md:hidden text-gray-200 text-xs mx-1'>
          &bull;
        </p>
        <div className='flex items-center'>
          <FiStar className='text-gray-400 h-3 w-3 mr-1' />
          <p className='text-gray-500 text-sm md:inline-flex'>
            <span className='text-gray-200'>2</span>
          </p>
        </div>
      </div>

      <div className='border-b border-gray-600 mt-3'></div>

      <div className='mt-4'>
        <h2 className='text-gray-400 font-semibold text-lg mb-3'>
          Reach Out Via
        </h2>
        <div className='flex items-center space-x-2 sm:space-x-1'>
          <a href='mailto:mandarmanvi899@gmail.com' target='_blank'>
            <SiGmail className='text-gray-500 text-xl hover:text-gray-400' />
          </a>
          <a href='https://instagram.com/mandar_manvi' target='_blank'>
            <AiOutlineInstagram className='text-gray-500 text-xl hover:text-gray-400' />
          </a>
          <a href='https://linkedin.com/in/mandar-manvi' target='_blank'>
            <AiFillLinkedin className='text-gray-500 text-xl hover:text-gray-400' />
          </a>
          <a href='https://twitter.com/ManviMandar' target='_blank'>
            <AiOutlineTwitter className='text-gray-500 text-xl hover:text-gray-400' />
          </a>
          <a href='https://githu.com/Mandar899' target='_blank'>
            <AiFillGithub className='text-gray-500 text-xl hover:text-gray-400' />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
