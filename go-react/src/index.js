import React from 'react';
import ReactDOM from 'react-dom';

// import { GoComponent } from "./gocomponent.tsx";
import { SiegeComponent } from "./siegecomponent.tsx";

const title = "Hello world from react";

ReactDOM.render(
    <SiegeComponent />,
    document.getElementById('go-react-target')
);
