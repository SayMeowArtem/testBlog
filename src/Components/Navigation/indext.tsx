import React, {useState} from 'react'
import clsx from 'clsx';
import {
    Link
  } from "react-router-dom";

import styles from './navigation.module.css'

interface IPageItem {
    name: string,
    path: string
}

const pages: IPageItem[] = [
    {
        name: 'Главная',
        path: '/'
    },
    {
        name: 'Добавить запись',
        path: '/addpost'
    }
]

const Navigation: React.FC = () => {

    const [activePage, setactivePage] = useState<number>(0)

    const selectMenu = (index : number): void => {
        setactivePage(index)
    }

    return (
        <nav>
            <ul className={styles.Menu}>
                {pages.map((page,index) => <li key={page.name} onClick={() => selectMenu(index)} className={clsx(index === activePage ? styles.active : '', styles.color)}><Link to={page.path}>{page.name}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navigation
