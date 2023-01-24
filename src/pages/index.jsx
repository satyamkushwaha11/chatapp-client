

import React, { useEffect, useLayoutEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import  ifToken  from '../helper/token'
import Avtar from '../components/images/avtar'
import { RiSearch2Line, RiSearchLine } from 'react-icons/ri';
import { FaSortAmountDownAlt, FaAlignJustify } from "react-icons/fa";
// const socket = io.connect('http://localhost:4001/', {

// })

const Index = () => {
    const navigate = useNavigate()
    const [messageCome, setMessageCome] = useState()
    const [room, setRoom] = useState()
    const [sendTo, setSendTo] = useState()
    const [message, setMessage] = useState()

    const sendFun = () => {
        console.log('jjjjjjjjj')
        // socket.emit("send_message", "hello world")
    }

    // useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //         setMessageCome(data.message);
    //     });
    // }, [socket]);

    useEffect(() => {
        if (!ifToken()) {
            navigate('/login')
        }
    })


    return (
        <div className='w-100 h-100 d-flex p-md-3 m-0 bg-info '>

            <div className='col-12 col-lg-4 col-md-5 card    border-0 rounded-0'>

                <div className='h-100'>
                    <div className='h-20'>
                        <div className='h-50 d-flex justify-content-between align-items-center  border p-2  '>
                            <div >
                                <Avtar src='/icons/pngegg.png' roundedCircle width={45} height={45} className='bg-dark' />
                            </div>
                            <div>
                                <FaAlignJustify style={{ fontSize: "25px" }} />
                            </div>
                        </div>
                        <div className='h-50 d-flex justify-content-between border '>
                            <div className='h-100 col-2 text-center'>
                                <FaSortAmountDownAlt className='h-100' style={{ fontSize: "30px" }} />

                            </div>
                            <div className='col-10 px-2  rounded-1 d-flex align-items-center '>
                                <input type="text" name="" className='col-11  px-1 h-75 py-1 card  border-1' placeholder='Search....' />
                                <div className='col-1 text-center  h-100 ' style={{ borderRadius: ' 0 5px 5px 0' }}>
                                    {/* <RiSearch2Line className=' h-100  p-0' style={{ fontSize: "30px" }} /> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='h-82'>
                        <div className='h-100 userList '>
                            {
                                [1, 3, 2, 2, 2, 2, 3, 3, 3, 7, 8, 7].map((item, index) => {
                                    return (
                                        <>
                                            <div className=' p-3   userLi'>
                                                <div className='d-flex align-items-center ' style={{ height: '3rem' }}>

                                                    <Avtar src='/icons/pngegg.png' roundedCircle width={60} height={60} className='bg-dark ' />
                                                    <div className='w-75 d-flex justify-content-between px-2'>
                                                        <div className=''>
                                                            <div className='fw-bolder' >
                                                                Satyam kushwaha
                                                            </div>
                                                            <div className='  w-75 text-truncate text-wrap' style={{ fontSize: '0.7rem' }}>
                                                                message from
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <div className='fw-bold'>
                                                                12:03pm
                                                            </div>
                                                            <div>
                                                                seen
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-12 h-100 col-lg-8 col-md-7 bg-light d-none d-sm-block'>
                <div className='px-3 h-9 border d-flex align-items-center justify-content-between'>
                    <div className='d-flex py-2'>
                        <Avtar src='/icons/pngegg.png' roundedCircle width={45} height={45} className='bg-dark' />
                        <div className='ps-2'>
                            <div>Satyam kushwaha</div>
                            <span className='' style={{ fontSize: "12px" }} >online</span>
                        </div>
                    </div>
                    <div>
                        <FaAlignJustify style={{ fontSize: "25px" }} />
                    </div>
                </div>
                <div className='h-91  '>
                    <div className='h-91 px-3'>
                        <div className='position-relative  d-flex py-1 justify-content-start col-10'>
                            <div className='pt-2 text-wrap  '>
                                <div className='d-flex align-items-center'>
                                    <Avtar src='/icons/pngegg.png' roundedCircle width={30} height={30} className='bg-dark mx-2' />
                                    <div className='card p-1 px-2  '>
                                        dsdasdfasadfasfa
                                    </div>
                                </div>
                                <div className='text-start ' style={{ fontSize: '12px' }}>
                                    12:30PM
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className='p-2 text-wrap  '>
                                <div className='d-flex align-items-center'>
                                    <div className='card p-1 px-2  bg-primary text-light'>
                                        dsdasdfasadfaasdfa
                                        asdfasd
                                        asdsfa
                                    </div>
                                    <Avtar src='/icons/pngegg.png' roundedCircle width={30} height={30} className='bg-dark mx-2' />
                                </div>
                                <div className='text-end py-1' style={{ fontSize: '12px' }}>
                                    12:30PM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-top h-9 '>
                        <div className='d-flex px-3 align-items-center h-100 justify-content-between'>
                            {/* <div>
                                asd
                            </div> */}
                            <div className='d-flex col-12 h-100 p-1'>
                                <input type="text" className='w-100  card h-100 px-3' placeholder='Message' />
                                <div className='btn fw-bolder d-flex align-items-center text-center btn-outline-info'>
                                    <div>
                                        send
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index