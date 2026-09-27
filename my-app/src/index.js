import '@skyscanner/backpack-web/bpk-stylesheets/base';
import '@skyscanner/backpack-web/bpk-stylesheets/base.css';
import '@skyscanner/backpack-web/bpk-stylesheets/font';
import '@skyscanner/backpack-web/bpk-stylesheets/font.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);