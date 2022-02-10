import React from 'react';
import logo from '../logo.svg';

const ImageCard = (props) => {
  return <div style={styles.imageCardStyle}>
    <img
      src={props.imagePath != undefined ? props.imagePath : logo}
      style={styles.imageCardImageStyle}
    />
    <div style={styles.imageCardTextStyle}>
      <p style={styles.imageTitleStyle}>{props.imageTitle}</p>
      <p style={styles.imageDateStyle}>{props.imageDate}</p>
      <p style={styles.imageDescriptionStyle}>{props.imageDesc}</p>
    </div>
  </div>;
};

const styles = {
  imageCardStyle: {
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

export default ImageCard;
