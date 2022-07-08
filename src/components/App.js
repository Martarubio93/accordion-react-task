import '../styles/core/Reset.scss'
import { useState, useEffect } from 'react';
import callToApi from '../services/api';
import Header from './Header'
import Main from './Main';
import Footer from './Footer'



function App() {
const [dataFromApi, setDataFromApi] = useState([])

useEffect(() => {
  callToApi().then((response)=>{
    setDataFromApi(response)
  })
}, [])


  return (
    <div className="App">
      <Header/>
      <Main dataFromApi={dataFromApi}/>
      <Footer/>
    </div>
  );
}

export default App;
