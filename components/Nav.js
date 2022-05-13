import requests from "../utils/requests";
//next js has in inbuilt router

import { useRouter } from "next/router";

function Nav() {
  //lets get our router

  const router = useRouter();
  return (
    <nav className="relative">
      {/* loop through the request and give me the title of each one */}

      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* Any item mapped through anr array, item or object, reacts needs a key so that it knows how to rerender the list*/}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* 1.04 */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] H-10 w-1/12" />
    </nav>
  );
}

export default Nav;
