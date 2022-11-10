import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('LeadGen-SignUp');
    const {createUser,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
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
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;