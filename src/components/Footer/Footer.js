import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      © {new Date().getFullYear()} Digital Assistant. All rights reserved.
    </footer>
  );
};

export default Footer;
