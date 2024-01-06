import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST_BY_ID_API } from '../services/api';
import { BASE_URL } from '../config/helper';
import { addComments } from '../services/post_Service';
import { isLoggedIn } from '../auth';
import { toast } from 'react-toastify';

const PostPage = () => {

    const { postId } = useParams();
    const [post, setPost] = useState('');
    const [comment, setComment] = useState({
        content: ''
    });

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(GET_POST_BY_ID_API + `${postId}`)

            const result = await response.json();
            setPost(result);

            console.log(result);
        } catch (err) {
            console.log("Error Data Not Found" + err);

        }
    }

    const printDate = (number) => {
        return new Date(number).toDateString();
    }

    const printUserName = (name)=>{
        // return name.split('@')[0];
        let username = name.charAt(0).toUpperCase() + name.slice(1)
        let fullName = username.split('@')[0]
    
        return fullName;
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        if(!isLoggedIn()){
            toast.error("User need to Login First !!")
            return
        }
        if(comment.content.trim()===''){
            return
        }
        addComments(comment, post.postId).then((res)=>{
            console.log(res);
            setPost({
                ...post,
                comment: [...post.comments, res]
            })
            setComment({
                content: ''
            })
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <>
            <div className='px-6 md:px-20 lg:px-56 mt-10 flex flex-col items-start justify-start text-start py-20'>
                <p className='sm:text-xs bg-gradient-to-r from-blue-900 to-blue-400 text-white p-2 m-2 rounded-[5px] w-fit transform: capitalize'>{(post) && post.category.categoryTitle}</p>

                {/* <div className='text-blue-950'>{(post) && post.category.categoryTitle}</div> */}
                <h3 className='text-[26px] font-bold'>{post.title}</h3>
                <div>
                    {(post) && (
                        <h3>Posted by <b>{printUserName(post.user.username)}</b> on <b>{printDate(post.addedDate)}</b></h3>
                    )}
                </div>
                <img src={BASE_URL + `/posts/image/${post.image}`} alt='post_Image' className='rounded-2xl mt-5 mb-5 w-full' />
                <p dangerouslySetInnerHTML={{__html: post.content}}/>
            </div>
            <div className='flex flex-col items-start justify-start mt-10'>
                <h3 className='text-[20px] font-bold'>Add Comment</h3>
            </div>

            <div className='mt-3'>
                <form onSubmit={submitHandler}>
                    <div className='flex flex-col items-end border border-blue-900 rounded-lg p-4'>
                        <textarea id="" rows="5" className='w-full focus:outline-none' placeholder='Enter your Comment here...' onChange={(e) => setComment({ content: e.target.value })} value={comment.content} />
                        <button type='submit' className='px-6 py-2.5 rounded-lg bg-blue-950 text-white font-semibold mt-2'>Send</button>
                    </div>
                </form>
            </div>




            <div className='flex flex-col items-start justify-start'>
                <h3 className='text-[20px] font-bold'>Comments ({post ? post.comments.length : 0})</h3>
                {post.comments && post.comments.map((c) => {
                    return (
                        <div className='flex flex-nowrap items-start bg-[#F2F4F5] p-3 rounded-lg'>{c.content}</div>
                    )
                })}

            </div>

        </>

    )
}

export default PostPage