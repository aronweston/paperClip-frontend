import React from 'react';
import Logo from '../logo.svg'
import { Link } from 'react-browser-router'

const Header = () => {
    return (
        <header className="bg-white container mx-auto flex justify-between">
        <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-2xl"> <Link to="/home"></Link></div>
        <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2  text-2xl">{ Logo }</div>
        <div activeClassName="text-red" className="inline-flex items-center py-2 px-2 my-2 text-2xl">Menu</div>
    </header> 
    );
}

export default Header;
