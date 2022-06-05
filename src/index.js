import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='w-screen bg-gray-100 dark:bg-zinc-700'>
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);