import React, { createContext, useState } from 'react';

type TThemeContext = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [dark,setDark] = useState(false);
    const values = {
        dark,
        setDark
    };
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;