import React, { useState } from 'react'
import BlogItems from './BlogItems';
import { useEffect } from 'react';
import { GET_ALL_POST_API } from '../services/api';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import CategorySelection from './CategorySelection';

const BlogList = () => {

  const [postContent, setPostContent] = useState(
    {
      content: [],
      totalPages: '',
      totalElements: '',
      pageSize: '',
      lastPage: false,
      pageNumber: ''
    }
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(null);



  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };

  useEffect(() => {
    console.log("Current Page" + currentPage);
    changePage(currentPage)

  }, [currentPage,selectedCategory])

  
  const changePage = (pageNumber = 0, pageSize = 9) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
      return
    }
    const fetchData = async (pageNumber, pageSize) => {
      if(selectedCategory){
        let url = GET_ALL_POST_API
        url += `&category=${selectedCategory}`
      }
      try {
        const response = await fetch(GET_ALL_POST_API + `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`)

        const result = await response.json();
        setPostContent(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(pageNumber, pageSize);
  }

  const handleCategoryChange=(category)=>{
    setSelectedCategory(category);
    setCurrentPage(0);
    setActivePage(category);
  }

  const filterBlogs = postContent.content.filter((blogs)=> !selectedCategory || blogs.category.categoryTitle === selectedCategory)

  return (
    <>
      <div className='flex justify-center gap-10 text-white'>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activePage={activePage}/>
      </div>


      <h1 className='flex text-2xl text-start'>Blogs Count ({postContent.content && postContent.content.length})</h1>

      <div className='pt-4 grid grid-cols-3 gap-6'>
        {filterBlogs.map((blog) => {
          return (
            <BlogItems blog={blog} key={blog.id} />
          );
        })}
      </div>
      <motion.div
        variants={paginationVariants}
        initial="hidden"
        animate="visible"
      >
        <ReactPaginate
          breakLabel={
            <span className='mr-4'>...</span>
          }
          nextLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md'>
              <BsChevronRight onClick={() => changePage(postContent.pageNumber + 1)} />
            </span>
          }
          // onPageChange={currentPage === changePage(postContent.pageNumber)}
          pageRangeDisplayed={5}
          pageCount={postContent.totalPages}
          previousLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4'>
              <BsChevronLeft onClick={() => changePage(postContent.pageNumber - 1)} />
            </span>
          }
          containerClassName="flex items-center justify-content-center mt-8 mb-4"
          pageClassName="block border- border-solid border-gray-200 hover:bg-gray-300 w-10 h-10 p-1 flex items-center justify-center rounded-md mr-4"
          pageLinkClassName=''
          activeClassName="bg-blue-950 text-white"
        />
      </motion.div>
    </>
  )
}

export default BlogList