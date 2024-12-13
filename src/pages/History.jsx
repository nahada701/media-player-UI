import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, viewHistoryAPI } from '../Services/allAPI'


function History() {
  const [historyData,setHistoryData]=useState([])
  console.log(historyData);
 
  useEffect(() => {
   showHistory()
  }, [])
  const showHistory=async()=>{
    try{
      const result=await viewHistoryAPI()
        setHistoryData(result.data)
       
      }catch(err){
      console.log(err);
      
    }
    
   
    }
    const deleteHistory=async(videoId)=>{
      try{
        await deleteHistoryAPI(videoId)
        showHistory()
      }
      catch(err){
        console.log(err);
        
      }
      
  }
  
  return (
    <>
     <div className=" d-flex align-items-center justify-content-between  mt-5 px-5"> 
    <h4>Watch History</h4>
    <Link to={'/home'} > <h5 className=''>Back to <i class="fa-solid fa-house"></i></h5></Link>
    </div>
    <div className='m-auto mt-4' style={{width:'94%'}}>
      {historyData?.length>0 ?
       <table className='table'>
       <thead>
         <tr>
           <th>#</th>
           <th>Caption</th>
           <th>Link</th>
           <th>Date</th>
           <th>...</th>


         </tr>
       </thead>
       <tbody>
        {
          historyData?.map(video=>(
            <tr>
            <td>{video?.id}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.youtubeURL}>{video.youtubeURL}</a></td>
            <td>{video?.formatedDate}</td>
            <td><button style={{backgroundColor:"transparent",border:"none"}} onClick={()=>deleteHistory(video?.id)}>
            <i class="text-danger fa-regular fa-trash-can"></i>
              </button></td>
 
 
          </tr>
            
          ))
        }
        
       </tbody>
     </table>
     :
     <div className='text-center text-danger'>Nothing to display</div>

      }
     
    </div>
    </>
  )
}

export default History