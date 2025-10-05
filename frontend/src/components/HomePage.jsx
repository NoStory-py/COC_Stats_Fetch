import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayPlayerInfo from "./display/DisplayPlayerInfo";
import DisplayClanInfo from "./display/DisplayClanInfo";

const HomePage = () => {

  const [option, setOption] = useState("player");
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState("");

  const {data, loading, error, fetchStats, choice} = useFetch();
  console.log(data);
  

  const handleChange = (e) => {

    const val = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setValue(val);
  };


  const handleSubmit = () => {
     
    if (value === "") {
      setValidationError("This field cannot be empty");
    } 
    else if (value.length < 3 || value.length > 15) {
      setValidationError("Tag must be 3–15 characters");
    }
    else {
      fetchStats(option, value);
    }
  };

  return (
    <>
      <div className="border-2 md:border-3 border-gray-700 rounded-xl m-4 md:m-8 lg:m-12 p-4 md:p-8 lg:p-12">
        {/* Section 1 */}
        <div className="flex flex-row justify-between gap-4 md:gap-8 lg:gap-12">

          {/* Select Player or Clan */}
          <select className="border-2 md:border-3 border-gray-900 rounded-lg text-white text-sm md:text-xl lg:text-2xl font-bold bg-gray-600 px-2 md:px-4 lg:px-6 hover:bg-gray-700" 
          value={option} onChange={(e)=>{setOption(e.target.value)}}>
            <option value="player">Player</option>
            <option value="clan">Clan</option>
          </select>

          {/* Input Bar */}
          <div className="flex flex-row border-2 md:border-3 border-gray-900 rounded-lg overflow-hidden w-full">
            <div className="flex items-center justify-center bg-gray-600 text-white text-lg md:text-2xl lg:text-4xl font-bold w-16">#</div>
            <input className="w-full focus:outline-none p-2 md:p-4" placeholder="Tag..." type="text" value={value} onChange={handleChange}/>
          </div>    

          {/* Submit Button */}
          <button onClick={handleSubmit} className="border-2 md:border-3 border-gray-900 rounded-lg text-white text-sm md:text-xl lg:text-2xl font-bold bg-gray-600 px-2 md:px-4 lg:px-6 hover:bg-gray-700">Submit</button>
        </div>

        {/* Error message */}
        {validationError ? <p className="text-red-500 mt-2 text-center">{validationError}</p>: null}

      </div>
 
      {choice === "player" ? <DisplayPlayerInfo data={data} loading={loading} error={error}/> : <DisplayClanInfo data={data} loading={loading} error={error}/>}
      
      
    </>

  );
};

export default HomePage;
