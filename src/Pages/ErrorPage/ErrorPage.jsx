import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[500px] mx-auto my-8">
                <div><img src={errorImg} alt="" /></div>
                <div className='text-center pt-8'>
                    <h1 className='text-2xl font-semibold pt-3'>Oops.! Page Not Found.!!</h1>
                    <p className='pt-3'>The Page You Are Looking For It's Not Available</p>
                    <a href="/">
                        <button className='btn btn-primary mt-3 py-5 px-8 text-xl bg-gradient-to-r from-[#6530E4] to-[#a570f1]'>Go Back</button>
                    </a>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;