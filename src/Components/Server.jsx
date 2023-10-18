import { useState } from "react"

const Server = () => {

    const [since,setSince]=useState('');
    const [brand,setBrand]=useState('');
    const [logo,setLogo]=useState('');
    const [width,setWidth]=useState('');
    const [image1,setImage1]=useState('');
    const [image2,setImage2]=useState('');
    const [image3,setImage3]=useState('');
    const [disco,setDisco]=useState('');
  


    const handleSubmit=(event)=>{
        event.preventDefault()
        const newProduct = {
            since,brand,logo,width,discount:disco,
            images:[image1,image2,image3]
        }
        console.log(newProduct);
        fetch('http://localhost:5020/category',{
          method:"PATCH",
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
            <input onChange={e=>setImage1(e.target.value)} value={image1} type="text" placeholder="Enter 1st image" />
            <input onChange={e=>setImage2(e.target.value)} value={image2} type="text" placeholder="Enter 2nd image" />
            <input onChange={e=>setImage3(e.target.value)} value={image3} type="text" placeholder="Enter 3rd image" />
            <input onChange={e=>setDisco(e.target.value)} value={disco} type="text" placeholder="Enter Discount" />
            <select onChange={e=>setBrand(e.target.value)} value={brand} name="" id="">
                <option value="">select brand</option>
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