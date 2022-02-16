import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import { Search, Favorite } from '@material-ui/icons';
import '../App.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  // const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmitClick = () => {
    console.log(`Submitted: ${searchQuery}`);
  }

  const handleFavoritesClick = () => {
    navigate('/favorites');
  }

  return <div style={styles.headerStyle}>
    <div className='eightyPercentStyle'>
      <div className='flexRowStyle flexSpaceBetweenJustifyStyle'>
        <div className="flexRowStyle">
          <img src={logo} className='reactLogo' alt='logo' />
          <Link to='/'>
            <h1>
              Simple Image Gallery
            </h1>
          </Link>
        </div>
        <div className='flexRowStyle'>
          <input
            type='text'
            onChange={handleSearchQueryChange}
            placeholder='Search...'
            style={styles.inputStyle}
          />
          <button
            onClick={handleSubmitClick}
            style={styles.searchButtonStyle}
            className='buttonHoverStyle activeOpacity'
          >
            <Search style={styles.searchIconStyle} />
          </button>
          <button
            onClick={handleFavoritesClick}
            style={styles.searchButtonStyle}
            className='buttonHoverStyle activeOpacity'
          >
            <Favorite style={styles.searchIconStyle} />
          </button>
        </div>
      </div>
    </div>
  </div>;
}

const styles = {
  headerStyle: {
    padding: '10px',
    backgroundColor: '#282c34',
    color: '#FFFFFF',
  },
  inputStyle: {
    borderRadius: '5px',
    padding: '8px 10px',
    fontSize: '16px',
  },
  searchButtonStyle: {
    padding: '8px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: {
    fontSize: '20px',
  }
}

export default Header;
