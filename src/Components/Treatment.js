import React from 'react'
import neu from "./neu.jpg"
import car from "./car.jpg"
import ortho from "./ortho.png"
import onco from "./onco.jpg"
import pediat from "./pediat.jpg"
import dia from "./dia.avif"
import optho from "./optho.jpg"
import critical from "./critical.jpg"
import nephra from "./nephra.jpg"
import innerstyles from "./Style.module.css"

const Treatment = () => {
  return (
    <div>
       <div className={innerstyles.breadcrumb}>
        <h1>Treatments</h1>

      </div>
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={neu} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">NEUROLOGY</h5>

                <p class="card-text">medical specialty concerned with the nervous system and its functional or organic disorders.</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={car} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CARDIOLOGY</h5>

                <p class="card-text"> diagnosis and treatment of diseases and disorders of the heart.</p>
                <button class="btn btn-primary">BOOK Appointment</button>

              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={ortho} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">ORTHOPEDICS</h5>

                <p class="card-text"> a medical specialty that focuses on the musculoskeletal system, which includes bones.</p>
                <button class="btn btn-primary">BOOK Appointment</button>

              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={pediat} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PEDIATRICS</h5>

                <p class="card-text">relating to the branch of medicine dealing with children and their diseases..</p>
                <button class="btn btn-primary">BOOK Appointment</button>

              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={onco} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">ONCOLOGY</h5>

                <p class="card-text"> medicine that focuses on the prevention, diagnosis, and treatment of cancer</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={optho} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">OPTHOMOLOGY</h5>

                <p class="card-text"> medicine concerned with the diagnosis and treatment of disorders of the eye..</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={dia} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DIABETICS</h5>

                <p class="card-text"> when the body cannot effectively use the insulin it produces</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={nephra} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">NEPHRALOGY</h5>

                <p class="card-text">the adult and pediatric study of the kidneys and its diseases</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <div class="card" >
              <img src={critical} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CRITICAL CARE</h5>

                <p class="card-text"> medical care for people who have life-threatening injuries and illnesses.</p>
                <button class="btn btn-primary">BOOK Appointment</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Treatment