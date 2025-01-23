import Image from './Image.jsx'
import './assets/my-styles.css'

export default function Gallery( { srcList } ) {
  return (
    <div className="gallery">
      <Image srcUrl={srcList[0]} />
    </div>
  );
}