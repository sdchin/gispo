import './assets/my-styles.css'

export default function Form({ handleSubmit }) {
  const action = 'gispo-api.sdchin.workers.dev';
  
  return (
    <form action={action} onSubmit={handleSubmit}>
      <label htmlFor="q1">Search query 1</label>
      <input type="text" id="q1" name="q1" />
      <input type="text" id="q2" name="q2" />
      <input type="submit" value="Search" />
    </form>
  )
}