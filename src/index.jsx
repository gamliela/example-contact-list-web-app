import React from 'react';
import ReactDOM from 'react-dom';
import {useStrict} from 'mobx';
import 'react-toolbox/lib/commons.scss';
import 'material-design-icons/iconfont/material-icons.css';
import ContactsApp from "./ContactsApp";
import AppManager from "./AppManager";

// mobx configuration
useStrict(true);

// our global application state
const appManager = new AppManager();

ReactDOM.render(
    <ContactsApp appManager={appManager}/>,
    document.getElementById('app-root')
);
