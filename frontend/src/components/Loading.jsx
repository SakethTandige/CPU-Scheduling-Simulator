import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../assets/loading.gif";

function Loading() {
  return (
    <div className="loading-container">

      <img 
        src={loadingGif} 
        alt="Loading..." 
        className="loading-gif"
      />

      <h2>Loading Simulator...</h2>

    </div>
  );
}

export default Loading;