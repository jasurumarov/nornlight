import React, { useEffect, useState } from 'react'
import { useDeleteCategoryMutation, useGetCategoryQuery, useUpdateCategoryMutation } from '../../../context/api/categoryApi'
import { RiEdit2Line } from 'react-icons/ri'
import { FaRegTrashAlt } from 'react-icons/fa'
import Model from '../../../components/model/Model'
import { useGetInputValue } from '../../../hooks/useGetInputValue'
import { toast } from 'react-toastify'

// initialState
const initialState = {
  title: ''
}

const ManageCatefory = () => {
  const [editModel, setEditModel] = useState(false)
  const [editModelData, setEditModelData] = useState(null)
  const [deletingCategoryId, setDeletingCategoryId] = useState(null)
  const { data } = useGetCategoryQuery()
  const { formData, setFormData, handleChange } = useGetInputValue(initialState)

  const [deleteCategory] = useDeleteCategoryMutation()
  const [updateCategory, { isLoading, isSuccess }] = useUpdateCategoryMutation()

  const handleDeleteCategory = (id) => {
    if (window.confirm('Are you sure?')) {
      setDeletingCategoryId(id)
      deleteCategory(id)
    }
  }

  const handleEdit = e => {
    e.preventDefault()
    updateCategory({ body: formData, id: editModelData.id })
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Category updated');
      setEditModel(prev => prev = false)
    }
  }, [isSuccess]);

  useEffect(() => {
    if (editModelData) {
      setFormData({
        title: editModelData.title
      });
    }
  }, [editModelData, setFormData]);

  let categoryItem = data?.map(category => (
    <li key={category.id}>
      <h4>{category.title}</h4>
      <div className='admin-btns'>
        <button onClick={() => {
          setEditModel(true)
          setEditModelData(category)
        }}><RiEdit2Line /></button>
        <button disabled={deletingCategoryId === category.id} onClick={() => handleDeleteCategory(category.id)}><FaRegTrashAlt /></button>
      </div>
    </li>
  ))
  return (
    <div className='manage-category'>
      <h3>Manage category</h3>
      <ul>
        {categoryItem}
      </ul>
      {
        editModel
          ?
          <Model width={'40%'} close={setEditModel}>
            <form onSubmit={handleEdit}>
              <div>
                <label htmlFor="category">Category</label>
                <input onChange={handleChange} value={formData.title} name='title' required id='category' type="text" />
              </div>
              <button disabled={isLoading} className='create-button'>{isLoading ? 'Loading...' : 'Update'}</button>
            </form>
          </Model>
          : <></>
      }
    </div>
  )
}

export default ManageCatefory
