import React,{useEffect,useState }from 'react'
import {Col, Row} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getSingleCategoryApi, getVideoApi ,addVideoApi, updateCategory} from '../Services/allAPI'

function View({addVideoResponse,deleteVideoFromView,setdeleteVideoFromCategory}) {
  const[allvideos,setAllVideos]=useState([])
  const[deleteVideoCard,setDeleteVideoCard]=useState()
//we cannot add a function which return promise inside useEffect 
//so new function is created to get videos and that fucntion is called inside useEffect
useEffect(() => {
  getAllVideos()
},[addVideoResponse,deleteVideoCard,deleteVideoFromView])
  
const getAllVideos=async()=>{
  try{
    const result=await getVideoApi()
    if(result.status>=200  && result.status<300){
      setAllVideos(result.data)
      
       
    }
  }
  catch(err){
    console.log(err);
    
  }  
}
const dragOverView=(e)=>{
  e.preventDefault()
}
const dropVideo=async(e)=>{
  const {videoDetails,categoryId}= JSON.parse(e.dataTransfer.getData("shareData"))
  console.log(videoDetails,categoryId,"cate"); 
  try{
    addVideoApi(videoDetails)
    getAllVideos()
  }
  catch(err){
    console.log(err);
    
  }
  try{
   const {data}=await getSingleCategoryApi(categoryId)
   console.log(data.allVideos,"data");
   
  const updatedCategoryVideos=data.allVideos.filter(video=>video.id!==videoDetails.id)
  data.allVideos=updatedCategoryVideos
  console.log(data);
  try{
  const res= await updateCategory(categoryId,data)
  setdeleteVideoFromCategory(res.data)
  
  }
  catch(err){
    console.log(err);
    
  }
  
   
  }
  catch(err){
    console.log(err);
    
  }

  
}



  return (
    <>
    <Row droppable={true} onDrop={(e)=>dropVideo(e)} onDragOver={(e)=>dragOverView(e)} >
  {
    allvideos?.length>0?
      allvideos?.map(video=>(
        <Col key={video?.id} lg={4} sm={6} xs={12}>
        <VideoCard videoDetails={video} setDeleteVideoCard={setDeleteVideoCard} />
        </Col>
      )):
      <div className='text-center text-danger'>Nothing to display</div>
    
  }
    
    </Row>
    </>
  )
}

export default View