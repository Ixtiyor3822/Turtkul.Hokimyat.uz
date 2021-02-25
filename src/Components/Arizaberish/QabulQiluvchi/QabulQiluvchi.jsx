import React from 'react';
import { NavLink } from 'react-router-dom';

const QabulQiluvchi = ({customer}) => {
    return (
        <div className="col-3 bg-primary m-5">
            <h4>{customer.toifa}</h4>
            <div>
                <h5>{customer.ismi}</h5>
                <h5>{customer.familiyasi}</h5>
            </div>
            <div>
                    <NavLink to={`/arizaberish/${customer.id}`} className="btn btn-light m-3" > Muroajat yuborish </NavLink>
                
            </div>
        </div>
    )
};
export default QabulQiluvchi;