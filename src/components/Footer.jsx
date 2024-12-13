import React from 'react'

function Footer() {
  return (
    <div>
        <div className="row w-100 p-4 mb-5">
            <div className="col-md-4 mb-3">
            <i className="fa-solid fa-music me-3 fs-4 mb-2 " ></i>
            <h4 style={{display:"inline"}}>Media Player</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, suscipit minima a nesciunt pariatur doloribus quam iste earum consequuntur dicta debitis eligendi molestiae, cumque placeat maxime rerum aliquam nam sint?</p>
            <span>Code Licensed by Luminar Technolab</span>
            <br />
            <span>V5.3.2</span>

            </div>
            
            <div className="col-md-2 mb-3">
                <h4>Links</h4>
                <a href="">Landing</a>
                     <br />
                     <a href="">Home</a>
                     <br />
                     <a href="">History</a>
            </div>
            <div className="col-md-2 mb-3">
                <h4>Guids</h4>
                
                     <a href="">React</a>
                     <br />
                     <a href="">React Bootstrap</a>
                     <br />
                     <a href="">React Router</a>

               
            </div>
            <div className="col-md-4 mb-3">
                <h4>Contact Us</h4>
                <input type="text" name="" id="" className='me-3 mb-3' placeholder='Write Your Email' style={{height:'38px'}}/>
                <span className='bg-success py-2 px-3 ' ><i class="fa-solid fa-arrow-right"></i></span>
                <br />

                <div className='mt-3'>
                    <i class="fa-brands fa-github fs-5 me-4 mt-1"></i>
                    <i class="fa-brands fa-instagram fs-5 me-4 mt-1"></i>
                    <i class="fa-brands fa-facebook fs-5 me-4 mt-1" ></i>
                    <i class="fa-brands fa-linkedin fs-5 me-4 mt-1" ></i>
                    <i class="fa-solid fa-phone fs-5 me-4 mt-1"></i>
                    <i class="fa-brands fa-twitter fs-5 me-3 mt-1"></i>
                </div>
            </div>

        </div>
        <p className='text-center'> Copyright &#169; Nahada C, Media Player .Built with react</p>

    </div>

  )
}

export default Footer