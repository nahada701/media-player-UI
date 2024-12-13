import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../index.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoApi } from '../Services/allAPI';
function Add({setAddVideoResponse}) {
   // to store video details 
  const [videoDetails,setVideoDetails]=useState({caption:'',imageURL:'',youtubeURL:''})
  const [show, setShow] = useState(false);

  const [isInvalidURL,setIsIvalidURL]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbededURL=(url)=>{

    if(url.includes('v=')){
      setIsIvalidURL(false)
     const videoID= url.split('v=')[1].slice(0,11)

     setVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoID}`})

    }
    else{
    setIsIvalidURL(true)
      setVideoDetails({...videoDetails,youtubeURL:""})
    }

  }
 const uploadData=async()=>{
  const {caption,imageURL,youtubeURL}=videoDetails
  if(caption && imageURL && youtubeURL){
    try{
      const result=await addVideoApi(videoDetails)
      if(result.status>=200 && result.status<300){
        toast.success(`${result.data.caption} added to your collection`)
        handleClose()
        setAddVideoResponse(result.data)
      }
      
    } 
    catch(err){
      console.log(err);
      
    }

    

    
  }
  else{
    toast.danger("please enter all fields")
  }
 }

  return (
    
    <> 

     <div className=" d-flex align-items-center justify-content-center  " >
    <h4 className=''>Upload new video <button onClick={handleShow} class="ms-3  btn btn-light  rounded-circle" >+</button> </h4> 
    
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border border-3 border-success mx-3 rounded'>
            <p>please fill the following details</p>
          <div>
            {/* caption */}
           <FloatingLabel
           controlId="floatingInput"
           label="Caption"
           className="mb-3 " >
           <Form.Control 
           onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})}
           type="text" 
           placeholder="Caption"
            />
           </FloatingLabel>

           {/* image url */}

           <FloatingLabel 
           controlId="image" 
           label="Image Url"
           className="mb-3" >

           <Form.Control 
           onChange={e=>setVideoDetails({...videoDetails,imageURL:e.target.value})}

           type="text" 
           placeholder="Image URL" />
           </FloatingLabel>

           {/* Youtube URL */}
           <FloatingLabel 
           controlId="youtube" 
           label="Youtube Url"
           className="mb-3" >

           <Form.Control 
           onChange={e=>getEmbededURL(e.target.value)}
           type="text" 
           placeholder="Youtube URL" />
           </FloatingLabel>
           {isInvalidURL &&   <p className='text-success'>Invalid URL</p>}
         
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={uploadData}>Upload</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add