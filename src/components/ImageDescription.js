import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../App.css';

const ImageDescription = () => {
  const { state } = useLocation();
  // const params = useParams();

  return (
    <div className='eightyPercentStyle'>
      <h1>Image Description Page for {state}</h1>
    </div>
  );
}

export default ImageDescription