import React, { useEffect, useState } from 'react'
import BlogPostForm from './BlogPostForm'
import { getCurentUserDetails } from '../auth';
import { BASE_URL } from '../config/helper';
import BlogItems from './BlogItems';
const Dashboard = () => {

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setUser(getCurentUserDetails());
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + `/user/${getCurentUserDetails().id}/posts`)

      const result = await response.json();
      setPosts([...result])
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-3">
        <BlogPostForm />
      </div>
      <h1 className='my-3 flex text-2xl text-start font-semibold'>Post Count :({posts.length})</h1>
      <div className='pt-4 grid grid-cols-3 gap-6'>
        {posts.map((blog, index) => {
          return (
            <BlogItems blog={blog} key={blog.id} />
          )
        })}
      </div>
    </>
  )
}

export default Dashboard