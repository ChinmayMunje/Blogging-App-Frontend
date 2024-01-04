import { myAxios, privateAxios } from "../config/helper";
/// CREATE POST

export const createPost = (postData) => {
    //   console.log(postData);
    return privateAxios
        .post(
            `/user/${postData.userId}/category/${postData.categoryId}/posts`,
            postData
        )
        .then((response) => response.data);
};


///// GET ALL POST

//   export const loadAllPost=(pageNumber, pageSize)=>{
//     return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then((response)=>response.data);
//   }


///// ADD COMMENTS

export const addComments = (comments, postId) => {
    return privateAxios.post(`/posts/${postId}/comments`, comments).then((response) => response.data);
}

//// UPLOAD COVER IMAGE FOR POST

export const uploadImage = (image, postId) => {
    let formData = new FormData();
    formData.append("image", image);
    return privateAxios.post(`/posts/image/upload/${postId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response) => response.data);
}


//// GET ALL POST BY CATEGORY

// export const getPostByCategory=(categoryId)=>{
//     return privateAxios.get(`/category/${categoryId}/posts`).then((response)=>response.data);
// }


//// LOAD POST USER WISE

export function loadAllPostUserWise (userId) {
    return privateAxios.get(`/user/${userId}/posts`).then((response)=>response.data);
}