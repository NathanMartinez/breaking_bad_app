import { Container, Card } from 'react-bootstrap'
import NavTabs from './components/NavTabs'
import CardArea from './components/CardArea'
import SearchForm from './components/SearchForm'
import FormContextProvider from './providers/FormContextProvider'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="App">
        <FormContextProvider>
          <Card>
            <NavTabs />
            <SearchForm />
          </Card>
            <CardArea />
        </FormContextProvider>
      </Container>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
