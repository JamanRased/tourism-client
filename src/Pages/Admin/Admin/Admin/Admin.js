import React from 'react';
import AddServices from '../../../AddServices/AddServices';
import MyOrder from '../../../MyOrder/MyOrder';
import ManageAllServices from '../ManageAllServices/ManageAllServices';

const Admin = () => {
    return (
        <div>
            <ManageAllServices></ManageAllServices>
            <MyOrder></MyOrder>
            <AddServices></AddServices>
        </div>
    );
};

export default Admin;