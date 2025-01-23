import { useState } from 'react'
import './assets/my-styles.css'

export default function Image({ srcUrl={reactLogo} }) {
  return (
    <img src={srcUrl} />
  );
}