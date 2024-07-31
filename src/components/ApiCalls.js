import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiCalls(){

    const [apiData,setApiData]=useState();

    // useEffect(()=>{
    //     getData()
    // },[])

    async function getData(){
      try{
        var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data);
        setApiData(response.data)
      }
      catch(e){
        console.log(e);
      }
    }

    async function postData(){
        const postData={
                "name":"besant",
                "age":100,
                "title": "created new entry successfully",
                "body": "hsjbsjb",
        }
        try{
        var response=await axios.post("https://jsonplaceholder.typicode.com/posts",postData)
        console.log(response);
        setApiData(response.data)
        }
        catch(e){
            console.log(e);
        }
    }

    async function putData(){
        const putData={
            "userId": 1000,
            "id": 1,
            "title": "updated successfully",
            "body": "jsddlsndkkfkjfkfkjdfkjfd"
        }
        try{
        var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1",putData)
        console.log(response);
        setApiData(response.data)
        }
        catch(e){
            console.log(e);
        }
    }

    async function deleteData(){
        try{
        var response=await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response);
        setApiData(response.data)
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <h1>Api Calls</h1>
            <button onClick={()=>{getData()}}>getData</button>
            <button onClick={()=>{postData()}}>postData</button>
            <button onClick={()=>{putData()}}>putData</button>
            <button onClick={()=>{deleteData()}}>deleteData</button>
            {apiData && <div>{apiData.title} id {apiData.id}</div>}
        </div>
    )
}

export default ApiCalls