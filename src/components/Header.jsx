import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      <a href="#">
          <div className='text-2xl font-primary font-semibold'>
          <h2 className='text-gradient'>Artur</h2>
          <h2>Karsten</h2>
          </div>
        </a>
        <button className="btn btn-sm">Programmer</button>
      </div>
      </div>
    </header>
  );
};

export default Header;
