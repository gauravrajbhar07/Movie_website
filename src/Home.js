import React from 'react'
import Movies from './Movies'
// import { AppContext } from './Context'
// import { useGlobalContext } from './Context';
import Search from './Search'

const Home = () => {
    // const name = useContext(AppContext);

    return (
        <>
            <Search />
            <Movies />

        </>

    )
}

export default Home