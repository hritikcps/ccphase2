import React from 'react';
import logo from "../../utils/images/logo.png";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-[1.5rem] border'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className="ml-[3rem] w-[176px] h-[35.2px]" />
            </div>
            <div className='flex items-center mx-[3rem]'>
                <ul className='flex items-center gap-12 mx-[3rem]'>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">My Courses</a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <RxAvatar className='size-7' />
                    <p className='font-semibold'>Rohit k.</p>
                    <IoMdNotificationsOutline className='size-7' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
