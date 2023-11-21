import React from 'react';
import image from '../../constants/image';
import './Subheading.css'

const Subheading = ({title}) => (
    <div style={{ marginBottom: '1rem'}}>
        <p className='font'>{title}</p>
        <img src={image.Line} alt="line" className='lineImg' />
    </div>
);

export default Subheading;