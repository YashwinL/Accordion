import React, { useState } from "react";
const Sidebar = () => {
  const [show, setShow] = useState(true);
  const onClickHandler = () => {
    setShow(!show);
  };

  const closeHandler = () => {
    !show && setShow(true);
  };
  return (
    // Sidebar dev
    <>
      <div className="flex items-center  border-cyan-400 shadow-xl shadow-gray-200 ">
        <div className=" flex justify-center  ">
          <div className="bg-gray-800 px-1 pt-1 text-green-300 h-screen  ">
            {/* icon div */}
            <div className="p-1 hover:bg-gray-600 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => onClickHandler()}
                className="h-6 w-6 cursor-pointer "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-600 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 cursor-pointer w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-600 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 cursor-pointer w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div className="p-1 hover:bg-gray-600 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 cursor-pointer w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
          </div>
          {/* IconName dev */}
          <div
            className={` ${
              show ? "hidden" : "block"
            } bg-gray-800 text-green-300 pt-1  pr-1 min-w-fit  `}
          >
            <div className=" mb-8 bg-gray-900 rounded-md items-center"></div>
            <div className="p-1 text-left rounded-md cursor-pointer hover:bg-gray-600">
              Milestone
            </div>
            <div className="p-1  text-left rounded-md cursor-pointer hover:bg-gray-600">
              Dashboard
            </div>
            <div className="p-1 text-left rounded-md cursor-pointer hover:bg-gray-600 ">
              Young's life
            </div>
          </div>
          <div className="w-full h-screen px-1 " onClick={() => closeHandler()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            omnis cumque dolor tempore minima natus accusantium cupiditate
            reiciendis, dolorem, laudantium placeat labore. Ipsa eaque soluta
            atque libero, ut porro molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Soluta omnis cumque dolor tempore
            minima natus accusantium cupiditate reiciendis, dolorem, laudantium
            placeat labore. Ipsa eaque soluta atque libero, ut porro molestiae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            omnis cumque dolor tempore minima natus accusantium cupiditate
            reiciendis, dolorem, laudantium placeat labore. Ipsa eaque soluta
            atque libero, ut porro molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Soluta omnis cumque dolor tempore
            minima natus accusantium cupiditate reiciendis, dolorem, laudantium
            placeat labore. Ipsa eaque soluta atque libero, ut porro molestiae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            omnis cumque dolor tempore minima natus accusantium cupiditate
            reiciendis, dolorem, laudantium placeat labore. Ipsa eaque soluta
            atque libero, ut porro molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Soluta omnis cumque dolor tempore
            minima natus accusantium cupiditate reiciendis, dolorem, laudantium
            placeat labore. Ipsa eaque soluta atque libero, ut porro molestiae.
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
