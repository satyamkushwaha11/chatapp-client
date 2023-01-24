import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ifToken from "../helper/token"


const PrivateRouting = (props) => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        if (!ifToken()) {
            navigate('/login')
        }
    })
    return (
        <>
            {
                props?.children || <></>
            }
        </>
    )
}

export default PrivateRouting