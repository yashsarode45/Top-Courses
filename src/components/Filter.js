import React from 'react'
import { useState } from 'react';
const Filter = ({filterData, handleCategoryClick, categoryTitleClick}) => {
    const [clickedButtons, setClickedButtons] = useState([]);

  const handleColorClick = (title) => {
    if (clickedButtons.includes(title)) {
      //setClickedButtons(clickedButtons.filter((btn) => btn !== title));
      return
    }
    else if(clickedButtons.length === 1 ){
        setClickedButtons([]);
        setClickedButtons([title]);
    }
     else {
      setClickedButtons([title]);
    }
  };
  return (
    <div className="w-11/12 flex flex-wrap max-w-max 
    space-x-4 gap-y-4 mx-auto py-4 justify-center">
    {
      filterData.map((data) => (
           <button 
           className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 
            border-2 transition-all duration-300
            ${clickedButtons.includes(data.title) ? 'bg-opacity-60 border-white' : 'bg-opacity-40 border-transparent'}
          `}
           key={data.id} 
           onClick={()=>{
            handleColorClick(data.title);
            handleCategoryClick(data.title);
           }}>{data.title} </button> 
        )
      )
    }
    </div>
  )
}

export default Filter
