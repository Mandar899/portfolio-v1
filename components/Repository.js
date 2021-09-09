import Link from 'next/dist/client/link';
import { AiOutlineEye } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';

const Repository = ({ repo }) => {
  return (
    <section className='mt-4 border border-gray-900 text-gray-900'>
      {console.log(repo)}
      <div className='flex items-center mt-2'>
        <input
          className=' hidden md:block bg-[#0d1117] border border-gray-800 outline-none focus:border-gray-600 w-84 rounded m-2 px-2 text-xs text-gray-600 w-64 h-6'
          type='text'
          placeholder='Find a repository...'
        />
      </div>
      {repo?.map((data) => (
        <div key={data?.id} className='p-3'>
          <Link href={data?.svn_url} className='font-xl'>
            <p className='text-[#59a6ff] text-xl font-semibold cursor-pointer'>
              {data?.name}
            </p>
          </Link>

          <p className='text-gray-400 my-3 text-sm  '>{data?.description}</p>
          <div className='flex items-center mt-3 space-x-4'>
            <div className='flex items-center'>
              <p className='text-gray-300 text-xs  '>{data?.language}</p>
            </div>
            <div className='flex items-center'>
              <FiStar className='text-gray-400 h-4 w-4 mr-1' />
              <p className='text-gray-300 text-xs  '>
                {data?.stargazers_count}
              </p>
            </div>

            <div className='flex items-center'>
              <AiOutlineEye className='text-gray-400 h-4 w-4 mr-1' />
              <p className='text-gray-300 text-xs  '>{data?.watchers_count}</p>
            </div>
          </div>
          <div className='border-b mt-2 border-gray-800'></div>
        </div>
      ))}
    </section>
  );
};

export default Repository;
