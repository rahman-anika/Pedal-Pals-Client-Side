import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stark-sea-91201.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    e.target.reset();
                    setSuccess(true);

                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="mt-5 text-success">Make an Admin</h2>
            <br />

            <form onSubmit={handleAdminSubmit}>
                <input className="input-field"

                    type="email"
                    placeholder="Enter Email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <br />
                <br />

                <input type="submit" className="btn btn-success" value="Make Admin" />
            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;