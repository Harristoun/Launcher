import React, { useContext } from 'react'
import { LanguageContext, text } from '../context/Language'



function Buttons () {
  const context = useContext(LanguageContext)
  console.log(context);

  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-primary w-100" onClick={()=>{
          context.toggleLanguage('che')

        }}>
          {context.text.setToChechen}
        </button>
      </div>
      <div className="col">
        <button className="btn btn-primary w-100" onClick={()=>{
          context.toggleLanguage('ru')

        }}> 
          {context.text.setToRussian}
        </button>
      </div>
      <div className="col">
        <button className="btn btn-primary w-100" onClick={()=>{
          context.toggleLanguage('eng')

        }}>
        {context.text.setToEnglish}
        </button>
      </div>
    </div>
  )
}

export default Buttons
