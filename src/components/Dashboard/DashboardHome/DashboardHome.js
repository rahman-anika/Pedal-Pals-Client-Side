import React from 'react';
import useAuth from '../../../hooks/useAuth';
import dashboardHome from './../../../images/dashboard/dashboardhome1.jpg';

const DashboardHome = () => {

    const { user } = useAuth();

    return (
        <div>
            <h2 className="mt-5">Welcome To PedalPals, {user.displayName}</h2>

            <img className="img-fluid" src={dashboardHome} alt="" />

        </div>
    );
};

export default DashboardHome;