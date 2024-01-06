import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { GET_ALL_CATEGORY_API } from '../services/api';
import JoditEditor from 'jodit-react';
import { useRef } from 'react';
import { getCurentUserDetails, getToken } from '../auth';
import { createPost, uploadImage } from '../services/post_Service';
import { toast } from 'react-toastify';


const BlogPostForm = () => {
  const editor = useRef(null);
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState(undefined);

  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryId: ''
  })

  const [image, setImage] = useState(null);

  useEffect(() => {
    setUser(getCurentUserDetails());

    const fetchData = async () => {
      try {
        const response = await fetch(GET_ALL_CATEGORY_API)

        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  /////// HANDLE CHANGE FOR REST OF INPUT FIELDS

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((posts) => ({
      ...posts,
      [name]: value
    }))
    console.log(post);
  }

  ///// HANDLE CHANGE FOR JODIT EDITOR

  const contentHandleChange = (data) => {
    setPost({ ...post, 'content': data })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the submission logic (e.g., send data to the server)
    // console.log('Form Submitted');
    // console.log(post);

    if (post.title.trim() === '') {
      toast.error("Post Title is Required !!")
      return;
    }

    if (post.content.trim() === '') {
      toast.error("Post Content is Required !!")
      return;
    }

    if (post.categoryId.trim() === '') {
      toast.error("Select Some Category !!")
      return;
    }

    // Submit To Create Post
    post['userId'] = user.id
    createPost(post).then((res) => {

      uploadImage(image, res.postId).then((data)=>{
        // toast.success("Image Uploaded Successfully !!")
      }).catch((err)=>{
        toast.error("Error in Uploading Image.")
        console.log(err);
      })

      toast.success("Post Created !!")
      setPost({
        title: '',
        content: '',
        categoryId: ''
      })
    }).catch((error) => {
      toast.error("Post Not Created due to some Error !!")
      console.log(error);
    })
  };

  /// HANDLE IMAGE CHANGE
  const handleImageChange=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }


  return (
    <div className='py-20'>
    <div className="w-full h-full p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-start">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-start">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-start">
            Category
          </label>


          <select
            name="categoryId"
            onChange={handleChange}
            defaultValue={0}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value={0} disabled>---Choose a Category---</option>
            {categories.map((category) => {
              return (
                <option key={category.categoryId} value={category.categoryId}>{category.categoryTitle}</option>
              )
            })}
          </select>
        </div>

       {/* ADD COVER IMAGE TO POST */} 

        <div className='mb-4'>
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2 text-start">
            Choose Cover Image
          </label>
          <input type="file" id='image' className='flex items-start justify-start' onChange={handleImageChange} />
        </div>


        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2 text-start">
            Content
          </label>



          <JoditEditor
            className='text-left'
            ref={editor}
            value={post.content}
            // config={config}
            onChange={newContent => contentHandleChange(newContent)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-800"
        >
          Create Post
        </button>
        <button
          className="bg-red-500 text-white ml-3 px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:bg-red-500"
        >
          Reset Content
        </button>
      </form>
    </div>
    </div>
    )
}

export default BlogPostForm