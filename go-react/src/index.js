import React from 'react';
import ReactDOM from 'react-dom';

import { GoComponent } from "./gocomponent.tsx";

const title = "Hello world from react";

ReactDOM.render(
    <GoComponent gotitle={"Go Component"} />,
    document.getElementById('go-react-target')
);
