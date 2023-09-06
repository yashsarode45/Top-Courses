import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
    let courses = props.courses;
    let categoryTitleClicked = props.categoryTitleClicked;
    // const[likedCourses, setLikedCourses]=useState([]);
    function getCourses() {
        if (categoryTitleClicked === "All") {
            let allCourses = [];
             //Creates and array of arrays, i.e every array of a course category
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData); // creates an array of all courses object
                })
            })
            return allCourses;
        }
        else{
            for (const key in courses) {
                if (key === categoryTitleClicked) {
                  return courses[key];
                }
              }
        }
        
        
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card  key={course.id}
            course = {course} 
            // likedCourses={likedCourses}
            // setLikedCourses={setLikedCourses}
            />
        ))
      }
    </div>
  )
}

export default Cards
