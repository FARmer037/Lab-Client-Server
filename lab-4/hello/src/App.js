import React from 'react'
import Header from './components/Haeder'
import Body from './components/Body';
import News from './components/News';

const App = () => {
  return (
    <div className='body'>
      <Header />
      <Body />
      <News />
    </div>
  )
}


export default App;
