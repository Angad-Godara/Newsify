import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div className='my-2 d-flex' style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl == null ? "https://st.depositphotos.com/1842549/2403/v/600/depositphotos_24031475-stock-illustration-news-icon.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
