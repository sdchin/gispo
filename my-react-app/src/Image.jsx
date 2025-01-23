import { useState } from 'react'
import './assets/my-styles.css'
import reactLogo from './assets/react.svg'

export default function Image({ srcUrl }) {
  return (
    <img src={srcUrl} />
  );
}