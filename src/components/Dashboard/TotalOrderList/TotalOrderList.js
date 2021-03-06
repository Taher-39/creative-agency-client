import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TotalOrderListTable from './TotalOrderListTable';
import navLogo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const TotalOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [totalOrders, setTotalOrders] = useState([])
    useEffect(()=>{
        fetch('https://protected-plateau-36631.herokuapp.com/getTotalOrders')
            .then(res => res.json())
            .then(data => {
                setTotalOrders(data)
            })
    }, [])
    return (
        <div>
            <div style={{backgroundColor: '#FBD062'}} className='dashboard-top'>
                <div className="d-sm-flex justify-content-around py-4">
                    <div>
                        <Link to="/">
                            <img src={navLogo} style={{width: '150px'}} alt="" />
                        </Link>
                    </div>
                    <div className='page-name'>
                        <h2>Total Order List</h2>
                    </div>
                    <div>
                        <h5 className='user'>{loggedInUser.name}</h5>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="left-side col-md-2 btn-bg">
                    <Sidebar></Sidebar>
                </div>
                <div className="right-side col-md-10 bg-light rounded p-5">
                    <div>
                        {   
                            totalOrders.length ?
                            <TotalOrderListTable totalOrders={totalOrders}></TotalOrderListTable>
                            : <h4 className='text-center pt-5 text-secondary'>Loading...</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalOrderList;