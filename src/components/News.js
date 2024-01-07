import React, { useState, useEffect } from 'react'
import Item from './Item'
import Sample from './Sample.jpg'

export default function News(props) {

    const [news, setNews] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9f76ddd1d1184159a477f94fa35493bd&page=${page}&pageSize=12`)
            .then((response) => response.json())
            .then((jsonData) => {
                setNews(jsonData)
            })
    }, [props.category, page])

    let totalResults = news.totalResults;
    // console.log(totalResults);

    const prevChanger = () => {
        if (page > 1) { setPage(page - 1); }
    }

    const nextChanger = () => {
        setPage(page + 1);
    }

    if (page > Math.ceil(totalResults / 12)) {
        setPage(1);
    }


    return (
        <div className="container my-4" style={{ width: "80%", backgroundColor: "white", borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
            <h1 className="text-center my-4" style={{ fontWeight: "300" }}>Top Headlines-{(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}</h1>
            <div className="row">
                {news.articles !== undefined ? news.articles.map((element) => {
                    return <div className="col-lg-4" key={element.url}>
                        <Item title={element.title} description={element.description} img={element.urlToImage === null ? Sample : element.urlToImage} url={element.url} publishedat={element.publishedAt} />
                    </div>
                }) : ""}
            </div>
            <div className="container">
                <button className='btn btn-danger my-2' disabled={page === 1} onClick={prevChanger} >&larr;Prev</button>
                <button className='btn btn-danger my-2' disabled={Math.ceil(totalResults / 12) === page} onClick={nextChanger} style={{ float: "right" }}>Next&rarr;</button>
            </div>
        </div >
    )
}