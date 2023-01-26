import React from 'react'
import { useMemo } from 'react'
import { FaAlignJustify, FaSortAmountDownAlt } from 'react-icons/fa'
import Avtar from '../images/avtar'

const Sidebar = () => {

    const useImage = useMemo(() => {
        return localStorage.getItem('profilePic')
    }, [])

    

    return (
        <div className='col-12 col-lg-4 col-md-5 card    border-0 rounded-0'>

            <div className='h-100'>
                <div className='h-20'>
                    <div className='h-50 d-flex justify-content-between align-items-center  border p-2  '>
                        <div className='card rounded-circle '>
                            <Avtar src={useImage || '/icons/pngegg.png'} roundedCircle width={45} height={45} className='bg-dark' />
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
    )
}

export default Sidebar