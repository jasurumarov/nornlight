import React from 'react'
import Products from '../../../components/products/Products'
import { useGetProductsQuery } from '../../../context/api/productsApi'

const ManageProduct = () => {
  const { data, isLoading } = useGetProductsQuery()
  return (
    <div className='manage-product'>
      <h3>Manage products</h3>
      <Products isAdmin={true} data={data} isLoading={isLoading} />
    </div>
  )
}

export default ManageProduct