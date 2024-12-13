import React, {  useState} from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState()
  const [deleteVideoFromView,setdeleteVideoFromView]=useState()
  const [deleteVideoFromCategory,setdeleteVideoFromCategory]=useState()


  return (
    <>
    <div className=" d-flex align-items-center justify-content-between  mt-5 px-5"> 
    <Add setAddVideoResponse={setAddVideoResponse}/>
    <Link to={'/history'} > <h5 className=''>Go to History</h5></Link>
    </div>
    <div className='row my-5 px-5 w-100'>
      <div className="col-md-6">
        <h4>All videos</h4>
        <View addVideoResponse={addVideoResponse} setdeleteVideoFromCategory={setdeleteVideoFromCategory} deleteVideoFromView={deleteVideoFromView}/>
      </div>
      <div className="col-md-6">
        <Category setdeleteVideoFromView={setdeleteVideoFromView} deleteVideoFromCategory={deleteVideoFromCategory}/>
      </div>
    </div>
    </>
  )
}

export default Home