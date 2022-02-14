import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmitClick = (event) => {
    console.log(`Submitted: ${searchQuery}`);
  }

  return <div style={styles.headerStyle}>
    <div className='eightyPercentStyle'>
      <div className='flexRowStyle flexSpaceBetweenJustifyStyle'>
        <div className="flexRowStyle">
          {/* Logo */}
          <img src={logo} className='reactLogo' alt='logo' />
          <h1>
            Simple Image Gallery
          </h1>
        </div>
        <div className='flexRow'>
          <input
            type='text'
            onChange={handleSearchQueryChange}
            placeholder='Search...'
            style={styles.inputStyle}
          />
          <button
            onClick={handleSubmitClick}
            style={styles.buttonStyle}
            className='buttonHoverStyle'
          >
            Submit
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
}

export default Header;
