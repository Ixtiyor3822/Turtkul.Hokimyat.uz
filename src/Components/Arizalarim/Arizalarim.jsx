import React, { useEffect, useState } from 'react';
import { getRequest } from '../../hooks/sendRequest';

const Arizalarim = () => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest(requestUrl)
            .then(data => {
                setData(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="container">
            <h3>Mening arizalarim</h3>
            <ul className='list-group'>
                {data.map(data => {
                    return (
                        <li className='list-group-item mt-2'>
                            <span><strong>{data.id}</strong></span> {data.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Arizalarim;