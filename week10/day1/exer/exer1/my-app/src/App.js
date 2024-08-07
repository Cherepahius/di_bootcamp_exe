import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* Other components here */}
      </div>
    </ThemeProvider>
  );
}

export default App;