"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>('');
  
export const ThemeContextProvider = ({ children }: any) => {
    
    const [item, setItem] = useState<any>('light');

    useEffect(() => { 
        setItem(localStorage.getItem('theme'))
      }, [item])

    const getFromLocalStorage = () => { 
        if(typeof window !== undefined || window.localStorage.getItem('theme')){
            // const value = localStorage.getItem("theme");
            return item || 'light';
            
        }
        return 'light';
    }
 
  const [theme, setTheme] = useState(() => getFromLocalStorage() ); 
  
    return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}
 