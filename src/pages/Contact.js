import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const Contact = () => {
  const data = useActionData()

  return (
    <div>
      <h2>Contact page</h2>
      <Form method='post' action='/contact'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" name='message' id="message" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
        <p>{data && data.error && data.error }</p>
      </Form>
    </div>
  )
}

export default Contact

export const contactAction = async ({ request }) => {
  console.log('request: ', request);
  const data = await request.formData() 
  const submission = {
    name: data.get('name'),
    message: data.get('message'),
  }
  console.log('submission: ', submission);

  if(submission.message.length < 10){
    return {error: 'message is too short'}
  }

  return redirect('/')
}
