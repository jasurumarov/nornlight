import React, { useEffect } from 'react'
import { useGetCategoryQuery } from '../../../context/api/categoryApi';
import { useGetInputValue } from '../../../hooks/useGetInputValue';
import { useCreateProductMutation } from '../../../context/api/productsApi';
import { toast } from 'react-toastify';

// InitialState
const initialState = {
    title: '',
    price: '',
    oldprice: '',
    url: '',
    category: '',
    desc: ''
}

const CreateProduct = () => {
    const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation()

    const { data } = useGetCategoryQuery()
    let categories = data?.map(category => (
        <option value={category.title} key={category.id}>{category.title}</option>
    ))
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)
    const handleCreate = e => {
        e.preventDefault()
        formData.price = +formData.price
        formData.oldprice = +formData.oldprice
        formData.url = formData.url.split("\n").filter(i => i.trim())
        createProduct(formData)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Product created');
            setFormData(initialState)
        }
    }, [isSuccess]);
    return (
        <div className='create-product'>
            <h3>Create product</h3>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input required onChange={handleChange} value={formData.title} id='title' name='title' type="text" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input required onChange={handleChange} value={formData.price} id='price' name='price' type="number" />
                </div>
                <div>
                    <label htmlFor="oldprice">Old price</label>
                    <input required onChange={handleChange} value={formData.oldprice} id='oldprice' name='oldprice' type="number" />
                </div>
                <div>
                    <label htmlFor="url">Image-url</label>
                    <textarea required onChange={handleChange} value={formData.url} name="url" id="url"></textarea>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select onChange={handleChange} value={formData.category} required name="category" id="category">
                        <option disabled value="">Tanlang</option>
                        {categories}
                    </select>
                </div>
                <div>
                    <label htmlFor="desc">Desc</label>
                    <textarea required onChange={handleChange} value={formData.desc} rows={4} name="desc" id="desc"></textarea>
                </div>
                <button disabled={isLoading} className='create-button'>{isLoading ? 'Loading...' : 'Create'}</button>
            </form>
        </div>
    )
}

export default CreateProduct
