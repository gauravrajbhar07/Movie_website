import React, { useContext } from 'react'
// import { AppContext } from './Context'
import { useGlobalContext } from './Context';

const Home = () => {
    // const name = useContext(AppContext);
    const name = useGlobalContext()
    return (
        <>
            <div>my home page </div>
            <p>{name}</p>
        </>

    )
}

export default Home