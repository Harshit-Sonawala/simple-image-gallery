import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import { ArrowBack } from '@material-ui/icons';

const ImageDescription = () => {
  const { pathname, state } = useLocation();
  // const params = useParams();
  const navigate = useNavigate();

  return (
    <div className='eightyPercentStyle'>
      <div className='flexRowStyle'>
        <button
          onClick={() => { navigate(-1); }}
        >
          <ArrowBack style={{ fontSize: '22px' }} />
        </button>
        <p>Path: {pathname}</p>
      </div>
      <h1>Image Description Page for {state}</h1>
    </div>
  );
}

export default ImageDescription