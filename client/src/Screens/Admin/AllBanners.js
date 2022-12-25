import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

import {useGetAllBannersQuery, useDeleteBannerMutation} from "../../store/Services/BannerServices";

const AllBanners = () => {
  const {data=[], isFetching} = useGetAllBannersQuery();

  const [removeBanner, response] = useDeleteBannerMutation();
  console.log(response);

  const deleteBanner = (id) =>
  {
      removeBanner(id);
  }

  useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Banner Deleted Successfully");
        }
        
    },[response.isSuccess])


  return (
    <Wrapper>
      <div class="container mt-3">
        <h2>Manage Banners</h2>
        <Link to="/admin/addBanner"><button className='m-2 px-2 bg-success text-light'>Add New Banner</button></Link>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              { !isFetching && data.banners.map((banner, index) =>
                <tr key={index}>
                  <td width="1%">{index+1}</td>
                  <td width="10%"><img src={ `/upload/banners/${banner.image}` } style={{"width" : "70%"}} class="rounded"  /></td>
                  <td width="20%">{ banner.title_one } { banner.title_two}</td>
                  <td width="60%">{banner.subtitle}</td>
                  <td width="1%">{ banner.status ? "Active" : "Inactive" }</td>
                  <td width="1%"><Link to={ `/admin/editBanner/${banner._id}`}><i class="fas fa-edit mr-10"></i></Link></td>
                  <td width="1%"><i class="fas fa-trash mr-10" onClick={()=>deleteBanner(banner._id)}></i></td>
                </tr>
              )}
              { data.banners && data.banners.length < 1 ? <tr><td colSpan={8} className="text-center"> No Record Found </td></tr> : ''}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AllBanners;