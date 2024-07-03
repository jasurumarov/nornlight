import React from 'react'
import EmptyImg from '../../assets/images/nothing-here-v4.jpg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Empty = ({ title }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '140px 0' }} className='empty'>
      <div style={{ width: '400px', height: '60px' }}></div>
      <img style={{ marginTop: '-220px', marginRight: '-20px', objectFit: 'contain' }} width={800} src={EmptyImg} alt="empty image" />
      <h3 style={{ marginTop: '-20px', fontSize: '28px', color: '#454545' }}>Your {title} is empty!</h3>
      <Link to={"/"}><Button style={{ background: '#454545', paddingTop: '8px', marginTop: '20px' }} variant="contained">Continue Shopping</Button></Link>
    </div>
  )
}

export default Empty