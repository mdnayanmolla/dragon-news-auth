import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const {singIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log("Location in the login page",location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'))
        
        singIn(email,password)
        .then(result=>{ 
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            console.log(error)
        })
            
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-black text-3xl'>Please Login</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-4 '>Do not have an account? <Link className='text-blue-600 font-bold' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;