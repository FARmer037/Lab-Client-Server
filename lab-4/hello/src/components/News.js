import React, { useState } from 'react'
import '../App.css'

const News = () => {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        fetch('https://hn.algolia.com/api/v1/search?query=japan')
            .then(res => res.json())
            .then(data => setNews(data.hits))
            .catch(error => console.log(error))
    }

    const handleSubmit = e => {
        fetchNews()
    }

    return (
        <div>
            <button className='btn' onClick={handleSubmit}>ข่าวสารญี่ปุ่น</button>
            {news.map((n, i) => (<h3 key={i} className='list'>{n.title}</h3>))}
        </div>
    )
}

export default News