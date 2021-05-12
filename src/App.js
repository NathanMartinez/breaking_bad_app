// React Bootstrap
import { Button, Card } from 'react-bootstrap'

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

// Context
import { useThemeContext } from './context/ThemeContext'

export default function App() {
  const { useTheme } = useThemeContext()
  const { bg, text } = useTheme()

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <AppSection bg={ bg } text={ text }>
      <Router>
        <NavigationBar />
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
        <BackToTop onClick={ scrollToTop }>Back to top</BackToTop>
      </Router>
    </AppSection>
  );
}

const BackToTop = styled(Button)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
  opacity: 0.9;
`
const AppSection = styled(Card)`
  margin-top: 3rem;
  background: red;
`
