import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

import { useGetAllCategoriesQuery, useDeleteCategoryMutation } from '../../store/Services/CategoryService';

const AllCategories = () => {

  const {data=[], isFetching} = useGetAllCategoriesQuery();

  const [removeCategory, response] = useDeleteCategoryMutation();
  console.log(response);

  const deleteCategory = (id) =>
  {
      removeCategory(id);
  }

  useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Category Deleted Successfully");
        }
        
    },[response.isSuccess])


  return (
    <Wrapper>
      <div className="container mt-3">
        <h2>Manage Categories</h2>
        <Link to="/admin/addCategory"><button className='m-2 px-2 bg-success text-light'>Add New Category</button></Link>
        <table className="table table-striped">
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
          { !isFetching && data.category.map((category, index) =>
            <tr key={index}>
              <td width="1%">{index+1}</td>
              <td width="10%"><img src={ `/upload/category/${category.image}` } style={{"width" : "70%"}} className="rounded"  /></td>
              <td width="40%">{category.title}</td>
              <td width="10%">{ category.status ? "Active" : "Inactive" }</td>
              <td width="10%"><Link to={ `/admin/editCategory/${category._id}`}><i className="fas fa-edit mr-10"></i></Link></td>
              <td width="10%"><i className="fas fa-trash mr-10" onClick={()=>deleteCategory(category._id)}></i></td>
            </tr>
          )}

          { data.category && data.category.length < 1 ? <tr><td colSpan={8} className="text-center"> No Record Found </td></tr> : ''}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AllCategories;