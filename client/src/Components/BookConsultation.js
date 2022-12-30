import React from 'react';
import {useGetAllWhyChooseUsQuery} from "../store/Services/WhyChooseUsService";

const BookConsultation = () => {

    const {data=[], isFetching} = useGetAllWhyChooseUsQuery();

    return (
        <section className="book-consultation">
            <div className="container">
                <div className="row">
                    { !isFetching && data.whychooseus.map((whychoose, index)=>
                        whychoose.status ? 
                            <div className="col-xl-4 col-md-6 d-flex" key={index}>
                                <div className="consult-box d-flex align-items-center">
                                    <div className="consult-img mr-15">
                                        <img src={ `/upload/whychooseus/${whychoose.image}`} alt="" />
                                    </div>
                                    <p>{whychoose.title}</p>
                                </div>
                            </div> : ''
                        )}
                </div>
            </div>
        </section>
    )
}

export default BookConsultation