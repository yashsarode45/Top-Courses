import React from "react";
import Cards from './components/Cards'
import Card from './components/Card'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import {toast} from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);//watch out
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);//watch out
  }

  useEffect(() => {
    fetchData();
  }, [])
  const [categoryTitleClicked, setcategoryTitleClicked] = useState("All")
  
  function handleCategoryClick(clickedTitle) {
     setcategoryTitleClicked(clickedTitle) ;
  }

  return (
    <div className="min-h-screen flex flex-col
    bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
          handleCategoryClick={handleCategoryClick}  
          categoryTitleClicked={categoryTitleClicked}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center 
        items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards categoryTitleClicked={categoryTitleClicked} courses={courses} />)
          }
        </div>
    </div>


  </div>
  );
};

export default App;
