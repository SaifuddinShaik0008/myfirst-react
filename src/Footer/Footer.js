import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid ps-5 bg-black text-white pt-2 text-center ">
        <div className="row">
            <div className="col-12 col-lg-4 pt-4">
                <h6>&copy; 2021 My Website. All rights reserved.</h6>
            </div>
            <div className="col-12 col-lg-4 ">
                <h5>Follow us on</h5>
                <a href="#"><i class="bi bi-facebook ms-2"></i></a>
                <a href="#"><i class="bi bi-twitter ms-2"></i></a>
                <a href="#"><i class="bi bi-instagram ms-2"></i></a>
                <a href="#"><i class="bi bi-linkedin ms-2"></i></a>

                

            </div>
            <div className='col-12 col-lg-4 mb-3'>
                <h5>Contact Us</h5>
                <a href="#"><i class="bi bi-envelope "></i> info@gmail.com</a>
                <a className='ms-3' href="#"><i class="bi bi-telephone "></i> 6465465441</a>
                
                <a className='me-5' href="#"><i class="bi bi-geo-alt "></i> 123 Main St, City, State, Zip</a>
               
            </div>

            
        
        </div>
        </div>



    </div>

  )
}

export default Footer