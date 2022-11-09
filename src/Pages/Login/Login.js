import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle} from 'react-icons/fc';


const Login = () => {
    const [error, setError] = useState('');
    const {login,providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/')
        })  
        .catch(error => {
            console.error(error)
            setError(error.message);
        });

    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center">
                    <img className='w-3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='text-red-600'>
                            {error}
                        </div>
                    </form>
                    <p className='text-center mb-4'>Don't have an account? <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link></p>
                    <button className="btn btn-outline btn-primary"  onClick={handleGoogleLogin}><FcGoogle></FcGoogle> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;