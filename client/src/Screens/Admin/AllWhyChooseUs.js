import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

import { useGetAllWhyChooseUsQuery, useDeleteWhyChooseUsMutation } from '../../store/Services/WhyChooseUsService';

const AllWhyChooseUs = () => {

  const {data=[], isFetching} = useGetAllWhyChooseUsQuery();

  const [removeWhyChooseUs, response] = useDeleteWhyChooseUsMutation();
  console.log(response);

  const deleteWhyChooseUs = (id) =>
  {
    removeWhyChooseUs(id);
  }

  useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Why Choose Us Deleted Successfully");
        }
        
    },[response.isSuccess])


  return (
    <Wrapper>
      <div class="container mt-3">
        <h2>Manage Why Choose Us</h2>
        <Link to="/admin/addWhyChooseUs"><button className='m-2 px-2 bg-success text-light'>Add New Why Choose Us</button></Link>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          { !isFetching && data.whychooseus.map((whychoose, index) =>
            <tr key={index}>
              <td width="1%">{index+1}</td>
              <td width="10%"><img src={ `/upload/whychooseus/${whychoose.image}` } style={{"width" : "70%"}} class="rounded"  /></td>
              <td width="40%">{whychoose.title}</td>
              <td width="10%">{ whychoose.status ? "Active" : "Inactive" }</td>
              <td width="10%"><Link to={ `/admin/editWhyChooseUs/${whychoose._id}`}><i class="fas fa-edit mr-10"></i></Link></td>
              <td width="10%"><i class="fas fa-trash mr-10" onClick={()=>deleteWhyChooseUs(whychoose._id)}></i></td>
            </tr>
          )}
          { data.whychooseus && data.whychooseus.length < 1 ? <tr><td colSpan={8} className="text-center"> No Record Found </td></tr> : ''}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AllWhyChooseUs;