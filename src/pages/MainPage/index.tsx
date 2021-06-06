import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPaginate from "react-paginate";
import PostItem from '../../Components/Post';
import { GeneraterandomNumber } from '../../utils';
import { IReduceProps } from './../AddPostPage'

import './mainPage.css'

const MainPage: React.FC<IReduceProps> = ({dispatch, state}: IReduceProps) => {

    const pageCount: number = Math.ceil(state.posts.length / state.postPerPage);
    const offset: number = state.page * state.postPerPage;

    const currentPageData = state.posts
      .slice(offset, offset + state.postPerPage)
      .map((el) => <PostItem key={GeneraterandomNumber()} title={el.title} author={el.author} urlToImage={el.urlToImage} content={el.content}/>);

    function handlePageClick({ selected: selectedPage }) {
        dispatch({type: 'UPDATE_ACTIVE_PAGE', payload: selectedPage })
      }
    return (
        <div>
         {!state.postsLoaded ? <CircularProgress /> :
            <> 
                <div className='postContainer'>{currentPageData}</div>
                <ReactPaginate
                    previousLabel={"←"}
                    nextLabel={"→"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </>    
            }
        </div>
    )
}

export default MainPage
