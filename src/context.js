// context < API ></ >
// useContext hook

import React, { useContext } from "react";


// context(warehouse)                      // easy
// provider   (delivery bou)                        //easy
// consumer  / (useContext()  you/me)           //lengthe process (use)    



const AppContext = React.createContext();

//we need to create provoeder funtion 

const AppProvider = ({ childer }) => {
    return <AppContext.Provider value="gaurav">
        {childer}
    </AppContext.Provider>
}


//global custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }