import { useState } from "react"

const Server = () => {

    const [since,setSince]=useState('');
    const [brand,setBrand]=useState('');
    const [logo,setLogo]=useState('');
    const [width,setWidth]=useState('');


    const handleSubmit=(event)=>{
        event.preventDefault()
        const newProduct = {
            since,brand,logo,width
        }
        fetch('http://localhost:5020/category',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newProduct)
        }).then(res=>res.json())
        .then(res=>{
          console.log(res);
        }).catch(err=>console.log(err))
    }



  return (
    <form onSubmit={handleSubmit} className="bg-red-400 flex flex-col space-y-3 p-2">

            <input onChange={e=>setSince(e.target.value)} value={since} type="text" placeholder="Enter your since" />
            <input onChange={e=>setLogo(e.target.value)} value={logo} type="text" placeholder="Enter logo url" />
            <input onChange={e=>setWidth(e.target.value)} value={width} type="text" placeholder="Enter width" />
            <select onChange={e=>setBrand(e.target.value)} value={brand} name="" id="">
                <option value="Ford">Ford</option>
                <option value="Toyota">Toyota</option>
                <option value="Rolls Royce">Rolls Royce</option>
                <option value="Nisaan">Nisaan</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="BMW">BMW</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="Jaguar Motors">Jaguar Motors</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Jeep">Jeep</option>
                <option value="Chevrolt">Chevrolt</option>
                <option value="Mercedes">Mercedes</option>
            </select>
            <button className="btn" type="submit">submit</button>
    </form>
  )
}

export default Server