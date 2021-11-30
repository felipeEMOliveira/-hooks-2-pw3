import React, { useState } from 'react';

const initialContext = {
  contextName: 'user',
  contextPasswd: 123456,
};

export const AppContext = React.createContext(initialContext);

function Store(props) {
  const [context, setContext] = useState(initialContext);

  const { children } = props;
  const { contextName, contextPasswd } = context;

  function updateContext(key, value) {
    setContext({
      ...context,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider value={{
      contextName,
      contextPasswd,
      setContextName: (newName) => updateContext('contextName', newName),
      setContextPasswd: (newPasswd) => updateContext('contextPasswd', newPasswd),
    }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Store;
