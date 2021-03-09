import React from "react";
import ReactDOM from "react-dom";
// import "./components/mediaStyle.css";
import AppContainer from "./components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://dev.flimcor.com/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
