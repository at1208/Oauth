import React from 'react';
import './app.css';
import Slide from 'react-reveal/Slide';
 

const App = () => {
  return <>

    <Slide bottom>
  <div className='container text-center a1'>

  <h1 className='b1'>Hello Aliens, Welcome to Oauth flow</h1>


    <Slide bottom>
  <div className='a5'>
   <a href='http://localhost:5000/auth/google'><button className='btn btn-lg  a3'>Sign in with  <i className="fa fa-google a2" aria-hidden="true"></i></button></a>
</div>
   </Slide>


    <Slide bottom>
  <div className='a5'>
   <button className='btn btn-lg  a3'>Sign in with  <i className="fa fa-facebook a4" aria-hidden="true"></i></button>
</div>
   </Slide>

      <Slide bottom>
<div className='a5'>
 <button className='btn btn-lg  a3'>Sign in with  <i className="fa fa-github a6" aria-hidden="true"></i></button>
</div>
   </Slide>

      <Slide bottom>
<div className='a5'>
 <button className='btn btn-lg  a3'>Sign in with  <i className="fa fa-linkedin a7" aria-hidden="true"></i></button>
</div>
   </Slide>

      <Slide bottom>
<div className='a5'>
 <button className='btn btn-lg  a3'>Sign in with  <i className="fa fa-instagram a8" aria-hidden="true"></i></button>
</div>
   </Slide>

  </div>
   </Slide>
  </>
}
export default App;
