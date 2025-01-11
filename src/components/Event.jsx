import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoEyeOutline, IoShareSocial } from "react-icons/io5";

const Event = ({
  img,
  tab,
  heading,
  info,
  location,
  text,
  textColor,
  authorImg,
  authorName,
}) => {
  const [moreOptions, setMoreOptions] = useState(false);

  const options = [
    {
      key: "edit",
      label: "Edit",
    },
    {
      key: "report",
      label: "Report",
    },
    {
      key: "option3",
      label: "Option 3",
    },
  ];

  return (
    <div className="border border-gray-300 rounded-md">
      <div>
        <img
          src={img}
          alt={heading}
          className={`w-full h-52 md:h-auto object-cover ${
            img ? img : "hidden"
          }`}
        />
      </div>
      <div className="py-4 px-3 md:px-5">
        <h1 className="text-lg">{tab}</h1>
        <div className="mt-2 flex items-center justify-between">
          <h5 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-normal">
            {heading}
          </h5>
          <div className="relative">
            <button
              onClick={() => setMoreOptions(!moreOptions)}
              className={` px-2 py-1 rounded-md  ${
                moreOptions === true ? "bg-gray-300" : ""
              }`}
            >
              <BsThreeDots className={`text-2xl hover:cursor-pointer`} />
            </button>
            {moreOptions && (
              <div className="absolute right-0 top-8 bg-white shadow-md rounded-md w-32 z-10">
                <ul>
                  {options.map((option) => (
                    <li
                      key={option.key}
                      onClick={() => {
                        setMoreOptions(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center space-x-10">
          <div className="flex items-center">{info}</div>
          <div className="flex items-center">
            <MdOutlineLocationOn className="text-xl mr-2" />
            {location}
          </div>
        </div>

        <div className="mt-5">
          <button
            className={`border-2 border-gray-300 rounded-md w-full py-2 hover:bg-gray-100 font-semibold ${textColor}`}
          >
            {text}
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <img src={authorImg} alt="person1" className="mr-2" />
            <div className="flex flex-col md:flex-row">
              <h2 className="font-semibold">{authorName}</h2>
              <span className="flex md:hidden items-center text-gray-600 text-sm">
                <IoEyeOutline className="mr-2 text-lg" />
                1.4k views
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <span className="hidden md:flex items-center text-gray-600 text-sm">
              <IoEyeOutline className="mr-2 text-lg" />
              1.4k views
            </span>

            <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">
              <IoShareSocial className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  img: PropTypes.string,
  tab: PropTypes.string,
  heading: PropTypes.string,
  info: PropTypes.node,
  location: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  authorImg: PropTypes.string,
  authorName: PropTypes.string,
};

export default Event;