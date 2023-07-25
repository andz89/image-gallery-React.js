import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import swDev from  './swDev'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
        
      }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
       <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} /> Add this line */}
    </QueryClientProvider>
  </React.StrictMode>
);
// swDev();

 
