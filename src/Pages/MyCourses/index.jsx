import React from 'react'
import Navbar from '../../components/Navbar'
import profile from "../../utils/images/imageDp.png"
import course1 from "../../utils/images/course1.png"
import course2 from "../../utils/images/course2.png"

const MyCourses = () => {
    return (
        <div className='flex flex-col overflow-hidden '>
            <Navbar />
            <h1 className="flex items-center justify-center font-semibold text-xl my-[1.5rem] mr-[25rem]">My Courses</h1>
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
                <div className="grid grid-cols-3 w-full">
                    <img src={course1} alt="course1" className='mx-[3rem]' />
                    <img src={course1} alt="course1" className='ml-[5rem]' />
                </div>
            </div>
            <h1 className="flex items-center justify-center font-semibold text-xl my-[1.5rem] mr-[25rem]">Recommended Courses</h1>
            <div className="grid grid-cols-3 ml-[24rem] gap-4 pr-[5rem] py-[3rem]">
                <img src={course2} alt="course2" className='mx-[2rem] w-72' />
                <img src={course1} alt="course1" className='mx-[2rem] w-72 ' />
                <img src={course1} alt="course1" className='ml-[2rem] w-72' />
            </div>
        </div>
    )
}

export default MyCourses
