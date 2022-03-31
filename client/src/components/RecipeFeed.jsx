import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const RecipeFeed = () => {
const [reviews, setReviews] = useState([])

    useEffect(() => {

        const getReviews = async () => {
            
            let res = await axios.get('http://localhost:3001/reviews')
            console.log(res.data)
            setReviews(res.data)
        }

        getReviews()
    }, [])

    return (
     <header>
        <div className='feedback'>
            <ul className='ReviewGrid'>
                {reviews.map((review, index) =>{
                    return(
                        <li key={index}>
                            <h2>{review.users}</h2>
                            <h3>{review.fermentType}</h3>
                            <p>{review.review}</p>
                            <h5>{review.ferment_id}</h5>
                        </li>
                    )
                })}
            </ul>
        </div>
     </header>
    )
}


export default RecipeFeed