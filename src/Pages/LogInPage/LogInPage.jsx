import { useState } from "react"
import { Link } from "react-router-dom";

const LogInPage = () => {

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [err,setErr]=useState('');


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(email,pass);
  }


  return (
    <div className=" h-screen flex flex-col space-y-10 justify-center items-center">
      <h1 className="text-3xl font-bold -mt-52">Log In Here</h1>
      <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="email" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e=>setPass(e.target.value)} value={pass} type="password" placeholder="password" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
          <button className="btn btn-primary mt-2">LOG in with GOOGLE</button>
        </div>
        <p className="dark:text-black">Dont have an account ? Go to <Link className=" text-blue-500 font-bold" to='/register'>Register</Link></p>
      </form>
    </div>
    </div>
  )
}

export default LogInPage