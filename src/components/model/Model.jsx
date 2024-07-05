import React from 'react'

const Model = ({ children, close, width, maxWidth }) => {
    return (
        <>
            <div onClick={() => close(prev => prev = false)} className="overlay"></div>
            <div style={{ maxWidth: maxWidth, width: width }} className='model'>
                {children}
            </div>
        </>
    )
}

export default Model
