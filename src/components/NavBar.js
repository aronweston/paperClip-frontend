import React from 'react';
import Logo from '../logo.svg'

const Header = () => {
    return (
      <header className="bg-white container mx-auto flex justify-between">
            <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-2xl" to='/flights'> First</div>

            <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2  text-2xl" to='/search'>{ Logo }</div>

            <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-2xl" to='/login'>Menu</div>
        </header> 
    );
}

export default Header;
