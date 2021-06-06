import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export interface IPost {
    title?: string,
    author?: string,
    content?: string,
    urlToImage?: string
}

const PostItem: React.FC<IPost> = ({title = '', author = '', urlToImage = '', content= ''}: IPost) => {
    return (
        <div className={styles.item}>
            <div>
            <Link to={{
                        pathname: '/post',
                        state: {
                            data: {title, author, urlToImage, content}
                        }
                    }}><img src={urlToImage.includes('https') ?  urlToImage : 'https://cdn.modernghana.com/story_/1024/728/920202071209-txobredq5l-john-scores.jpg'}/></Link>
            </div>
            <div className={styles.title}> 
                <div className={styles.title_text}>
                    <Link to={{
                        pathname: '/post',
                        state: {
                            data: {title, author, urlToImage, content}
                        }
                    }}>{title}</Link>
                </div>
                <div className={styles.author}>
                    Author: {author}
                </div>
            </div>
        </div>
    )
}

export default PostItem
