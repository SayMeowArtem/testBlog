import { Button } from '@material-ui/core'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import styles from './PostPage.module.css'


const PostPage: React.FC = (props) => {
    const history = useHistory();
   
    //@ts-ignore
    const {title, urlToImage, content} = props.location.state.data
    return (
        <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.img}><img src={urlToImage} alt={urlToImage} /></div>
            <div className={styles.content}>{content}</div>
            <Button  onClick={() => history.push('/')} variant='contained' color='primary'>Back To Main Page</Button>
        </div>
    )
}

export default PostPage
