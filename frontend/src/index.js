import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from './routes/RouterApp';
import { AuthProvider } from './auth/AuthProvider';
import AxiosInterceptor from './api/axiosInterceptor';
import 'bulma/css/bulma.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AxiosInterceptor />
      <RouterApp />
    </AuthProvider>
  </React.StrictMode>
);
