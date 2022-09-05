import React, { useEffect,useState } from 'react'
import{useNavigate} from 'react-router'

export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[users,setUser] = useState();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        fetch(' http://localhost:3000/users')
        .then((Response) => Response.json())
        .then((json) =>{
            const veryfy = json.filter((item) => {
                if(item.email == email){
                    return email
                }
            })
            if(veryfy[0].password == password){
                if(veryfy[0].role_id == 2){
                    console.log('normal users..')
                    localStorage.setItem('user',JSON.stringify(veryfy))
                    navigate('/Home1')
                }
                    else{
                        console.log('Admin users..')
                        navigate('/Home1')
                    }
                } else{
                          console.log('password is invalid')
                }
            });
        
    }
  return (
    <div className='container'>
    <div className='row mt-4 justify-content-center'>
        <div className='col-md-4'>
            <h1>LOGIN </h1>
            <form onSubmit={handleLogin}>


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
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </center>
                </div>

            </form>
        </div>
    </div>
</div>
  )
}
