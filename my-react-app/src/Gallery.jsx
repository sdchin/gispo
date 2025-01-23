import Image from './Image.jsx'
import './assets/my-styles.css'

export default function Gallery( { srcList, GALLERY_SIZE } ) {
  const truncatedSrcs = srcList.slice(0, GALLERY_SIZE);
  const listImages = truncatedSrcs.map(src =>
    <Image srcUrl={src} />
  );

  return (
    <div className="gallery">
      {listImages}
    </div>
  );
}