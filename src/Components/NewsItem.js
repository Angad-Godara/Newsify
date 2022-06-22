import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className='my-2 d-flex' style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div className="card" style={{ width: "18rem" }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '98%', zIndex: '1' }}>
                        {source}
                    </span>
                    <img src={imageUrl == null ? "https://st.depositphotos.com/1842549/2403/v/600/depositphotos_24031475-stock-illustration-news-icon.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}
