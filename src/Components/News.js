import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalSize, settotalSize] = useState(0)
    const [err, seterr] = useState('')

    const updateNews = async (pageNum) => {
        setLoading(true)
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNum}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(70);
        let parsedData = await data.json()
        if (parsedData.status === 'error') {
            seterr(parsedData.status)
        } else {
            setArticles(parsedData.articles);
            settotalSize(parsedData.totalResults);
            setLoading(false);
        }
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Newsify`
        updateNews(page);
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let newpage = page + 1;
        setpage(newpage);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newpage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        if (parsedData.status === 'error') {
            seterr(parsedData.status);
        } else {
            let article = articles;
            article = article.concat(parsedData.articles);
            setArticles(article);
            settotalSize(parsedData.totalResults);
        }
    }

    return (
        <div className='container my-3' style={{ textAlign: 'center' }}>
            <h2>Newsify - Top Headlines</h2>
            {
                (err ? <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}><h3> Unable to fetch news!</h3></div>

                    : (
                        loading === true ?
                            <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                                <Spinner />
                            </div> : <></>))
            }

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalSize}
                loader={<div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Spinner />
                </div>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                style={{ overflowX: 'hidden' }}
            >
                <div className='row'>
                    {articles.map(ele =>
                        <div className='col-md-4 mb-4' key={ele.url}>
                            <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} url={ele.url} author={ele.author === null ? "Unknown" : ele.author} date={ele.publishedAt} source={ele.source.name} />
                        </div>
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default News;

News.defaultProps = {
    country: 'in',
    category: "general",
    pageSize: 18
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
// ceil of 3.6 and 3.3 is 4
