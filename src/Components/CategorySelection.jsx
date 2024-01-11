import React, { useEffect, useState } from 'react'
import { GET_ALL_CATEGORY_API } from '../services/api';

const CategorySelection = ({ onSelectCategory, activePage }) => {
    const [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(() => {
        fetchCategoryData()
    }, [])

    const fetchCategoryData = async () => {
        try {
            const response = await fetch(GET_ALL_CATEGORY_API);

            const result = await response.json();
            setSelectedCategory(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button className='bg-blue-950 rounded-lg p-2' onClick={() => onSelectCategory(null)}>All</button>
            {selectedCategory.map((item, index) => {
                return (
                    <>
                        <button className={`bg-blue-950 rounded-lg p-2 ${activePage === item ? "active_button" : ""}`}
                            onClick={() => onSelectCategory(item.categoryTitle)}>{item.categoryTitle}</button>
                    </>
                )
            })}
        </>
    )
}

export default CategorySelection

