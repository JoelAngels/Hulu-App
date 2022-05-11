import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      {/* loop through the request and give me the title of each one */}

      <div>
        {/* Any item mapped through anr array, item or object, reacts needs a key so that it knows how to rerender the list*/}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}>{title}</h2>
        ))}
      </div>
      {/* 1.04 */}
    </nav>
  );
}

export default Nav;
