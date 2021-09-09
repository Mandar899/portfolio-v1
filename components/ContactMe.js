import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      toast('Thank you for contacting us!', { type: 'success' });
    } else {
      toast('Please re-check your inputs.', { type: 'error' });
    }
  };
  return (
    <div className='mt-4 p-6 bg-[#161b22] rounded'>
      <ToastContainer />
      <form className='px-3 py-5' onSubmit={onSubmit}>
        <h2 className='text-gray-500 text-3xl my-2 font-semibold'>
          Contact Me
        </h2>
        <div className='grid grid-flow-col grid-cols-2 gap-4'>
          <input
            className='bg-[#0d1117] border border-gray-500 focus:outline-none rounded text-sm p-2'
            value={name}
            name='name'
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='bg-[#0d1117] border border-gray-500 focus:outline-none rounded text-sm p-2'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className='bg-[#0d1117] border border-gray-500 focus:outline-none w-full mt-3 h-40 rounded text-sm p-2'
          placeholder='Message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type='submit'
          className='bg-[#238636] w-full py-2 font-semibold text-sm text-center focus:outline-none mt-2 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
