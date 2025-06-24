

export default function Options({ handleSizeChange }) {

  return (
    <>
      <label htmlFor="gallery-size">Display picture count</label>
      <select id="gallery-size" onChange={handleSizeChange} defaultValue="3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
}