import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Context
import FormContextProvider from './providers/FormContextProvider'

// React Query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

require('dotenv').config();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <FormContextProvider>
      <App />
      </FormContextProvider>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>,
  document.getElementById('root')
);
