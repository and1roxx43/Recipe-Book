import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export default function Client(){
    const client = new ApolloClient({
        uri: "http://locahost:8001/graphql",
        cache: InMemoryCache()
    });

}  


