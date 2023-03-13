import React from 'react';

function Footer() {
    return (
        <footer className='text-center' color='white' bgColor='dark'>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </footer>
      );
}

export default Footer;