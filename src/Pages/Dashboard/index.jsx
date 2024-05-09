import React from 'react'
import Navbar from '../../components/Navbar'
import profile from "../../utils/images/imageDp.png"
import { RiGraduationCapFill } from "react-icons/ri";
import { TbUserPentagon } from "react-icons/tb";

const Dashboard = () => {
    return (
        <div className='flex flex-col overflow-hidden '>
            <Navbar />
            <h1 className="flex items-center justify-center font-semibold text-xl my-[1.5rem] mr-[25rem]">Dashboard</h1>
            <div className="flex flex-row items-center justify-between">
                <div className=" flex flex-col justify-start items-center w-[20rem] h-[20rem] bg-gray-50 border rounded-lg relative ml-[7rem] px-[2rem] py-[2rem]">
                    <img
                        src={profile}
                        alt="profile"
                        className="w-16 h-16 rounded-full mr-4 mt-[1rem]"
                    />
                    <div>
                        <h2 className="text-lg font-semibold py-[1rem]">Hello Akash Umang!</h2>
                        <p>xxxxxxxxxxx@gmail.com</p>
                        <p>xxxx xxxx xx</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full mx-[2rem]">
                    <div className="w-[416px] h-[286px] flex flex-col justify-start bg-white rounded-lg border shadow-md p-8 ">
                        <div className='bg-gray-300 flex justify-center items-center rounded-full w-[51px] h-[51px] my-[2rem]'>
                            <RiGraduationCapFill className='size-7' />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">My Courses</h2>
                        <p className="text-gray-700">Explore, track and access your purchased courses here!</p>
                    </div>
                    <div className="w-[416px] h-[286px] flex flex-col justify-start bg-white rounded-lg border shadow-md p-8 ">
                        <div className='bg-gray-300 flex justify-center items-center rounded-full w-[51px] h-[51px] my-[2rem]'>
                            <TbUserPentagon className='size-7 ' />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Profile Details</h2>
                        <p className="text-gray-700">View and update your personal information.Keep yourself updated!</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 ml-[24rem] gap-[29rem] pr-[5rem] ">
                <div className="w-[416px] h-[286px] flex flex-col justify-start bg-white rounded-lg border shadow-md p-8 ">
                    <div className='bg-gray-300 flex justify-center items-center rounded-full w-[51px] h-[51px] my-[2rem]'>
                        <RiGraduationCapFill className='size-7' />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">My Purchase and invoices</h2>
                    <p className="text-gray-700">Manage and view all your purchases.</p>
                </div>
                <div className="w-[416px] h-[286px] flex flex-col justify-start bg-white rounded-lg border shadow-md p-8 ">
                    <div className='bg-gray-300 flex justify-center items-center rounded-full w-[51px] h-[51px] my-[2rem]'>
                        <TbUserPentagon className='size-7 ' />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Download Certificate</h2>
                    <p className="text-gray-700">Access your verified certificate and download</p>
                </div>
            </div>


        </div>
    )
}

export default Dashboard