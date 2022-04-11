import React, { useContext, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeContext } from './context/themeContext';
import { UserContext } from './context/userContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { Initialize } = useContext(UserContext);

  useEffect(() => {
    Initialize();
  }, []);

  return (
    <div className={`App ${theme}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
