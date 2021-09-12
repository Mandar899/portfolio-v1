import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='hidden sm:flex flex-wrap items-center space-x-1 space-y-2 justify-evenly text-xs text-[#59a6ff] py-6'>
        <p className='text-gray-500 text-xs'>&copy; 2021 Github, Inc.</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>Docs</p>
        <AiFillGithub className='text-2xl text-gray-600 hidden md:block' />
        <p>Contact Github</p>
        <p>Pricing</p>
        <p>API</p>
        <p>Training</p>
        <p>Blog</p>
        <p>About</p>
      </div>
      <div className='py-2 flex items-center md:justify-start justify-center bg-[#161b22] px-4'>
        <p className='flex flex-row text-gray-300 text-xs'>
          Built with
          <a href='https://nextjs.org' target='_blank'>
            <img
              src='/next-js.svg'
              alt='nextjs'
              className='h-4 w-4 mx-1 text-white'
            />
          </a>
          <a href='https://tailwindcss.com' target='_blank'>
            <img
              src='/tailwind-css.svg'
              alt='tailwindcss'
              className='h-4 w-4 mx-1'
            />
          </a>
          and
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
            &nbsp; 💖
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
