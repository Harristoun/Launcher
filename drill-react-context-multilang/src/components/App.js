import React, { useState } from "react";
import MainPage from "./MainPage";
import { LanguageContext, text } from "../context/Language";

function App() {
  const [language, setLanguage] = useState("ru");

  const toggleLanguage = (value) => {
    setLanguage(value);
  };

  const defaultContextValue = {
    current: language,
    text: text[language],
    title: 'Мы добавили что-то там',
    toggleLanguage: toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={defaultContextValue}>
      <MainPage />
    </LanguageContext.Provider>
  );
}

export default App;
