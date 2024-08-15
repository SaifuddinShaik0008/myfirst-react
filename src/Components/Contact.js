import React, { useState } from 'react'
import innerstyles from "./Style.module.css"

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",

    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let nameexp = /^[a-zA-Z]+$/
        let phoneexp = /^[0-9]{10}$/
        let emailexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!nameexp.test(data.name)) {
            alert("Invalid Name")
            return false
        }
        if (!phoneexp.test(data.phone)) {
            alert("Invalid Phone Number")
            return false
        }
        if (!emailexp.test(data.email)) {
            alert("Invalid Email Address")
            return false
        }
        alert("Form submitted successfully")
    }


    return (
        <div>
            <div className={innerstyles.breadcrumb}>
                <h1>Contact us</h1>

            </div>
            <div className='container-fluid p-0'>
                <div className="row ">
                    <div className="col-12 col-lg-8 p-5  ">

                        <form className='bg-black p-5 rounded' onSubmit={handleSubmit}>
                            <h2 className='text-light'>FILL the Details</h2>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput"
                                    name="name" value={data.name} onChange={handleChange}

                                    placeholder="Your name" />
                                <label for="floatingInput">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="tel" class="form-control" id="floatingInput"
                                    name="phone" value={data.phone} onChange={handleChange}

                                    placeholder="Your phone number" />
                                <label for="floatingInput">Phone number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control"
                                    name="email" value={data.email} onChange={handleChange}

                                    id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Message here..." style={{ height: '100px' }}></textarea>
                                <label for="floatingTextarea">Message</label>
                            </div>
                            <div className="">
                                <button type="submit" class="btn btn-primary btn-block mt-3">Submit</button>
                            </div>

                        </form>
                    </div>

                    <div className="col-12 col-lg-4 p-5 ms-auto">
                        <h2>Address</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="bi bi-geo-alt-fill"></i> 1234 Main St, City, State, ZIP</li>
                            <li className="list-group-item"><i className="bi bi-telephone-fill"></i> (123) 456-7890</li>
                            <li className="list-group-item"><i className="bi bi-envelope-fill"></i> email@example.com</li>
                        </ul>
                        <h2>Follow Us</h2>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="me-3"><i className="bi bi-linkedin"></i></a>

                        </div>




                    </div>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11011.838082195214!2d78.3761016272858!3d17.449219961995045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1723663738294!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

            </div>
        </div>
    )
}

export default Contact