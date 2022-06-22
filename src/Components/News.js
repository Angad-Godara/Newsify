import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "New York passes a bill to limit bitcoin mining",
            "description": "New York lawmakers have passed a bill\r\n that would temporarily ban new bitcoin\r\n mining operations. Early on Friday, state senators voted 36-27 to pass the legislation. It's now bound for the desk of Governor Kathy Hochul, who will sign it into law or veto th…",
            "url": "https://www.engadget.com/new-york-cryptocurrency-bill-bitcoin-mining-climate-change-161126292.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/a8217250-bdfa-11eb-bfc4-2663225cea83",
            "publishedAt": "2022-06-03T16:11:26Z",
            "content": "New York lawmakers have passed a bill\r\n that would temporarily ban new bitcoin\r\n mining operations. Early on Friday, state senators voted 36-27 to pass the legislation. It's now bound for the desk of… [+2036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Jay-Z and Jack Dorsey Launch Bitcoin Academy for New Generation of Crypto Bros",
            "description": "Rapper and entrepreneur Shawn Carter, better known as Jay-Z, is bringing Bitcoin to the place where he grew up. On Thursday, Jay-Z and former Twitter CEO Jack Dorsey announced the launch of Bitcoin Academy, which will offer free classes on cryptocurrency for …",
            "url": "https://gizmodo.com/jay-z-jack-dorsey-bitcoin-academy-1849040407",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/48fbb5e09973afbe730474c5cb0aadd4.jpg",
            "publishedAt": "2022-06-09T19:45:00Z",
            "content": "Rapper and entrepreneur Shawn Carter, better known as Jay-Z, is bringing Bitcoin to the place where he grew up. On Thursday, Jay-Z and former Twitter CEO Jack Dorsey announced the launch of Bitcoin A… [+2920 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Bitcoin Wasn't as Decentralized or Anonymous as Crypto Bros Told You, Study Finds",
            "description": "A new study on bitcoin calls into question whether the digital currency is truly as decentralized and anonymous as its biggest devotees would have you believe. Read more...",
            "url": "https://gizmodo.com/bitcoin-cryptocurrency-centralized-not-anonymous-study-1849029656",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d3390dc22b7788490c85b7ec69134874.jpg",
            "publishedAt": "2022-06-08T11:00:00Z",
            "content": "A new study on bitcoin calls into question whether the digital currency is truly as decentralized and anonymous as its biggest devotees would have you believe. \r\n Researchers from Baylor, Rice, and t… [+7343 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Why the Central African Republic adopted Bitcoin",
            "description": "Some 90% of people in the Central African Republic lack access to the internet, needed to use Bitcoin.",
            "url": "https://www.bbc.co.uk/news/world-africa-61565485",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/394F/production/_125017641_gettyimages-1320532557.jpg",
            "publishedAt": "2022-06-05T23:03:49Z",
            "content": "Image caption, President Faustin-Archange Touadéra wants to rethink his country's economic philosophy\r\nThe Central African Republic's decision to adopt Bitcoin as legal tender came as a surprise to m… [+8881 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Chipotle now accepts cryptocurrency payments",
            "description": "You can now reportedly pay for your burritos and tacos with Bitcoin and other digital currencies, in case you don't mind spending your coins directly instead of going through exchanges first. Flexa has announced that the Mexican fast food chain can now accept…",
            "url": "https://www.engadget.com/chipotle-accepts-cryptocurrency-payments-123013632.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2019-11/62e01e20-0493-11ea-bffd-0d62f5b23b7c",
            "publishedAt": "2022-06-02T12:30:13Z",
            "content": "You can now reportedly pay for your burritos and tacos with Bitcoin and other digital currencies, in case you don't mind spending your coins directly instead of going through exchanges first. Flexa h… [+1428 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "El Salvador: The country where you can buy anything with Bitcoin",
            "description": "The cryptocurrency crash is hurting many investors, including one country that has bet big on Bitcoin.",
            "url": "https://www.bbc.co.uk/news/technology-61813845",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EB8F/production/_125430306_977646d4-a885-485f-b124-4aceaa1a4b98.jpg",
            "publishedAt": "2022-06-16T01:15:20Z",
            "content": "By Joe TidyCyber reporter \r\nCryptocurrencies have continued to tumble this week with billions wiped from the value of tokens like Bitcoin. The crash is affecting investors worldwide, including the go… [+6815 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Philip Wang and Tara Subramaniam, CNN",
            "title": "El Salvador's Bitcoin investment suffers amid crypto meltdown",
            "description": "El Salvador has embraced Bitcoin like no other country, with the government purchasing hundreds of coins last year as it announced that the cryptocurrency would become legal tender.",
            "url": "https://www.cnn.com/2022/06/14/americas/el-salvador-bitcoin-losses-intl-latam/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220522194357-salvadorenos-bitcoin-confianza-devaluacion-merlin-delcid-mirador-mundial-cnn-pkg-00022610-super-tease.png",
            "publishedAt": "2022-06-15T00:38:11Z",
            "content": "(CNN)El Salvador has embraced Bitcoin like no other country, with the government purchasing hundreds of coins last year as it announced that the cryptocurrency would become legal tender. \r\nBut as the… [+842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Chipotle Lovers Can Now Buy Burritos With Bitcoin, Ether, and More: Report",
            "description": "Customers at Chipotle will now be able to pay for their burritos with cryptocurrencies, including bitcoin, ether, and dogecoin, in a move that could help crypto become more mainstream, according to trade publication Restaurant Business. But there’s just one i…",
            "url": "https://gizmodo.com/chipotle-bitcoin-ethereum-dogecoin-crypto-burritos-paym-1849006239",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a06df2b7927727af38b388d72e721dce.jpg",
            "publishedAt": "2022-06-02T10:00:00Z",
            "content": "Customers at Chipotle will now be able to pay for their burritos with cryptocurrencies, including bitcoin, ether, and dogecoin, in a move that could help crypto become more mainstream, according to t… [+3130 chars]"
        }]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalSize: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c7be2530430c47dca2cd89d8d4ee073b&page=${this.state.page}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalSize: parsedData.totalResults
        });
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c7be2530430c47dca2cd89d8d4ee073b&page=${this.state.page + 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c7be2530430c47dca2cd89d8d4ee073b&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }
    render() {
        return (
            <div className='container my-3' style={{ textAlign: 'center' }}>
                <h2>Newsify - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map(ele =>
                        <div className='col-md-4' key={ele.url}>
                            <NewsItem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 90) : ""} imageUrl={ele.urlToImage} url={ele.url} />
                        </div>
                    )}
                </div>
                <div className='container mt-4 d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&laquo; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalSize / 18)} onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
                </div>
            </div>
        )
    }
}

// ceil of 3.6 and 3.3 is 4 
