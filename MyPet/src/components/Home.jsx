import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" className="d-block w-100 obj-cover" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img2.jpg" className="d-block w-100 obj-cover" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img3.jpg" className="d-block w-100 obj-cover" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img4.jpg" className="d-block w-100 obj-cover" alt="IPhone" height="500px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product />

            <section id="chefs" className="chefs">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Proffesional <span>Doctors</span></h2>
                        <p className="textBarbers">We present you our team of the best professionals!</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/images/doctors/doctor-1.jpg" className="img-fluid" alt="doctor1" /></div>
                                <div className="member-info">
                                    <h4>Johnana Does</h4>
                                    <span>Vet Doctor</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/images/doctors/doctor-2.jpg" className="img-fluid" alt="doctor2" /></div>
                                <div className="member-info">
                                    <h4>Carl Johnson</h4>
                                    <span>Doctor</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="assets/images/doctors/doctor-3.jpg" className="img-fluid" alt="doctor3" /></div>
                                <div className="member-info">
                                    <h4>Jessica Jones</h4>
                                    <span>Parrot expert</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="book-a-table" class="book-a-table">
                <div class="container">

                    <div class="section-title">
                        <h2>Make an appointment for a <span>pet</span></h2>
                        <p>Fill out the form and get a answer in less than 5 minutes!</p>
                    </div>

                    <form action="" method="post" role="form" class="php-email-form">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                    data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-lg-4 col-md-6 form-group mt-3">
                                <input type="number" class="form-control" name="people" id="people" placeholder="# of people"
                                    data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="text-center"><button className="buttonGet" type="submit">Get it!</button></div>
                    </form>

                </div>
            </section>


        </div>
    )
}

export default Home
