import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <br />
            <br />

            {/* go to homepage starts */}
            <Link to="/"><Button>Go Back</Button>
            </Link>
            {/* go to homepage ends  */}

            <br /><br />
        </div>
    );
};

export default NotFound;