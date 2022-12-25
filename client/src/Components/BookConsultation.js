import React from 'react'

const BookConsultation = () => {
    return (
        <section className="book-consultation">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="consult-box d-flex align-items-center">
                            <div className="consult-img mr-15">
                                <img src="/img/icons/book-01.svg" alt="" />
                            </div>
                            <p>Book any Doctor you want</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="consult-box d-flex align-items-center">
                            <div className="consult-img mr-15">
                                <img src="/img/icons/book-02.svg" alt="" />
                            </div>
                            <p>Book Virtual Appointment</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="consult-box d-flex align-items-center">
                            <div className="consult-img mr-15">
                                <img src="/img/icons/book-03.svg" alt="" />
                            </div>
                            <p>Book virtual Appointments with AYUSH doctors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookConsultation