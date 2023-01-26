import React from 'react'

const MessageBox = ({type,message,time,userImg}) => {


    return (
        <div className='position-relative  d-flex py-1 justify-content-start col-10'>
            <div className='pt-2 text-wrap  '>
                <div className='d-flex align-items-center'>
                    <Avtar src='/icons/pngegg.png' roundedCircle width={30} height={30} className='bg-dark mx-2' />
                    <div className='card p-1 px-2  '>
                        dsdasdfasadfasfa
                        dsdasdfasadfasfa
                        dsdasdfasadfasfa
                        dsdasdfasadfasfa
                        dsdasdfasadfasfadsdasdfasadfasfadsdasdfasadfasfa
                        dsdasdfasadfasfa
                        dsdasdfasadfasfadsdasdfasadfasfa
                        
                    </div>
                </div>
                <div className='text-start ' style={{ fontSize: '12px' }}>
                    12:30PM
                </div>
            </div>
        </div>
    )
}

export default MessageBox