export var initialState={
    "username":"",
    "password":""
}

// action={
//     "type":"",
//     "username":"",
//     "password":""
// }

export function ValuesReducer(state,action){

    if(action["type"] === "values"){
        initialState={...initialState,username:action["username"],password:action["password"]}
        return initialState;
    }
    else{
        return initialState
    }
}