import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import { Favorite, FavoriteBorder, OpenInNew, Event } from '@material-ui/icons';
import '../App.css';

const ImageCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.imageFavorite);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return <div style={styles.imageCardStyle}>
    <img
      src={props.imagePath != undefined ? props.imagePath : logo}
      style={styles.imageCardImageStyle}
    />
    <div style={styles.imageCardTextStyle}>
      <p style={styles.imageTitleStyle}>{props.imageTitle}</p>
      <p className='flexRowStyle flexStartJustifyStyle' style={styles.imageDateStyle}>
        <Event style={styles.imageDateIconStyle} />
        {props.imageDate}
      </p>
      <p style={styles.imageDescriptionStyle}>{props.imageDesc}</p>
    </div>
    <div className='flexRowStyle' style={styles.iconOptionsRowStyle}>
      <div
        style={styles.imageCardIconButtonStyle}
        className='activeOpacity'
        onClick={toggleFavorite}
      >
        {isFavorite ? <Favorite style={styles.favoriteIconStyle} />
          : <FavoriteBorder style={styles.favoriteIconStyle} />}
      </div>
      <div
        style={styles.imageCardIconButtonStyle}
        className='activeOpacity'
        onClick={() => { navigate('/imageDescription', { state: props.imageId }) }}
      >
        {<OpenInNew style={styles.openInNewIconStyle} />}
      </div>
    </div>
  </div>;
};

const styles = {
  imageCardStyle: {
    position: 'relative',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    margin: '30px 25px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  imageCardImageStyle: {
    display: 'flex',
    alignSelf: 'stretch',
    borderRadius: '10px 10px 0px 0px',
    height: '270px',
    boxFit: 'contain',
  },
  iconOptionsRowStyle: {
    position: 'absolute',
    top: '220px',
    right: '10px',
    display: 'flex',
  },
  imageCardIconButtonStyle: {
    display: 'flex',
    padding: '7px',
    margin: '0 5px',
    borderRadius: '50%',
    backgroundColor: '#00000080',
    cursor: 'pointer',
  },
  favoriteIconStyle: {
    height: '20px',
    width: '20px',
    color: '#E53935',
  },
  openInNewIconStyle: {
    height: '20px',
    width: '20px',
    color: '#FFFFFF',
  },
  imageCardTextStyle: {
    borderRadius: '0px 0px 10px 10px',
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '10px',
  },
  imageTitleStyle: {
    display: 'flex',
    padding: '5px',
    margin: '10px',
    borderBottom: '2px solid #DDDDDD',
    fontSize: '22px',
  },
  imageDateIconStyle: {
    fontSize: '20px',
    margin: '0px 5px',
  },
  imageDateStyle: {
    color: '#61DAFB',
    margin: '5px 10px',
    fontSize: '17px',
  },
  imageDescriptionStyle: {
    color: '#222',
    fontSize: '16px',
    margin: '10px',
  },
}

ImageCard.defaultProps = {
  imageFavorite: false,
}

export default ImageCard;
