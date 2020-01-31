import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyles from './styles/global'
import Header from './components/Header'

const App: React.FC = () => {
  const [ currentTheme, setCurrentTheme ] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setCurrentTheme(
      currentTheme.title === 'light' ? dark : light
    )
  }

  return (
    <ThemeProvider theme={currentTheme}>
        <div className="App">
          <GlobalStyles />
          <Header toggleTheme={toggleTheme}/>
        </div>
    </ThemeProvider>
  );
}

export default App;
