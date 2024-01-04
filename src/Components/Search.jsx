import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {
  

  
    // const tags = [
    //     {
    //         id: 1,
    //         name: "All"
    //     },
    //     {
    //         id: 2,
    //         name: "React Native"
    //     },
    //     {
    //         id: 3,
    //         name: "Software Development"
    //     },
    //     {
    //         id: 4,
    //         name: "Cloud Computing"
    //     },
    //     {
    //         id: 5,
    //         name: "Android Development"
    //     }
    // ]
    const filterPost=(categoryItem)=>{
        const updateItem = selectedCategory.filter((currentCategory)=>{
            return currentCategory === categoryItem;
        });
        setSelectedCategory(updateItem);

    }
    return (
        <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
            <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
                <AiOutlineSearch className='text-[20px] text-gray-400' />
                <input type="text" placeholder='Search' className='outline-none ml-2' />
            </div>
            
        </div>
    )
}

export default Search