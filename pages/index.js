import Head from 'next/head';
import { useState } from 'react';
import { BsBook } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { RiBookMarkFill } from 'react-icons/ri';
import { AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import Profile from '../components/Profile';
import Repository from '../components/Repository';
import Project from '../components/Project';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import { getProjects } from './api/project';

const Home = ({ user, repos, projects }) => {
  const [tab, setTab] = useState('profile');
  return (
    <>
      <Head>
        <title>Mandar Manvi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-[#0d1117]'>
        {/* Navbar  */}
        <Navbar />

        {/* Sidebar /  */}
        <div className='container md:flex-nowrap text-gray-100 mx-auto py-10 md:px-16 px-2 flex flex-wrap'>
          {/* Sidebar wrapper */}
          <div className='md:w-1/4 w-full'>
            <Sidebar user={user} />
          </div>

          {/* overview / repositories / projects / packages */}
          <div className='px-1 w-full md:w-3/4 overflow-hidden'>
            <nav className='flex border-b border-gray-800 lg:space-x-6 md:space-x-2.5 sm:space-x-0 items-center'>
              {/* overview  */}
              <div>
                <button
                  className='flex items-center w-full px-1 text-gray-300 text-sm'
                  onClick={() => setTab('profile')}
                >
                  <BsBook className='mr-2 text-gray-600 hidden md:block' />
                  <p className={tab === 'profile' && 'font-semibold'}>
                    Overview
                  </p>
                </button>
                <div
                  className={
                    tab === 'profile'
                      ? 'border-b-2 w-full border-[#f78166] mt-2'
                      : 'border-b-2 w-full border-transparent mt-2'
                  }
                ></div>
              </div>

              {/* repositories  */}
              <div>
                <button
                  className='flex items-center w-full px-2 text-gray-300 text-sm'
                  onClick={() => setTab('repositories')}
                >
                  <RiBookMarkFill className='mr-2 text-gray-600 hidden md:block' />
                  <p className='text-sm flex items-center'>
                    Repositories{' '}
                    <span className='inline-flex items-center justify-center px-2 py-1 ml-1 mr-2 text-xs font-bold leading-none text-gray-300 bg-gray-700 rounded-full'>
                      {user.public_repos}
                    </span>
                  </p>
                </button>
                <div
                  className={
                    tab === 'repositories'
                      ? 'border-b-2 w-full border-[#f78166] mt-2'
                      : 'border-b-2 w-full border-transparent mt-2'
                  }
                ></div>
              </div>

              {/* projects */}
              <div>
                <button
                  onClick={() => setTab('projects')}
                  className='flex items-center w-full px-1 text-gray-300 text-sm'
                >
                  <AiOutlineProject className='mr-2 text-gray-600 hidden md:block' />
                  <p className='text-sm'>Projects</p>
                </button>
                <div
                  className={
                    tab === 'projects'
                      ? 'border-b-2 w-full border-[#f78166] mt-2'
                      : 'border-b-2 w-full border-transparent mt-2'
                  }
                ></div>
              </div>

              {/* contact me  */}
              <div>
                <button
                  onClick={() => setTab('contact-me')}
                  className='flex  items-center px-1 text-gray-300 text-sm'
                >
                  <AiOutlineMail className='mr-2 text-gray-600 hidden md:block' />
                  <p className='text-sm whitespace-nowrap'>Contact Me</p>
                </button>
                <div
                  className={
                    tab === 'contact-me'
                      ? 'border-b-2 w-full border-[#f78166] mt-2'
                      : 'border-b-2 w-full border-transparent mt-2'
                  }
                ></div>
              </div>
            </nav>

            {tab === 'profile' && <Profile user={user} />}
            {tab === 'repositories' && <Repository repo={repos} />}
            {tab === 'projects' && <Project projects={projects} />}
            {tab === 'contact-me' && <ContactMe />}
          </div>
        </div>
        <div className='border-b border-gray-700'></div>
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const userResp = await fetch(`https://api.github.com/users/Mandar899`);
  const user = await userResp.json();

  const reposResp = await fetch(
    `https://api.github.com/users/Mandar899/repos?sort=created_at&per_page=10`
  );
  const repos = await reposResp.json();

  const projects = await getProjects();

  return {
    props: { user, repos, projects },
  };
}

export default Home;
