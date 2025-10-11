import React from 'react';
import { FaGithub } from "react-icons/fa";
import logoImg from '../../assets/logo.png'
import { GrHome } from "react-icons/gr";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { Link } from 'react-router';




const Navbar = () => {
    const links = <>
        <Link to={'/'}>
            <li className='m-2  '><GrHome />Home</li>
        </Link>
        <Link to='/allApps'><li className='m-2 '><FaAppStore />Apps</li></Link>


        <li className='m-2  '><MdInstallDesktop />Installation</li>
    </>


    return (

        <div className="navbar bg-base-100 shadow-sm max-w-[1450px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div >

                    <Link to={'/'}>
                        <a className="btn btn-ghost text-xl text-violet-600"><img className='h-[50px] w-[50px]' src={logoImg} alt="" />HERO.IO</a>
                    </Link>

                    {/* <a className="btn btn-ghost text-xl text-violet-600"><img className='h-[50px] w-[50px]' src={logoImg} alt="" />HERO.IO</a> */}
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/' className="btn bg-gradient-to-r from-[#6530E4] to-[#a570f1] px-6 py-3 font-semibold text-lg rounded-l "><FaGithub />Contribute</a>
                {/* href="https://github.com/Alif-Hossen/Build-App-Website" */}
            </div>
        </div>
    );
};

export default Navbar;

