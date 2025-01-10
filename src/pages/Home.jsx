import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowDropDown, MdGroupAdd } from "react-icons/md";
const Home = () => {
  const [activeTab, setActiveTab] = useState("allposts");
  const [filterTab, setFilterTab] = useState(false);

  const tabs = [
    { key: "allposts", label: "All Posts (32)" },
    { key: "article", label: "Article" },
    { key: "event", label: "Event" },
    { key: "education", label: "Education" },
    { key: "job", label: "Job" },
  ];

  return (
    <div className="">
      {/* Banner */}
      <div className="relative bg-[url('/home.png')] bg-cover bg-center bg-no-repeat h-[75vh] mb-5">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container">
            <div className="flex items-center justify-between px-3 py-4 lg:hidden">
              <FaArrowLeft className="hover:cursor-pointer text-white text-2xl" />
              <button className="px-4 py-2 text-white bg-black hover:bg-gray-950 border border-white rounded-md">
                Join Group
              </button>
            </div>
            <div className="absolute xl:left-52 xl:bottom-20 left-4 bottom-10">
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl text-white">
                Computer Engineering
              </h1>
              <p className="mt-1 font-light md:text-lg xl:text-base text-white">
                142,765 Computer Engineers follow this
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-7 lg:px-24 xl:px-40">
        {/* Tabs */}
        <div className="hidden md:flex items-center justify-between">
          <ul className="flex items-center space-x-5 relative">
            {tabs.map((tab) => (
              <li
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative pb-2 hover:cursor-pointer ${
                  activeTab === tab.key
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {tab.label}

                {activeTab === tab.key && (
                  <span className="block absolute -bottom-[13px] left-0 w-full h-[1.5px] bg-black transition-transform duration-300"></span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button className="flex items-center font-semibold bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
              Write a Post
              <MdArrowDropDown className="ml-1 text-xl" />
            </button>
            <button className="flex items-center font-semibold text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              <MdGroupAdd className="mr-1 text-xl" />
              Join Group
            </button>
          </div>
        </div>
        <hr className="hidden md:flex relative mt-2 border border-gray-300" />

        {/* Mobile Tabs */}
        <div className="flex md:hidden items-center justify-between">
          <h1 className="font-semibold text-lg">Posts(368)</h1>
          <div>
            <button
              onClick={() => setFilterTab(!false)}
              className="flex items-center bg-gray-200 px-3 py-1.5 rounded-md"
            >
              Filter:{" "}
              {tabs.find((tab) => tab.key === activeTab).label.slice(0, 10)}
              <MdArrowDropDown className="text-2xl" />
            </button>
            {filterTab && (
              <div className="absolute right-0 mt-1 bg-white shadow-md rounded-md w-40">
                <ul>
                  {tabs.map((tab) => (
                    <li
                      key={tab.key}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setFilterTab(false);
                      }}
                      className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${
                        activeTab === tab.key
                          ? "font-semibold text-black"
                          : "text-gray-400"
                      }`}
                    >
                      {tab.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
