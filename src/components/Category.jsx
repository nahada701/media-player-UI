import React from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import {Col, Row} from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, deleteVideoApi, getCategoryApi, getVideobyVideoId, updateCategory } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category({setdeleteVideoFromView,deleteVideoFromCategory}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState()
  const [allCategories,setAllCategories]=useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory=async()=>{
    try{
      //if we want to assign  it into a vaiable and log it then oly use aync and await here
      const response=await addCategoryAPI({categoryName,allVideos:[]})
      getCategories()
   handleClose() 
      
      }
      catch(err){
      console.log(err);
  }
  }

  //get api call
  useEffect(() => {
    getCategories()
  },[deleteVideoFromCategory])
    
  const getCategories=async()=>{
    try{
    const result= await getCategoryApi()
    setAllCategories(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  const deletecategory=(categoryId)=>{
    try{
    deleteCategoryAPI(categoryId)
    getCategories()
    }
    catch(err){
      console.log(err);
    }
  }
  
  const dropVideo=async(e,categoryId)=>{
   const videoId= e.dataTransfer.getData("videoId")
    console.log(`video id ${videoId} , categoryId is ${categoryId}`);
    try{
      //the RHS returns object and the data in the key data so can destructure like this 
      const {data}=await getVideobyVideoId(videoId)
      
      const droppingCategory=allCategories.find(cate=>cate.id==categoryId)
      
      droppingCategory.allVideos.push(data)
     const result=await updateCategory(categoryId,droppingCategory)
     setdeleteVideoFromView(result.data)
     deleteVideoApi(videoId)
     getCategories()
    }
    catch(err){
      console.log(err);
      
    }

    
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
  const dragVideoStarted=(e,videoDetails,categoryId)=>{
    const shareData={videoDetails,categoryId}
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))
    console.log(videoDetails,categoryId)
    
  }
  return (
    <div>
        <div className=" ms-4 d-flex align-items-center " >
    <h4 className=''>All Category<button onClick={handleShow} class="ms-3  btn btn-light  rounded-circle" >+</button> </h4> 
   
    </div>
   <div className='mt-1 '>
      {allCategories?.length>0?
      allCategories.map(cate=>(
  <div droppable={true} onDrop={(e)=>dropVideo(e,cate?.id)} onDragOver={(e)=>dragOverCategory(e)} key={cate?.id}  className='    ms-md-3 mb-3 p-2 border  border-light border-3 rounded'>
        
       <div className='d-flex justify-content-between'>
          <h5 className='text-success'>{cate?.categoryName}</h5>
          <button style={{backgroundColor:"transparent",border:"none"}} onClick={()=>deletecategory(cate?.id)}>    <i class="text-danger fa-regular fa-trash-can"></i></button>
       </div>
       <div className='row mt-3'>
          {cate.allVideos?.length>0 &&
          cate.allVideos?.map(video=>(
            
             
               <div className='col-lg-6' draggable={true} onDragStart={(e)=>dragVideoStarted(e,video,cate?.id)} key={video?.id} >
               <VideoCard videoDetails={video} insideCategory={true}/>
               </div>
        
      
          

          ))}
           </div>
        
        </div>
        
      ))
       :
       <div className='text-center text-danger' >No category added yet!</div>
      
      }
   </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border  border-3 border-success mx-3 rounded'>
          <div>
            {/* category */}
           <FloatingLabel
           controlId="floatingInput"
           label="Category Name" >
           <Form.Control 
           type="text" 
           onChange={e=>{setCategoryName(e.target.value)}}
           placeholder="Category Name"
            />
           </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={addCategory}>Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category