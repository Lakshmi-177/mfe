import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//console.log("Marketing");

//Mount function to start up the app
const mount =(el) =>{
    ReactDOM.render(<App />, el)
};

//If we are in dev and in isolation call mount immediatly
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");

    if(devRoot){
        mount(devRoot);
    }
}

//otherwise export mount function
export {mount};