import React, { createContext, useContext } from "react";

const UserContext=createContext()

function UseContext(){
    var a="hello"
    var b="good morning"
    return(
        <UserContext.Provider value={{a,b}}>
            <div>
                <h1>{a} FirstComponent</h1>
                <UseContext2 />
            </div>
        </UserContext.Provider>
    )
}

function UseContext2(){
    var values=useContext(UserContext)
    return(
        <div>
            <h1>{values.a} Second Component {values.b}</h1>
            <UseContext3 />
        </div>
    )
}

function UseContext3(){
    var values=useContext(UserContext);
    return(
        <div>
            <h1>{values.a} Third Component</h1>
        </div>
    )
}

export default UseContext;