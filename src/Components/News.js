import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
            articles: null,
            loading: false,
            page: 1,
            totalSize: 0
        }
        document.title = `Newsify - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines`
    }

    async updateNews(pageNum) {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7be2530430c47dca2cd89d8d4ee073b&page=${pageNum}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        if (parsedData.status === 'error') {
            console.log(parsedData.status);
        } else {
            this.setState({
                articles: parsedData.articles,
                totalSize: parsedData.totalResults,
                loading: false
            });
        }
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

    render() {
        return (
            <div className='container my-3' style={{ textAlign: 'center' }}>
                <h2>Newsify - Top Headlines</h2>
                {(
                    this.state.loading ?
                        <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                            <Spinner />
                        </div>
                        :
                        (
                            this.state.articles &&
                            <div>
                                <div className='row'>
                                    {this.state.articles.map(ele =>
                                        <div className='col-md-4 mb-4' key={ele.url}>
                                            <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} url={ele.url} author={ele.author === null ? "Unknown" : ele.author} date={ele.publishedAt} source={ele.source.name} />
                                        </div>
                                    )}
                                </div>
                                <div className='container mt-4 d-flex justify-content-between'>
                                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&laquo; Previous</button>
                                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalSize / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
                                </div>
                            </div>
                        )
                )
                }
            </div>
        )
    }
}

// ceil of 3.6 and 3.3 is 4 
