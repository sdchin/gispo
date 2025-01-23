import { useState } from 'react'
import { useEffect } from 'react';
import './assets/App.css'
import './assets/my-styles.css'
import Image from './Image.jsx'
import Gallery from './Gallery.jsx'
import Form from './Form.jsx'

function App() {
  const [sources, setSources] = useState([]);
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

  return (
    <>
      <Gallery srcList={sources} size={gallerySize} />
      
      <Form handleSubmit={handleSubmit} />
    </>
  )
}

export default App
