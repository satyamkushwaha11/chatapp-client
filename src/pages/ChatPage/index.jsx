import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import Avtar from '../../components/images/avtar'

const ChatPage = () => {
    return (
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
                    <div className='position-relative  d-flex py-1 justify-content-start col-6'>
                        <div className='pt-2 text-wrap  '>
                            <div className='d-flex align-items-start'>
                                <div className='mx-2'>
                                    <Avtar src='/icons/pngegg.png' roundedCircle width={30} height={30} className='bg-dark mx-2' />
                                    <div className='text-start ' style={{ fontSize: '12px' }}>
                                        12:30PM
                                    </div>
                                </div>
                                <div className=' p-1 px-2 message-card '>
                                    dsdasdfasadfasfa
                                    {/* dsdasdfasadfasfa
                            dsdasdfasadfasfa
                            dsdasdfasadfasfa
                            dsdasdfasadfasfadsdasdfas adfasfadsdasdfasadfasfa
                            dsdasdfasadfasfa
                            dsdasdfasadfasfadsdasdfasadfasfa */}
                                </div>
                            </div>
                            {/* <div className='text-start ' style={{ fontSize: '12px' }}>
                        12:30PM
                    </div> */}
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
    )
}

export default ChatPage