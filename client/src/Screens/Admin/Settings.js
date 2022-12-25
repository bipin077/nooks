import React from 'react';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <Wrapper>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-sm-4 mt-4'>
                        <div className="card" style={{ "textAlign": "center" }}>
                            <div className="card-img-top text-center" style={{ "marginTop": "30px", "fontSize": "50px" }}>
                                <img src="/img/logo.png" style={{ "width": "70%" }} class="rounded" />
                            </div>
                            <div className="card-body">
                                <input type="file" name="logo" />
                                <button className="btn btn-primary mt-3">Update Logo</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 mt-4'>
                        <div className="card" style={{ "textAlign": "center" }}>
                            <div className="card-img-top text-center" style={{ "marginTop": "30px", "fontSize": "50px" }}>
                                <img src="/img/logo.png" style={{ "width": "70%" }} class="rounded" />
                            </div>
                            <div className="card-body">
                                <input type="file" name="logo" />
                                <button className="btn btn-primary mt-3">Update Fevicon</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 mt-4'>
                        <div className="card" style={{ "textAlign": "center" }}>
                            <div className="card-body">
                                <textarea name="details" class="form-control" cols="4" rows="4"></textarea>
                                <button className="btn btn-primary mt-3">Update Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 mt-4'>
                        <div className="card">
                            <div className="card-body">
                                <form action="/action_page.php">
                                <h4>Social Links</h4>
                                    <div class="mb-3 mt-3">
                                        <label for="facebook" class="form-label">Facebook:</label>
                                        <input type="text" class="form-control" placeholder="Facebook" name="facebook" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="instagram" class="form-label">Instagram:</label>
                                        <input type="text" class="form-control" placeholder="Instagram" name="instagram" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="twitter" class="form-label">Twitter:</label>
                                        <input type="text" class="form-control" placeholder="Twitter" name="twitter" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="linkedin" class="form-label">Linkedin:</label>
                                        <input type="text" class="form-control" placeholder="Linkedin" name="linkedin" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="whatsapp" class="form-label">Whatsapp:</label>
                                        <input type="text" class="form-control" placeholder="Whatsapp" name="whatsapp" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="youtube" class="form-label">Youtube:</label>
                                        <input type="text" class="form-control" placeholder="Youtube" name="youtube" />
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">Click Here To Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 mt-4'>
                        <div className="card">
                            <div className="card-body">
                                <form action="/action_page.php">
                                <h4>Contact Details</h4>
                                    <div class="mb-3 mt-3">
                                        <label for="phone1" class="form-label">Phone 1</label>
                                        <input type="number" class="form-control" placeholder="Enter Phone " name="phone1" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="phone2" class="form-label">Phone 2</label>
                                        <input type="number" class="form-control" placeholder="Enter Phone " name="phone2" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="email1" class="form-label">Email 1</label>
                                        <input type="email" class="form-control" placeholder="Enter Email " name="email1" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="email2" class="form-label">Email 2</label>
                                        <input type="email" class="form-control" placeholder="Enter Email " name="email2" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" class="form-control" placeholder="Enter Address " name="address" />
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label for="map" class="form-label">Map</label>
                                        <input type="text" class="form-control" placeholder="Enter Map Link " name="map" />
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">Click Here To Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Settings;