import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: "general",
        pageSize: 18
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalSize: 0
        }
        document.title = `Newsify - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines`
    }

    async updateNews(pageNum) {
        this.setState({ loading: true })
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNum}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json()
        if (parsedData.status === 'error') {
            this.setState({
                err: parsedData.status
            })
        } else {
            this.setState({
                articles: parsedData.articles,
                totalSize: parsedData.totalResults,
                loading: false
            });
        }
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews(this.state.page);
    }

    handleNextClick = async () => {
        this.updateNews(this.state.page + 1);
        this.setState({ page: this.state.page + 1 });
    }

    handlePrevClick = async () => {
        this.updateNews(this.state.page - 1);
        this.setState({ page: this.state.page - 1 });
    }

    fetchMoreData = async () => {
        let newpage = this.state.page + 1;
        this.setState({ page: newpage })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${newpage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        if (parsedData.status === 'error') {
            console.log(parsedData.status);
        } else {
            let article = this.state.articles;
            article = article.concat(parsedData.articles);
            this.setState({
                articles: article,
                totalSize: parsedData.totalResults
            });
        }
    }

    render() {
        return (
            <div className='container my-3' style={{ textAlign: 'center' }}>
                <h2>Newsify - Top Headlines</h2>
                {
                    (this.state.err ? <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}><h3> Unable to fetch news!</h3></div>

                        : (
                            this.state.loading &&
                            <div div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                                <Spinner />
                            </div>))
                }

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalSize}
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
                        {this.state.articles.map(ele =>
                            <div className='col-md-4 mb-4' key={ele.url}>
                                <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} url={ele.url} author={ele.author === null ? "Unknown" : ele.author} date={ele.publishedAt} source={ele.source.name} />
                            </div>
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

// ceil of 3.6 and 3.3 is 4 
