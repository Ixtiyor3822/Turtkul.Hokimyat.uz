import React from 'react';
import QabulQiluvchi from './QabulQiluvchi/QabulQiluvchi';

const ArizaBerish = (props) => {

    return (
        <div className="">
            <div className="container">
                <h3 className="ml-3">Ariza berish</h3>
            </div>
            <hr />

            <div className="row qatlam">
                {props.customer.map(customer =>{
                    return <QabulQiluvchi customer={customer}/>
                })}                
            </div>

            

        </div>
    )
}

export default ArizaBerish;