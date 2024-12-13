import React from 'react'
import landingimage from '../assets/landingimage.avif'
import videoupload from '../assets/revind.png'
import videoclick from'../assets/paper-craft-art-moving-folder_53876-88564.png'
import managetool from '../assets/cloud.png'
import musicgif from'../assets/BHFO.gif'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className="row p-5 w-100 " style={{minHeight:'90vh'}}>
        <div className="col-md-6 my-5"> 
            <h4>Welcome to <span className='text-success'>Media Player</span></h4>
            <p style={{fontSize:'20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem adipisci ea fugit praesentium excepturi reprehenderit culpa, qui enim, ipsa ipsum nobis ipsam, voluptate magni autem similique vel assumenda velit eligendi?</p> 
       <Link to={'/home'}><button className='btn btn-success'> Get Started</button></Link>
          
        </div>
     <div className="col-md-1"></div>
        <div className="col-12 col-md-5">
        <img src={musicgif} alt="" className='w-100' style={{opacity:'0.8'}} />
        </div>

    </div>
    <div className='mt-4'>
        <h3 className='text-success text-center'>Features</h3>
        <div className='d-flex justify-content-center align-items-center'>
          
            <div className="row px-md-5 " style={{width:'80%'}}>

            <div className="col-sm-4 mb-5">
            <Card style={{}}>
      <Card.Img variant="top" src={managetool} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         User can upload and remove videos as wish.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-sm-4 mb-5" >
            <Card style={{ }}>
      <Card.Img variant="top" src={videoclick} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can categorize the video by drag and drop feature.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-sm-4 mb-5">

            <Card style={{ }}>
      <Card.Img variant="top" src={videoupload}/>
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
         User can manage watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

        </div>
        </div>
        <div className='row  m-4 p-4 border border-3 border-danger' style={{widows:'80%'}}>
          <div className="col-md-6">
            <h3 className='text-success'>Simple fast and powerfull</h3>
            <span className='fs-5'>Play Everything: </span><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eius dolor, beatae, ducimus et vel adipisci blanditiis vitae temporibus quidem repellat dolores nesciunt eligendi itaque debitis eum numquam aut explicabo.</span>
          <br />
          <span className='fs-5'>Categorize video: </span><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eius dolor, beatae, ducimus et vel adipisci blanditiis vitae temporibus quidem repellat dolores nesciunt eligendi itaque debitis eum numquam aut explicabo.</span>
<br />
<span className='fs-5'>Manage History: </span><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eius dolor, beatae, ducimus et vel adipisci blanditiis vitae temporibus quidem repellat dolores nesciunt eligendi itaque debitis eum numquam aut explicabo.</span>

          </div>
          <div className="col-md-6">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ed1sGgHUo88?si=QLcjXe2MKRDdJwsN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      
        <div>
            
   
 
  
     </div>
    </div>

    </>
  )
}

export default Landing