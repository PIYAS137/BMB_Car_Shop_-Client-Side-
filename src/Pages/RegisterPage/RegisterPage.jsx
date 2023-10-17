import { useState } from "react";
import { Link } from "react-router-dom";


const RegisterPage = () => {

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [name,setName]=useState('');
  const [photo,setPhoto]=useState('')
  const [err,setErr]=useState('');


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(email,pass,name,photo);
  }


  return (
    <div className=" h-screen flex flex-col space-y-10 justify-center items-center">
      <h1 className="text-3xl font-bold -mt-52">Register Here</h1>
      <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="name" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="email" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input onChange={e=>setPhoto(e.target.value)} value={photo} type="text" placeholder="photo url" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e=>setPass(e.target.value)} value={pass} type="password" placeholder="password" className="dark:text-black input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="dark:text-black">Already have an account ? Go to <Link className=" text-blue-500 font-bold" to='/login'>LogIn</Link></p>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage