// React Bootstrap
import { Button } from 'react-bootstrap'

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import NavigationBar from './components/navigation/NavigationBar'
import Characters from './components/characters/Characters'
import Episodes from './components/episodes/Episodes'
import Quotes from './components/quotes/Quotes'
import Deaths from './components/deaths/Deaths'

// Styled Components
import styled from 'styled-components'

export default function App() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Router>
      <NavigationBar />
        <AppSection>
          <Switch>
            <Route path='/' exact>
              <Characters />
            </Route>
            <Route path='/episodes'>
              <Episodes />
            </Route>
            <Route path='/quotes'>
              <Quotes />
            </Route>
            <Route path='/deaths'>
              <Deaths />
            </Route>
          </Switch>
        </AppSection>
      <BackToTop onClick={ scrollToTop }>Back to top</BackToTop>
    </Router>
  );
}

const BackToTop = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
  opacity: 0.9;
`
const AppSection = styled.section`
  margin-top: 3rem;
`
