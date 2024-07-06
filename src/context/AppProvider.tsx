import React, { createContext } from 'react';

const AppContext = createContext<any>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContext.Provider
            value={{
                data: 'data',
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
