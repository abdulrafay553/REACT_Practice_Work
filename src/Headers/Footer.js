import React from 'react'

export default function Footer() {
    return (
        <div>
            <div>
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#f0ebeb" }}

                >
                    <div className="container p-4" style={{ color: "black" }}>

                        <section >
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <button type="button" className="btn btn-outline-dark btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>

                        <hr className="mb-4" />

                        <section className="mb-4 text-center">
                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>

                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-google"></i
                            ></a>

                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i
                            ></a>

                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>

                            <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="#!"
                                role="button"
                            ><i className="fab fa-github"></i
                            ></a>
                        </section>
                    </div>
                </footer>
            </div>

        </div >
    )
}

