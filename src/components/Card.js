import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
import React from 'react'
import { useState } from "react";

const Card = ({course}) => {
    const[likedCourses, setLikedCourses]=useState([]);
    function handleClick() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses( (prev) =>  prev.filter((cid) => cid!==course.id ))
            toast.warning('Disliked')
        } else {
            setLikedCourses((prev)=> ([...prev, course.id]))
            toast.success('Liked');
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}></img>
      
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center'>
            <button onClick={handleClick}>
                {
                    likedCourses.includes(course.id)?
                    (<FcLike fontSize="1.75rem"/>) :
                    ( <FcLikePlaceholder fontSize="1.75rem"/>)
                }
                
            </button>
        </div>
      </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">
            {course.title}
        </p>
        <p className='mt-2 text-white'>
            {course.description}
        </p>
      </div>
    </div>
  )
}

export default Card
