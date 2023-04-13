import React,{useState} from 'react'
import {HeaderInfo} from '../../Components';
import { Refresh,SearchIcon } from '../../assets';
import { Input,Table,Pagination,Select } from "antd";
import {CaretDownOutlined} from "@ant-design/icons";
import { ApiCategoriesTableHead } from '../../constants/dummyData';
import {handleEditApiCategoryModal,handleAddApiCategoryModal,handleDeleteApiCategoryModal} from '../../redux/reducers/handleModalsReducers';
import { Edit,Trash } from '../../assets';
import { useDispatch } from "react-redux";
const ApiCategories = () => {
const [currentPage, setCurrentPage] = useState(1);
const dispatch = useDispatch();
const ApiCategoriesTableBody=[
  {
    key:"1",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"2",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"3",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"4",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"5",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"6",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"7",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"8",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"9",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
  {
    key:"10",
    category:"Rest",
    description:"Rest",
    number:"1",
    actions:(
      <div className="main-api-Category">
        <Edit className='edit-apiCategory' onClick={()=>dispatch(handleEditApiCategoryModal(true))}/>
        <Trash className='trash-apiCategory' onClick={()=>dispatch(handleDeleteApiCategoryModal(true))}/>
      </div>
    ),
  },
]
const HandlePagination=(page)=>{
setCurrentPage(page);
}

  return (
    <div>
     <HeaderInfo/>
     <div className="ApiCategoriesMain">
      <div className="ApiCategoriesMain-head">
      <span>
          <Input
            size="large"
            prefix={<SearchIcon/>}
            allowClear={true}
            className='Api-Categories-Search'
          />
        </span>
        <div className='add-refresh'>
          <button className='btn-api-category' onClick={()=>dispatch(handleAddApiCategoryModal(true))}>Add API Category</button>
        <Refresh/>
        </div>
      </div>
      <div className="table-api-category">
        <Table 
        columns={ApiCategoriesTableHead}
        dataSource={ApiCategoriesTableBody}
        pagination={false}
        // pagination={
        //   { 
        //     defaultPageSize:10,
        //     showTotal:(total, range) => (
        //       <span className='table-apiCategory-total'>
        //         Total {total}
        //       </span>
        //     )
        //    }
        // }
        />
        <div className='pagination-table'>
        <span className='total'>Total 24</span>
        <div className='pagination-table-div'>
        <span className='select-perpage'>
        <p>
        Rows per page
        </p>
        <Select
                suffixIcon={
                  <CaretDownOutlined className="ant-select-suffix downarrow-select" />
                }
                defaultValue="10"
                options={[
                  {
                    value: "10",
                    label: "10",
                  },
                  {
                    value: "20",
                    label: "20",
                  },
                  {
                    value: "50",
                    label: "50",
                  },
                  {
                    value: "100",
                    label: "100",
                  },
                ]}
              />
        </span>
        <Pagination 
        onChange={HandlePagination}
        total={24}
        defaultPageSize={10}
        current={currentPage}
        />
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ApiCategories
