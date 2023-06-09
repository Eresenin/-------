import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 pb-2 textCourse">
                            Course work on the topic "MyPet"
                            <br />
                            Work of a student Vasyliev Nikita, KN-202
                        </p>
                        <p className="lead mb-4">
                            "Premier animal care facility dedicated to providing top-quality veterinary services for dogs, cats, and parrots. Our clinic is staffed with highly skilled veterinarians and a compassionate team who are passionate about the health and well-being of your beloved pets."
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
