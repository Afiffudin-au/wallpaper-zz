import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
it("render without crashing",()=>{
  const div = document.createElement('div')
  ReactDom.render(<Provider store={store}><App/></Provider>,div)
})