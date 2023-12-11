import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-36 w-screen aspect-video bg-gradient-to-r from-black pt-64 absolute">
      <h1 className="font-bold text-6xl text-white mb-4">{title}</h1>
      <p className="w-4/12 text-white">{overview}</p>
      <div className="flex gap-6 mt-6">
        <button className="px-10 py-3 bg-white text-black font-bold rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="px-10 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
