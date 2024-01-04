// ISLOGIN ----> ////

export const isLoggedIn = () => {
    let data = localStorage.getItem("data")
    if (data != null) {
        return true
    } else {
        return false
    }

}

// DOLOGIN ---> SAVE TOKEN TO LOCAL STORAGE ----> ////

export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next()
}


// LOGIN OUT ---> REMOVE STORED TOKEN FROM LOCAL STORAGE  ----> ////

export const doLogOut=(next)=>{
    localStorage.removeItem("data");
    next()
}


// GET CURRENT USER DETAILS  ----> ////

export const getCurentUserDetails=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.data.user;
    }else{
        return undefined;
    }
}


// GET TOKEN

export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.data.token;
    }else{
        return null;
    }
}