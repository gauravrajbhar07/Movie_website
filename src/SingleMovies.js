import React from 'react'
import { useParams } from "react-router-dom"

const SingleMovies = () => {
    //useParams hook
    const { id } = useParams();
    return (
        <>
            <div>
                our single movies {id}
            </div>
        </>
    )
}

export default SingleMovies