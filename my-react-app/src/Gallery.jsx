import Image from './Image.jsx'
import './assets/my-styles.css'

export default function Gallery( { srcList, gallerySize } ) {
  const truncatedSrcs = srcList.slice(0, gallerySize);
  const listImages = truncatedSrcs.map(src =>
    <Image srcUrl={src} />
  );

  return (
    <div className="gallery">
      {listImages}
    </div>
  );
}