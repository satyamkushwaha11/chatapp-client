import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { normalLoginAction } from '../../redux/action/login.action'
import { setLocalStorage } from '../../lib/session'
import ifToken from '../../helper/token'

const initUserData = {
    email: '',
    password: '',
}
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState(initUserData)

    const submitUserData = () => {
        console.log('submitUserData')
        dispatch(normalLoginAction(userData)).then((result) => {
            console.log(result)
            setLocalStorage('token', result?.data?.token)
            setLocalStorage('name', result?.data?.data?.name)
            setLocalStorage('email', result?.data?.data?.email)
            setLocalStorage('profilePic', result?.data?.data?.profilePic)
            navigate('/')
        }).catch((err) => {
            console.log(err)
        });
    }

    const changeUserData = (key, value) => {
        setUserData({ ...userData, [key]: value })
    }

    useEffect(() => {
        if (ifToken()) {
            navigate('/')
        }
    })

    return (
        <div className=' login_page w-100 h-100 d-flex justify-content-center align-items-center bg-dark '>

            <div className='login_container col-11 col-md-6 h-75  rounded  login_main'>
                <div className='d-flex w-100 h-100 '>
                    <div className='p-0 m-0 col-0 d-none col-lg-5 d-lg-block login_right'>
                        <div className='w-100 h-100  d-flex align-items-end   '>
                            <h1 className='w-100 pb-2  text-success fw-bolder text-center'>
                                <p className='text-start '>Welcome </p>
                                <p className='text-center text-warning'>to the </p>
                                <p className='text-end text-primary'>Chat app</p>
                            </h1>
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='px-5 px-lg-4   pt-5 pt-md-0 mt-5   '>
                            <div className='text-center'>
                                <h2 className='bolder'>Login </h2>
                            </div>
                            <div className='d-flex py-3 flex-column'>
                                <label className='pb-2'>Email</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-2 rounded outline-none'
                                    name='email'
                                    onChange={(e) => changeUserData(e.target.name, e.target.value)}

                                />
                            </div>
                            <div className='d-flex pb-3 flex-column'>
                                <label className='pb-2'>Password</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-2 rounded outline-none'
                                    name='password'
                                    onChange={(e) => changeUserData(e.target.name, e.target.value)}

                                />
                            </div>
                            <br />
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-danger' onClick={submitUserData}>Login</button>
                            </div>

                            <br />
                            <br />
                            <br />
                            <div className=''>
                                <span>Don't have a account?
                                    <span className="btn fw-bold text-underline text-primary" onClick={() => navigate('/signup')}>Sign Up</span>
                                </span>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login