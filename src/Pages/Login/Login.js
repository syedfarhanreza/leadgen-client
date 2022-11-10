import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    useTitle('LeadGen-Login');
    const [error, setError] = useState('');
    const { login, providerLogin,loading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user)

                const currentUser = {
                    email: res.user?.email
                }

                fetch('https://leadgen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                    })

                    navigate(from, { replace: true });
            })
            .catch(e => console.error(e))
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://leadgen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                    })

                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

    }
    if(loading){
        return <div className='justify-center pl-28 justify-items-center w-1/4 mx-auto mt-10 mb-10'>
            <button className="btn loading">loading</button>
        </div>
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
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='text-red-600'>
                            {error}
                        </div>
                    </form>
                    <p className='text-center mb-4'>Don't have an account? <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link></p>
                    <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}><FcGoogle></FcGoogle> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;