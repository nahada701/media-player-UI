import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { deleteVideoApi } from '../Services/allAPI';
import { toast } from 'react-toastify';
import { addHistoryAPI } from '../Services/allAPI';
function VideoCard({videoDetails,setDeleteVideoCard,insideCategory}) {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() =>{
     
     const {caption,youtubeURL}=videoDetails
     let date=new Date()
   //make formated date 
     const formatedDate=date.toLocaleString()
     console.log(formatedDate);
     const historyData={caption,youtubeURL,formatedDate}
     try{
     const data= await addHistoryAPI(historyData)
     console.log(data);
     
     }
     catch(err){
      console.log(err);
      
     }
     
     setShow(true)
    } 

    const deleteVideo=async(videoId,caption)=>{
      try{
        const result=await deleteVideoApi(videoId) 
        setDeleteVideoCard(result.data)
      toast.error(`${caption} deteleed`)
      }
      catch(err){
        console.log(err);
        
      }
    }

    const dragVideoStarted=(e,videoId)=>{
      e.dataTransfer.setData("videoId",videoId)
      
    }
  return (
    <>
<Card  style={{ width:'100%'}} className='mb-4' draggable={true} onDragStart={(e)=>dragVideoStarted(e,videoDetails?.id)}>
      <Card.Img variant="top" style={{height:"300px"}} onClick={handleShow}  src={videoDetails?.imageURL} />
      <Card.Body>
         <Card.Title className='d-flex justify-content-between align-items-center' style={{fontSize:'20px' ,height:"60px"}}>{videoDetails?.caption}  
          {/* delete button */}
        {
!insideCategory &&
<button style={{backgroundColor:'transparent',border:'none'}} onClick={()=>deleteVideo(videoDetails?.id,videoDetails?.caption)}><i class="text-danger fa-regular fa-trash-can"></i></button> 
        }  </Card.Title> 
      </Card.Body>
    </Card>

 

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe
  width="100%"
  height="480"
  src={`${videoDetails?.youtubeURL}?autoplay=1` }
  title="Dune Official Trailer"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

        </Modal.Body>
      
      </Modal>
    </>
  )
}

export default VideoCard