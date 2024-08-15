import React from 'react'
import pic1 from './pic1.jpg'
import pic2 from "./sdd.jpg"
import pic3 from "./mdd.jpg"
import immg from './eer.jpg'


const Home = () => {
  return (
    <div>
      <div className='container-fluid p-0'>
        <section className='container-fluid p-0 '>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={pic3} class="d-block w-100" alt="..." />

              </div>
              <div class="carousel-item">
                <img src={pic1} class="d-block w-100" alt="..." />

              </div>
              <div class="carousel-item">
                <img src={pic2} class="d-block w-100" alt="..." />

              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </section>
        <section className='container '>
          <h1 className='p-3 text-center'>OUR <span className='text-info'>MISSION</span></h1>
          <p className='p-3'>At SickKids, our mission is to deliver the highest quality medical care to children and adolescents, creating a supportive and nurturing environment where each patient receives personalized attention. We are dedicated to advancing pediatric medicine and improving the health and well-being of every child we serve.</p>
          <h1 className='p-3 text-center'>OUR <span className='text-info'>VISION</span></h1>
          <p className='p-3'>We envision a world where every child has access to outstanding healthcare, leading to healthier futures and brighter lives. Through pioneering research, advanced treatments, and a holistic approach to care, we aim to set new standards in pediatric healthcare and ensure that every child receives the support they need to thrive.</p>
          <h1 className='p-3 text-center'>OUR <span className='text-info'>VALUES</span></h1>
          <p>
            <ul>
              <li>Excellence in pediatric medicine</li>
              <li>Compassionate care for children and their families</li>
              <li>Pioneering research and innovation</li>
              <li>Commitment to patient safety and well-being</li>
            </ul>
          </p>


        </section>
        <section className='container text-center'>
          <h1 className='p-3 text-center'>OUR <span className='text-info'>TREATMENTS</span></h1>
          <div className='row'>
            <div class="col-12 col-lg-3 ">
              <div>
                <button type="button" className="btn btn-dark mb-3" >CARDIOLOGY</button>
              </div>

            </div>
            <div class="col-12 col-lg-3">
              <div>
                <button type="button" className="btn btn-info mb-3" >ORTHOPEDICS</button>
              </div>

            </div>
            <div class="col-12 col-lg-3">
              <div>
                <button type="button" className="btn btn-success mb-3" >ONCOLOGY</button>
              </div>

            </div>
            <div class="col-12 col-lg-3">
              <div>
                <button type="button" className="btn btn-danger mb-3" >NEUROLOGY</button>
              </div>

            </div>
          </div>

        </section>
        <section className='container-fluid p-0'>
          <h1 className='p-3 text-center'>CONTACT <span className='text-info'>US</span></h1>
          <div className='row '>
            <div class="col-12 col-lg-6">
              <img src={immg} alt='sccsc'/>

            </div>
            <div class="col-12 col-lg-6 p-5 ">
              <form className='bg-black p-4 rounded'>
                <h1 className='text-center text-white'>FILL out the form</h1>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Name" />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="Email address" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="tel" class="form-control" id="floatingInput" placeholder="Phone number" />
                  <label for="floatingInput">Phone number</label>
                </div>
                
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="floatingTextarea" placeholder="Leave a message here" style={{ height: '100px' }}></textarea>
                  <label for="floatingTextarea">Message</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              

              </form>
             
            </div>
              
          </div>

        </section>
       

      </div>
    </div>
  )
}

export default Home