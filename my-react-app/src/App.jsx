import { useState } from 'react'
import { useEffect } from 'react';
import './assets/App.css'
import './assets/my-styles.css'
import Image from './Image.jsx'
import Gallery from './Gallery.jsx'
import Form from './Form.jsx'
import reactLogo from './assets/react.svg'
import Options from './Options.jsx'

function App() {
  const [sources, setSources] = useState([reactLogo, reactLogo, reactLogo]);
  const [gallerySize, setGallerySize] = useState(3);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const urlSearchParams = new URLSearchParams(formData);
    urlSearchParams.append('gallery_size', gallerySize);
    const queryString = urlSearchParams.toString();
    const url = `${e.target.action}?${queryString}`;
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.srcList;
    setSources(dataArray);
  };

  function handleSizeChange(e) {
    setGallerySize(parseInt(e.target.value));
    
  };

  return (
    <>
      <Gallery srcList={sources} gallerySize={gallerySize} />
      
      <Form handleSubmit={handleSubmit} />

      <Options handleSizeChange={handleSizeChange} />
    </>
  )
}

export default App
