import React from 'react';
import { NavLink } from 'react-router-dom';


const Mobile = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 p-4 text-center items-center bg-white-500'
          : 'hidden'
      }
      onClick={toggle}
    >
        <NavLink to='/' className='md:px-8 py-2 text-center block md:mb-0 mb-2 border-2 transition-colors '>
         Domov
        </NavLink>
        <NavLink to='/login' className='md:px-8 py-2 text-center block md:mb-0 mb-2 border-2 transition-colors ' activeClassName="fill-current text-blue-700">
          Login
        </NavLink>
        <NavLink to='/register' className='md:px-8 py-2 text-center block md:mb-0 mb-2 border-2 transition-colors ' activeClassName="fill-current text-blue-700">
          Register
        </NavLink>
    </div>
  );
};

export default Mobile;