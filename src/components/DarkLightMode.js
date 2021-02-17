import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

// The function that toggles between themes
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
