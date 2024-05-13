import React from "react";
import Collapsible from "react-collapsible";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

const CourseOutline = () => {
  const courseSections = [
    {
      id: 1,
      title: "What is User Experience (UX) Design?",
      duration: "4min",
      completed: true,
    },
    {
      id: 2,
      title: "Historical Overview of UX Design",
      duration: "4min",
      completed: true,
    },
    {
      id: 3,
      title: "Understanding User-Centered Design",
      duration: "4min",
      completed: false,
    },
    {
      id: 4,
      title: "The Role of UX Design in Digital Products",
      duration: "4min",
      completed: false,
    },
    {
      id: 5,
      title: "Introduction to UX Design Tools and Techniques",
      duration: "4min",
      completed: false,
    },
  ];

  const additionalSections = [
    "Basics of User-Centered Design",
    "Elements of User Experience",
    "Visual Design Principles",
  ];

  return (
    <div className="rounded-xl shadow-lg min-h-screen">
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl text-center font-bold mb-6">
          Course Completion
        </h1>
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <IoIosArrowUp />
              <Collapsible
                trigger="Introduction to UX Design"
                triggerClassName="px-6 py-4 text-xl font-semibold"
              >
                <ul className="mt-4 space-y-2">
                  {courseSections.map((section) => (
                    <li key={section.id} className="flex items-center">
                      <span
                        className={`px-2 py-1 rounded-lg mr-2 ${
                          section.completed
                            ? "bg-green-200 text-green-800"
                            : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {section.completed ? "✓" : "\u00A0"}
                      </span>

                      <span>
                        {section.id}. {section.title}
                      </span>
                      <IoVideocamOutline className="mr-1" />
                      <span className="ml-auto text-gray-500">
                        {section.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </Collapsible>
            </div>
          </div>
        </div>
        <div>
          <div className="px-6 py-4">
            {additionalSections.map((section, index) => (
              <div key={index} className="flex items-center">
                <IoIosArrowUp className="mr-2" />
                <Collapsible
                  trigger={section}
                  triggerClassName="px-6 py-4 text-lg font-semibold"
                ></Collapsible>
              </div>
            ))}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
