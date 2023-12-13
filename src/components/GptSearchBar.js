import React from "react";
import { lang } from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state.config.lang);
  return (
    <div className="absolute w-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black p-5 z-20 w-6/12 mx-auto mt-96 flex gap-4"
      >
        <input
          type="text"
          className="w-[100%] p-2"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button className="bg-red-700 px-10 py-3 text-white font-bold rounded-lg">
          {lang[selectedLang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
