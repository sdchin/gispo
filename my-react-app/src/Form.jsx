import './assets/my-styles.css'

export default function Form({ handleSubmit }) {
  const action = 'https://summer-dew-970e.chin-steven10.workers.dev/';
  
  return (
    <form action={action} onSubmit={handleSubmit}>
      <label htmlFor="q1">Search query 1</label>
      <input type="text" id="q1" name="q1" />
      <input type="submit" value="Search" />
    </form>
  )
}