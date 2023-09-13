export const addBlog =(data)=>{
    return{
        type:'ADD_BLOG',
        payload:data
    }
}

export const deleteBlog =(title)=>{
    return{
        type:'DELETE_BLOG',
        payload:title
    }
}

export const infoBlog =(title)=>{
    return{
        type:'INFO_BLOG',
        payload:title
    }
}

export const updateBlog =(data)=>{
    return{
        type:'UPDATE_BLOG',
        payload:data
    }
}