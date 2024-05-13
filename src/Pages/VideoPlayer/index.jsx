import React from "react";
import Navbar from "../../components/Navbar";
import CourseCompletion from "../../components/CourseCompletion";
import mentor from "../../utils/images/mentor.png";
import { SlGraduation } from "react-icons/sl";
import { CiPlay1 } from "react-icons/ci";

const learningObjectives = [
  "Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital world",
  "Explore the fundamental principles of user-centered design and how to apply them to create intuitive and user-friendly interfaces.",
  "Learn about the various elements that contribute to a positive user experience, including information architecture, interaction design, and visual design.",
];

const VideoPlayer = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="flex items-center justify-start font-semibold text-xl mx-[3rem] my-[1.5rem]">
        Introduction to User Experience Design
      </h1>
      <div className="flex flex-col md:flex-row justify-start items-start mx-[3rem] md:items-start md:space-x-8 md:py-8">
        <div className="flex flex-col justify-start">
          <video className="rounded-lg w-[821px] h-[462px]" controls>
            <source
              src="https://youtu.be/XJAMVPQWvGY?si=evQqDBIBYia-vlgI"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex justify-center items-center border rounded px-[4rem] py-[1rem] my-[2rem] w-[5rem]">
            Details
          </div>
          <hr />
          <div className="w-[840px]">
            <p className="text-xl font-bold my-[1rem]">Course Overview</p>
            <p className="font-normal">
              Embark on a transformative journey into the dynamic world of User
              Experience (UX) Design with our comprehensive course,
              "Introduction to User Experience Design." This course is
              meticulously crafted to provide you with a foundational
              understanding of the principles, methodologies, and tools that
              drive exceptional user experiences in the digital landscape.
            </p>
            <p className="text-xl font-bold my-[1rem]">
              Key Learning Objectives
            </p>
            <ul className="list-disc ml-[2rem] my-[2rem]">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="font-normal">
                  {objective}
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Instructor</p>
              <p
                className="text-xl font-semibold mt-[1.2rem] "
                style={{ color: "purple" }}
              >
                Rohit Mishra
              </p>
              <p className="font-normal">Mentor @coding_commando</p>
              <div className="flex my-[1rem]">
                <img
                  src={mentor}
                  alt="mentor"
                  className="w-[120px] h-[120px]"
                />
                <div className="flex items-center justify-center flex-col">
                  <div className="flex items-center">
                    <SlGraduation />
                    <p>500 Students</p>
                  </div>
                  <div className="flex items-center">
                    <CiPlay1 />
                    <p>15 Courses</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-normal">
              With over a decade of industry experience, Ronald brings a wealth
              of practical knowledge to the classroom. He has played a pivotal
              role in designing user-centric interfaces for renowned tech
              companies, ensuring seamless and engaging user experiences.
            </p>
          </div>
        </div>
        <CourseCompletion />
      </div>
    </div>
  );
};

export default VideoPlayer;
