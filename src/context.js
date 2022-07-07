// context < API ></ >
// useContext hook

import React, { useContext, useEffect, useState } from "react";


// context(warehouse)                      // easy
// provider   (delivery bou)                        //easy
// consumer  / (useContext()  you/me)           //lengthe process (use)    




const AppContext = React.createContext();

//api key link 
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c01bd7ac`;


//we need to create provoeder funtion 
//speeling of chilren should be correct 

const AppProvider = ({ children }) => {

    //creating useState hook 

    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState([])

    const [isError, setIsError] = useState({ show: "false", msg: "" })

    //using async await
    //fetching API 
    const getMovies = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()  //for reading the data
            console.log(data)

            if (data.Response === "True") {
                setisLoading(false)
                setMovie(data.search)
            } else {
                setIsError(
                    {

                        show: true,
                        msg: data.error,
                    }
                )
            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getMovies(API_URL);
    }, [])


    return <AppContext.Provider value={{ isLoading, isError, movie }}>
        {children}
    </AppContext.Provider>
}


//global custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }