import React from 'react';
import googleImg from '../../assets/GP.png';
import appImg from '../../assets/ap.png';
import heroImg from '../../assets/hero.png';
import { MdOutlineInstallDesktop } from "react-icons/md";


const Banner = () => {
    return (
        <div className=''>
            <div className='max-w-[800px] mx-auto mt-10'>
                <div>
                    <h1 className='md:text-6xl font-semibold text-center text-3xl '>We Build <br /> <span className='text-[#632EE3]'>Productive</span>Apps</h1>
                    <p className='text-center text-gray-500 p-3 '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className=''>
                    <div className='flex gap-10 mb-10 mt-10 md:max-w-[400px] mx-auto md:ml-50 ml-14 '>

                        <div className='border border-gray-400 rounded-2xl'>
                            <a
                                href="https://play.google.com/store/games?hl=en"
                                className='flex gap-4 items-center px-3 py-1'
                            >
                                <img className='h-[50px] w-[50px] rounded-xl' src={googleImg} alt="Google Play logo" />
                                Google Play
                            </a>
                        </div>

                        <div className='border border-gray-400 rounded-2xl '>
                            <a href="https://www.apple.com/app-store/" className='flex gap-4 items-center px-4 py-1'
                            >
                                <img className='h-[50px] w-[50px] rounded-xl' src={appImg} alt="Google Play logo" />
                                App Store
                            </a>

                        </div>

                    </div>

                    <div>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#6530E4] to-[#a570f1] py-8 mb-20'>
                <h1 className='md:text-5xl text-3xl text-center font-bold '>Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-3 text-center pt-5'>
                    <div className='text-white'>
                        <p className=''>Total Downloads</p>
                        <h1 className='text-3xl  font-bold pt-2'>
                            29.6M 
                        </h1>
                        <p className='pt-2'>21% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p className=''>Total Reviews</p>
                        <h1 className='text-3xl  font-bold pt-2'>906K</h1>
                        <p className='pt-2'>46% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p className=''>Active Apps</p>
                        <h1 className='text-3xl font-bold pt-2'>132+</h1>
                        <p className='pt-2'>31 more will Launch</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;