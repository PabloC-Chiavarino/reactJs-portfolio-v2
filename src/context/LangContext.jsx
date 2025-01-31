import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    
    const [lang, setLang] = useState("es");

    const handleLangChange = () => {
        setLang(prevLang => (prevLang === "es" ? "en" : "es"));
    };

    return (
        <LangContext.Provider value={{ lang, handleLangChange }}>
            {children}
        </LangContext.Provider>
    );
};