import React from 'react';

import ReactDOM from 'react-dom';

import Loader from '../Loader';



it("renders without crashing",()=>{

    const div = document.createElement("div");

    ReactDOM.render(<Loader></Loader>,div)

})



//import React from 'react';

//import ReactDOM from 'react-dom';

//import Adminscreen from '../../screens/Adminscreen';



//it("renders without crashing",()=>{

    //const div = document.createElement("div");

    //ReactDOM.render(<Adminscreen></Adminscreen>,div)

//})