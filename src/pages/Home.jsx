import { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { FaArrowLeft, FaCalendarDay } from "react-icons/fa";
import {
  MdArrowDropDown,
  MdGroupAdd,
  MdOutlineLocationOn,
} from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiSolidPencil } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import Article from "../components/Article";
import Event from "../components/Event";
import FormModal from "../components/FormModal";
const Home = () => {
  const [activeTab, setActiveTab] = useState("allposts");
  const [filterTab, setFilterTab] = useState(false);
  const [showRecommended, setShowRecommended] = useState(false);
  const [joinGroup, setJoinGroup] = useState(true);
  const [searchLoc, setSearchLoc] = useState(true);

  const { showForm, handleShowForm } = useOutletContext();

  const [items, setItems] = useState([
    { id: 1, name: "Leisure", isFollowed: false },
    { id: 2, name: "Activism", isFollowed: false },
    { id: 3, name: "MBA", isFollowed: false },
    { id: 4, name: "Philosophy", isFollowed: false },
  ]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/user`) {
      setShowRecommended(true);
    } else {
      setShowRecommended(false);
    }
  }, [location.pathname]);

  const tabs = [
    { key: "allposts", label: "All Posts (32)" },
    { key: "article", label: "Article" },
    { key: "event", label: "Event" },
    { key: "education", label: "Education" },
    { key: "job", label: "Job" },
  ];

  const handleJoinGroup = () => {
    setJoinGroup(!joinGroup);
  };

  const handleSearchLoc = () => {
    setSearchLoc(!searchLoc);
  };

  const handleFollow = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFollowed: !item.isFollowed } : item
      )
    );
  };

  return (
    <div className="relative">
      {showForm && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <FormModal onClose={handleShowForm} />
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="relative bg-[url('/home.png')] bg-cover bg-center bg-no-repeat h-[75vh] mb-5">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container">
            <div className="flex items-center justify-between px-3 py-4 lg:hidden">
              <FaArrowLeft className="hover:cursor-pointer text-white text-2xl" />
              <button
                onClick={handleJoinGroup}
                className="px-4 py-2 text-white bg-black hover:bg-gray-950 border border-white rounded-md"
              >
                {joinGroup ? "Join Group" : "Leave Group"}
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
      <div className="container px-3 md:px-7 lg:px-24 xl:px-40">
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
            {joinGroup ? (
              <button
                onClick={handleJoinGroup}
                className="flex items-center font-semibold text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                <MdGroupAdd className="mr-1 text-xl" />
                Join Group
              </button>
            ) : (
              <button
                onClick={handleJoinGroup}
                className="flex items-center font-semibold text-gray-600 bg-transparent px-4 py-2 rounded-md hover:bg-gray-200 border border-gray-400"
              >
                <IoIosLogIn className="mr-1 text-xl" />
                Leave Group
              </button>
            )}
          </div>
        </div>
        <hr className="hidden md:flex relative mt-2 border border-gray-300" />

        {/* Mobile Tabs */}
        <div className="relative flex md:hidden items-center justify-between">
          <h1 className="font-semibold text-lg">Posts(368)</h1>
          <div>
            <button
              onClick={() => setFilterTab(!filterTab)}
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

        {/* Posts */}
        <div className="flex md:space-x-5 lg:space-x-10 xl:space-x-20 mt-5 mb-10">
          <div className="md:w-8/12 space-y-5">
            {(activeTab === "article" || activeTab === "allposts") && (
              <Article
                img={"/article.png"}
                tab={"✍️ Article"}
                heading={
                  "What if famous brands had regular fonts? Meet RegulaBrands!"
                }
                authorImg={"/person1.png"}
                authorName={"Sarthak Kamra"}
              />
            )}

            {(activeTab === "education" || activeTab === "allposts") && (
              <Article
                img={"/education.png"}
                tab={"🔬️ Education"}
                heading={
                  "Tax Benefits for Investment under National Pension Scheme launched by Government"
                }
                authorImg={"/person2.png"}
                authorName={"Sarah West"}
              />
            )}

            {(activeTab === "event" || activeTab === "allposts") && (
              <Event
                img={"/meetup.png"}
                tab={"🗓️ Meetup"}
                heading={"Finance & Investment Elite Social Mixer @Lujiazui"}
                info={
                  <>
                    <FaCalendarDay className="text-lg mr-2" />
                    Fri, 12 Oct, 2018
                  </>
                }
                location={"Ahmedabad, India"}
                text={"Visit Website"}
                textColor={"text-red-500"}
                authorImg={"/person3.png"}
                authorName={"Ronal Jones"}
              />
            )}

            {(activeTab === "job" || activeTab === "allposts") && (
              <Event
                tab={"💼️ Job"}
                heading={"Software Developer"}
                info={
                  <>
                    <PiSuitcaseSimple className="text-lg mr-2" />
                    Innovaccer Analytics Private Ltd.
                  </>
                }
                location={"Noida, India"}
                text={"Apply on Timesjobs"}
                textColor={"text-green-500"}
                authorImg={"/person4.png"}
                authorName={"Joseph Gray"}
              />
            )}
          </div>

          {/* RIght side content */}
          <div className="mt-5 hidden md:block md:w-4/12">
            <div className="relative">
              <MdOutlineLocationOn className="absolute left-0 top-0.5 text-xl" />
              <input
                type="text"
                onFocus={handleSearchLoc}
                onBlur={handleSearchLoc}
                placeholder="Enter your location"
                className="outline-none bg-none border-b border-gray-300  w-full px-6 pb-1.5  focus:border-gray-500 "
              />
              {searchLoc ? (
                <BiSolidPencil className="absolute right-0 top-0.5 text-xl hover:cursor-pointer" />
              ) : (
                <IoClose className="absolute right-0 top-0.5 text-2xl hover:cursor-pointer" />
              )}
            </div>
            <div className="mt-5 text-sm text-gray-400 flex items-start">
              <span className="text-lg mr-2 mt-0.5">
                <RiErrorWarningLine />
              </span>
              Your location will help us serve better and extend a personalised
              experience.
            </div>

            {/* recommended Groups */}
            {showRecommended && (
              <div className="mt-8">
                <div className="text-black flex items-center">
                  <span>
                    <AiTwotoneLike className="mr-1 text-xl" />
                  </span>
                  <h1>RECOMMENDED GROUPS</h1>
                </div>
                <div className="mt-4 flex flex-col space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={`/${item.name.toLowerCase()}.png`}
                          alt={item.name}
                          className="mr-3"
                        />
                        <h1>{item.name}</h1>
                      </div>
                      <div>
                        <button
                          onClick={() => handleFollow(item.id)}
                          className={`${
                            item.isFollowed
                              ? "bg-black text-white"
                              : "bg-gray-200 hover:bg-gray-300"
                          } px-3 py-1 rounded-full text-sm`}
                        >
                          {item.isFollowed ? "Followed" : "Follow"}
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end text-blue-500 text-sm hover:cursor-pointer">
                    See More...
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pencil Icon */}
      <div
        onClick={handleShowForm}
        className="lg:hidden fixed right-1.5 bottom-5 p-3.5 bg-gradient-to-tr from-[#FF5C5C] to-[#F0568A] rounded-full hover:cursor-pointer shadow-lg"
      >
        <BiSolidPencil className="text-white text-2xl" />
      </div>
    </div>
  );
};
export default Home;
