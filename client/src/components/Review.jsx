import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Review = (props) => {
  let navigate = useNavigate()

  const [reviewValues, setReviewValues] = useState({
    name: '',
    email: '',
    review: ''
  })

  const handleChange = (e) => {
    setReviewValues({ ...reviewValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    let res = axios.post('httpl://localhost:3001/api/review', reviewValues)
    navigate('/thanks')
  }

  // const newReview = props.newReview

  return (
    <div>
      <h1>Please leave us a review and let us know if you'd come back!</h1>
      <h4>Please fill the boxes below.</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={reviewValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={reviewValues.email}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="rating"
          placeholder={reviewValues.review}
          // value={reviewValues.review}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Review
