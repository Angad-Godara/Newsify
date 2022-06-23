import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className='my-2 d-flex' style={{ justifyContent: 'center', alignItems: 'center', height: '100%', marginBottom: '20px' }}>
            <div className="card" style={{ height: '100%' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl == null ? "https://st.depositphotos.com/1842549/2403/v/600/depositphotos_24031475-stock-illustration-news-icon.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text ">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn mt-auto btn-primary">Read More</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem