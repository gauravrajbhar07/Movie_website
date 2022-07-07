import React from 'react'
import { useGlobalContext } from './Context'

const Movies = () => {

    const { movie } = useGlobalContext();

    return (
        <>
            {movie.map((curMovies) => {
                return (

                    <>
                        <div>
                            <h2>{curMovies.Title}</h2>
                        </div>
                    </>
                )
            })}
        </>

    )
}

export default Movies