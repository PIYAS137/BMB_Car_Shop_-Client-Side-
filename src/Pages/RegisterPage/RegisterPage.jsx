import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { FirebaseAuthContext } from "../../Context/FirebaseContext";

const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
const capitalLetterRegex = /[A-Z]/;

const RegisterPage = () => {
  const { user, UserUpdate, createUser } = useContext(FirebaseAuthContext)
  const location = useLocation()
  console.log(location);
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('')
  const [err, setErr] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault()
    setErr('')

    if (pass.length <= 6) {
      setErr("Your password length should be up to 6 character");
      return
    }
    else if (!specialCharRegex.test(pass)) {
      setErr("Your password have minimum one Special Character")
      return
    } else if (!capitalLetterRegex.test(pass)) {
      setErr("Your password have minimum one Capital Character !")
      return
    }


    createUser(email, pass)
      .then(res => {
        UserUpdate(res.user, name, photo)
          .then(res => {
            console.log(res);
            navigate(`${location?.state ? location.state : '/'}`)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Successfully Register User",
              showConfirmButton: false,
              timer: 2000
            })
            setName('')
            setEmail('')
            setPhoto('')
            setPass('')
          })
          .catch(err)
      }).catch(err => {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000
        })
      })
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
            <input name="name" onChange={e => setName(e.target.value)} value={name} type="text" placeholder="name" className="dark:text-black input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="email" className="dark:text-black input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input onChange={e => setPhoto(e.target.value)} value={photo} type="text" placeholder="photo url" className="dark:text-black input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="password" className="dark:text-black input input-bordered" required />
          </div>
          {err &&
            <div>
              <p className=" text-red-500">{err}</p>
            </div>}
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