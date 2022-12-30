import React from 'react';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import ContactDetails from '../../Components/admin/ContactDetails';
import SocialLinks from '../../Components/admin/SocialLinks';
import Logo from '../../Components/admin/Logo';
import Fevicon from '../../Components/admin/Fevicon';
import UpdateDetails from '../../Components/admin/UpdateDetails';

const Settings = () => {
    return (
        <Wrapper>
            <div className='container mt-4'>
                <div className='row'>
                    <Logo />
                    <Fevicon />
                    <UpdateDetails />
                    <div className='col-sm-6 mt-4'>
                        <SocialLinks />
                    </div>
                    <div className='col-sm-6 mt-4'>
                        <ContactDetails />
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Settings;