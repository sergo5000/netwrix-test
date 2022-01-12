import '../styles/app.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
    
const typeEl = document.getElementById('type');
const type = typeEl.value;
typeEl.remove();

const allStatusesEl = document.getElementById('all-statuses');
const allStatuses = JSON.parse(allStatusesEl.value);
allStatusesEl.remove();

const partnerLocatorsEl = document.getElementById('partner-locators');
const partnerLocators = JSON.parse(partnerLocatorsEl.value);
partnerLocatorsEl.remove();

ReactDOM.render(<Main type={type} allStatuses={allStatuses} partnerLocators={partnerLocators}/>, document.getElementById('root'));