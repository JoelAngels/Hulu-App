import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      {/* loop through the request and give me the title of each one */}

      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {/* Any item mapped through anr array, item or object, reacts needs a key so that it knows how to rerender the list*/}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="last:p-r-24cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* 1.04 */}
    </nav>
  );
}

export default Nav;
