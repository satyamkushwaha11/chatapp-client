import React from 'react'
import Sidebar from '../components/sidebar'
import ChatPage from './ChatPage'
import Layout from '../HOC/Layout'

const Index = () => {
    
    return (
        <Layout>
            <div className='w-100 h-100 d-flex p-md-3 m-0 bg-info '>
                <Sidebar />
                <ChatPage />
            </div>
        </Layout>

    )
}

export default Index