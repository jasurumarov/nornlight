import React, { useEffect } from 'react'
import { useGetInputValue } from '../../../hooks/useGetInputValue'
import { useCreateCategoryMutation } from '../../../context/api/categoryApi'
import { toast } from 'react-toastify'

// initialState
const initialState = {
    title: ''
}

const CreateCategory = () => {
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)
    const [createCategory, { isLoading, isSuccess }] = useCreateCategoryMutation()

    const handleCreate = e => {
        e.preventDefault()
        createCategory(formData)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Category created');
            setFormData(initialState)
        }
    }, [isSuccess]);
    return (
        <div className='create-category'>
            <h3>Create category</h3>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="category">Category</label>
                    <input onChange={handleChange} value={formData.title} name='title' required id='category' type="text" />
                </div>
                <button disabled={isLoading} className='create-button'>{isLoading ? 'Loading...' : 'Create'}</button>
            </form>
        </div>
    )
}

export default CreateCategory
