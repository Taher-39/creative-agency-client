import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ serviceData }) => {
    const {title, description, image} = serviceData;
    return (
        <div className='col-md-4 d-flex align-items-stretch my-2 zoom'>
            <div className="shadow p-4 btn-bg text-light rounded" style={{minWidth: '300px'}}>
                <div className="text-center my-2">
                    <img style={{ width: '50px', height: '50px' }} src={`data:image/png;base64, ${image.img}`} alt="" />
                </div>
                <h4 className='text-center'>{title}</h4>
                <p className='text-center'>{description}</p>
                <div className='text-center'> 
                    <button className="btn btn-danger py-2">
                        <Link className='text-light' style={{textDecoration: 'none', padding: '0px 30px'}} to="/uploadOrder">
                            Hire Us
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;