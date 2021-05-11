import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Context
import ThemeContextProvider from './providers/ThemeProvider'

// React Query
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={ queryClient }>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
