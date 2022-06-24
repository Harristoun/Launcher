import { createContext } from 'react';

export const text = {
  ru: {
    welcome: 'Добро пожаловать!',
    title: 'Главная страница',
    appDescription: 'Приложение с возможностью смены языка интерфейса',
    setToRussian: 'Сменить на русский',
    setToChechen: 'Сменить на чеченский',
    setToEnglish: 'Сменить на английский'
  },
  che: {
    welcome: 'Марша вогIийла!',
    title: 'Коьрта агIо',
    appDescription: 'Мотт хийца йиш йолуш йолу приложени',
    setToRussian: 'Оьрсийн моттахь',
    setToChechen: 'Нохчийн маттахь',
    setToEnglish: 'Aнглийский мотт'
  },
  eng: {
    welcome: 'Welcome to the club boddy!',
    title: 'Main page',
    appDescription: 'Application with the ability to change the interface language',
    setToRussian: 'Change to Russian',
    setToChechen: 'Change to Chechen',
    setToEnglish: 'Сhange to English'
  }
}

export const LanguageContext = createContext({
  title: 'что-то там',
  current: 'ru',
  text: text.ru,
  toggleLanguage: () => {}
})
