import React from 'react';
import ClientWrapper from "./ClientWrapper";
import { Link } from 'react-router-dom';
import {useGetContactDetailsQuery} from "../store/Services/ContactServices";

const ContactUs = () => {
    const {data=[], isFetching} = useGetContactDetailsQuery();
    return (
        <ClientWrapper>
        { !isFetching ?
            <div className="container">
                <div className='row mb-3 mt-4'>
                    <div className='col-sm-6 mt-4'>
                        <form>
                            <h4>Contact Us</h4>
                            <p className='mt-2'>Have any query? Feel free to contact us.</p>
                            <div class="form-row">
                                <div class="col mt-2">
                                    <input type="text" class="form-control" placeholder="Enter Full Name" name="name" />
                                </div>
                                <div class="col mt-2">
                                    <input type="tel" class="form-control" placeholder="Enter mobile number" name="phone" />
                                </div>
                                <div class="col mt-2">
                                    <input type="text" class="form-control" placeholder="Enter email address" name="email" />
                                </div>
                                <div class="col mt-2">
                                    <textarea class="form-control" placeholder="Enter Query/Message" style={{ "height" : "100px"}} name="message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-4 offset-sm-2 mt-4'>
                        
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="contact-info mt-4">
                            <li>
                                { data?.contact?.phone1 ?  <p><i className="fas fa-phone-alt"></i> {data.contact.phone1} </p> : "" }
                                { data?.contact?.phone2 ? <p><i className="fas fa-phone-alt"></i> {data.contact.phone2} </p> : "" }
                            </li>
                            <li>
                                { data?.contact?.email1 ? <p><i className="fas fa-envelope"></i> <Link to="" className="__cf_email__">{data.contact.email1}</Link></p> : "" }
                                { data?.contact?.email2 ? <p><i className="fas fa-envelope"></i> <Link to="" className="__cf_email__">{data.contact.email2}</Link></p> : "" }
                            </li>
                            <li>
                                <p><i className="fas fa-map-marker-alt"></i> {data.contact.address}</p>
                            </li>
                        </ul>
                        <ul className="footer-social-icon">
                            { data?.contact?.facebook ? <li><Link to={data.contact.facebook} target="_blank"><i className="fab fa-facebook"></i></Link></li> : "" }
                            {data?.contact?.linkedin ? <li><Link to={data.contact.linkedin} target="_blank"><i className="fab fa-linkedin"></i></Link></li> : "" }
                            {data?.contact?.instagram ? <li><Link to={data.contact.instagram} target="_blank"><i className="fab fa-instagram"></i></Link></li> : "" }
                            {data?.contact?.twitter ?  <li><Link to={data.contact.twitter} target="_blank"><i className="fab fa-twitter"></i></Link></li> : "" }
                            {data?.contact?.whatsapp ?  <li><Link to={data.contact.whatsapp} target="_blank"><i className="fab fa-whatsapp"></i></Link></li> : "" }
                            {data?.contact?.youtube ?  <li><Link to={data.contact.youtube} target="_blank"><i className="fab fa-youtube"></i></Link></li> : "" }
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        { data?.contact?.map ? <iframe src={ data.contact.map } style={{ "border": "0", "width": "100%", "height": "250px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : "" }
                    </div>
                </div>
            </div> : "" }

        </ClientWrapper>
    )
}

export default ContactUs