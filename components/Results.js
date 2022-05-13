import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div>
      {/* Get a request then map through  every single one and every single result that comes back lets rended them as a thumbnail */}
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
