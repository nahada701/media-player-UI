import commenAPI from "./commenapi";
import { server_url } from "./serviceUrl";

// api call to add video in allVideos

export const addVideoApi=async(video)=>{
    return await commenAPI("POST",`${server_url}/allVideos`,video)
}

//api call to show videos

export const getVideoApi=async()=>{
    return await commenAPI("GET",`${server_url}/allVideos`,"")
}

//to delete videocard
//for delete req body should given as empty object if nothing to pass
export const deleteVideoApi=async(videoId)=>{
    return await commenAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})
}

//to add history

export const addHistoryAPI=async(videoDetails)=>{
    return await commenAPI("POST",`${server_url}/watchHistory`,videoDetails)
}

//to view history

export const viewHistoryAPI=async()=>{
    return await commenAPI("GET",`${server_url}/watchHistory`,"")
}
export const deleteHistoryAPI=async(videoId)=>{
    return await commenAPI("DELETE",`${server_url}/watchHistory/${videoId}`,{})
}

//to add category

export const addCategoryAPI=async(categoryDetails)=>{
    return await commenAPI("POST",`${server_url}/category`,categoryDetails)
}

//to get category

export const getCategoryApi=async()=>{
    return await commenAPI("GET",`${server_url}/category`,"")
}

//delete category

export const deleteCategoryAPI=async(categoryID)=>{
    return await commenAPI("DELETe",`${server_url}/category/${categoryID}`)
}

//get video details by video id

export const getVideobyVideoId=async(videoId)=>{
    return await commenAPI("GET",`${server_url}/allVideos/${videoId}`,"")
}

export const updateCategory=async(categoryId,updatedData)=>{
    return await commenAPI("PUT",`${server_url}/category/${categoryId}`,updatedData)
}


export const getSingleCategoryApi=async(categoryId)=>{
    return await commenAPI("GET",`${server_url}/category/${categoryId}`,"")
}
