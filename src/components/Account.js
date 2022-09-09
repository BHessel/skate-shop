import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const { user, logout } = useAuth();
    let navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className='max-w-[600px] mx-auto my-16 p-4'>
            <h1 className='text 2xl font-bold py-4'>Account Page</h1>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogout} className="border-2 px-6 py-2 my-4 border-gray-300 hover:bg-gray-200">Logout</button>
        </div>
    );
}

export default Account;
