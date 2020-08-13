import React from 'react'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div>
        &copy; 2020 Made with ❤️ by{' '}
        <a className='Link' href='http://github.com/uujx/netflix-clone'>
          {' '}
          uujx
        </a>
      </div>
    </footer>
  )
}

export default Footer
