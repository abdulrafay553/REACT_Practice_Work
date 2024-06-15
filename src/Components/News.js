import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

export default function News() {

    const [count, setCount] = useState(0)
    const [allNews, setAllNews] = useState([])


    function addCount() {
        setCount(count + 1)
        getNews()
    }

    function getNews() {
        // var api_key = "5b48f8b3deb64c7abfc02ebececac867"
        var api_url = "https://fakestoreapi.com/products"
        // var api_url = "http://localhost:8000/api/showprd"


        axios.get(api_url)
            .then((res) => {
                console.log(res.data)
                setAllNews(res.data)

            }).catch((err) => {
                console.error("Error fetching news:", err)
            })
    }



    useEffect(() => {
        getNews()
    })

    return (
        <div>
            <h1 style={{ "font-family": "Brush Script MT", }} >NEWS PORTAL</h1>
            <hr />
            <button type="button" className="btn btn-primary" onClick={addCount}>
                Click to Load News
            </button>
            <br /><br />
            <h4>News Count: {count}</h4>
            <br />
            <div className='container px-4 px-lg-5 mt-5'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    {allNews.map((content) => (
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={content.image} alt="..." style={{ height: "15rem" }} />
                                <div className="card-body p-4">
                                    <div className="text-center hmm">
                                        <h5 className="fw-bolder">{content.title}</h5>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <Button variant="contained">Show More</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}
