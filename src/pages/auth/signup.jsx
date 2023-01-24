import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { normalSignupAction } from '../../redux/action/signup.action'
import Avtar from '../../components/images/avtar'
import { FiEdit } from "react-icons/fi";
import { UploadImage } from '../../helper/cloudnary'
import { setLocalStorage } from '../../lib/session'
import ifToken from '../../helper/token'


const initUserData = {
    name: "",
    email: '',
    password: '',
    profilePic: ''
}
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState(initUserData)
    // const [rePassword, setRePassword] = useState('')

    const submitUserData = async () => {
        dispatch(normalSignupAction(userData)).then((result) => {
            console.log(result)
            setLocalStorage('token', result?.data?.data?.token)
            setLocalStorage('name', result?.data?.data?.name)
            setLocalStorage('email', result?.data?.data?.email)
            setLocalStorage('profilePic', result?.data?.profilePic)
            navigate('/')
        }).catch((err) => {
            console.log(err)
        });
    }

    const handleUploadFile = async (e) => {
        const fileData = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = async () => {
            const imageUrlIns = reader.result;
            const img = await UploadImage(imageUrlIns)
            // setUrl(img)
            console.log(img, 'jkkkkkkkkkkkkkkkkkkk')
            setUserData({ ...userData, profilePic: img })
            // return img?.url
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
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
            <div className='login_container col-11 col-md-6 h-75 rounded  login_main'>
                <div className='d-flex h-100 '>
                    <div className='p-0 m-0 col-0 d-none col-lg-5 d-lg-block login_right '>
                        <div className='w-100 h-100 text-center d-flex align-items-center'>
                            <div className='w-100 h-100  d-flex align-items-end   '>
                                <h1 className='w-100 pb-2  text-success fw-bolder text-center'>
                                    <p className='text-start '>Welcome </p>
                                    <p className='text-center text-warning'>to the </p>
                                    <p className='text-end text-primary'>Chat app</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 '>
                        <div className='px-5  py-lg-3  px-lg-4    mt-5 mt-md-0 '>
                            <div className='text-center'>
                                <h2 className='fw-bolder'>Sign-Up </h2>
                            </div>

                            <div className='d-flex justify-content-center '>
                                <label htmlFor="pic" className='position-relative'>
                                    <img
                                        src={userData?.profilePic || "/icons/pngegg.png"}
                                        alt=""
                                        width={80} height={80}
                                        className=' rounded-circle py-1 px-1 bg-light '
                                    />
                                    <div >
                                        <FiEdit className='position-absolute  text-primary  top-0  edit-icon ' />
                                    </div>
                                </label>
                                <input type="file" name="pic" id='pic' accept="image/*" value="" className='d-none'
                                    onChange={(e) =>
                                        handleUploadFile(e)
                                        // const fileData = e.target.files[0];
                                        // const reader = new FileReader();
                                        // reader.readAsDataURL(fileData);
                                        // reader.onload = async () => {
                                        //     const imageUrlIns = reader.result;
                                        //     // const img = await UploadImage(imageUrlIns)
                                        //     setUserData({...userData,profilePic:imageUrlIns})

                                        // }         
                                    } />
                            </div>
                            <div className='d-flex py-3 flex-column'>
                                <label className='pb-2'>Name</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-2 rounded outline-none'
                                    name="name"
                                    onChange={(e) => changeUserData(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className='d-flex pb-3 flex-column'>
                                <label className='pb-2'>Email</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-2 rounded outline-none'
                                    name='email'
                                    onChange={(e) => changeUserData(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className='d-flex pb-2 flex-column'>
                                <label className='pb-0'>Password</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-2 rounded outline-none'
                                    name='password'
                                    onChange={(e) => changeUserData(e.target.name, e.target.value)}
                                />
                            </div>
                            {/* <div className='d-flex pb-3 flex-column'>
                                <label className='pb-0'>Re-Password</label>
                                <input
                                    type="text"
                                    className='border-0 px-1 py-1 rounded outline-none'
                                    name='re-password'
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div> */}
                            <div className='d-flex justify-content-center'>

                                <button className='btn btn-danger' onClick={() => submitUserData()}>signup</button>
                            </div>



                            <div className='pt-5 pt-md-3'>
                                <span>Already have an account ?
                                    <span className="btn fw-bold text-underline text-primary" onClick={() => navigate('/login')}>login</span>
                                </span>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup