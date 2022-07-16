import React, { useState } from "react";
import PropagateLoader from "react-spinners/PacmanLoader";

function Loader() {
  let [loading] = useState(true);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="sweet-loading text-center">
        <PropagateLoader color="#000" loading={loading} css="" size={25} />
      </div>
    </div>
  );
}

export default Loader;
