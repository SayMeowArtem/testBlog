import React from 'react'
import Navigation from '../Navigation/indext'
import styles from './header.module.css'

const HeaderComponent: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
              Test Task
            </div>
            <Navigation/>
        </header>
      );
}

export default HeaderComponent
