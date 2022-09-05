import React,{useState}from 'react'

export default function Signup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSignup =(e) =>{
        e.preventDefault()
        const role_id =2

        const data = {name,email,password,role_id}
        fetch('http://localhost:3001/users',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));


    }
return (
    <div className='container'>
            <div className='row mt-4 justify-content-center'>
                <div className='col-md-4'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSignup}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                onChange={(e) => setName(e.target.value)} />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='btn-block'>
                            <center>
                                <button type="submit" className="btn btn-primary btn-block md-12 mt-12">Signup</button>
                            </center>
                        </div>

                    </form>
                </div>
            </div>
        </div>
  )
}