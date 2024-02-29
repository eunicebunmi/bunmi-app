import { useState , createContext } from 'react';
// creating theme context
const PageTheme = createContext({
    theme: "light",
    toggleTheme: ()=>{},
})
// provider functions
const ThemeContext = ({children})=> {
    const [theme, setTheme] = useState("light")
    const toggleTheme = ()=>{
        setTheme(prevTheme => ( prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <PageTheme.Provider value = {{theme, toggleTheme}}>
            {children}
        </PageTheme.Provider>
    )
}

export {PageTheme, ThemeContext}