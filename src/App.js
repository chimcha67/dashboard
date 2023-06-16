import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/homepage/presentation/HomePage";
import {Helmet} from 'react-helmet';

const App = () => {
  return (<div  className="body">
    {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
    </div>
  );
};

export default App;
