import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import './SignUp.css'
function SignUp() {
  return (
    <>
    <section>
      <div className='container'>
        <div className='opacity'></div>

        <div className='myform'>
          <div className='first'></div>
          <div className='second'>
            <h2>Keep in touch</h2>
            <p>Sign up now for our TRVL</p>
            <form>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Email address' />
              <input type='submit' vlaue='SIGN UP' />
            </form>
          </div>
        </div>

      </div>
    </section>
      <Footer />
    </>
    
  )
}

export default SignUp;
