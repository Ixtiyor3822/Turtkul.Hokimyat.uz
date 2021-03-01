import React, { useRef, useState } from 'react';

const Ariza = ({ customer }) => {

    const textmuroajat = useRef();
    const [flag, setFlag] = useState(true);
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    function changehandler() {
        setValue(textmuroajat.current.value)
    }

    function chiqar() {
        console.log(value);
        setData(textmuroajat.current.value)
        setFlag(false)
        textmuroajat.current.value = ''
    }

    function uzgartirish () {
        textmuroajat.current.value = data;
        setFlag(true);
        setData(0)
    }

    function yuborish () {
        setData(0);
        setFlag(true)
    }

    return (
        <div className="container">
            <h3>Ariza qabul qilish toifasi : {customer.toifa}</h3>
            <h3>Qabul qiluvchi: {customer.ismi} {customer.familiyasi} </h3>
            <p className="mb-4">  Iltimos muroajatingizni mazmunini kiriting. Muroajatingizni iloji boricha hato va kamchiliklarsiz Yozishga harakat qiling</p>
            <div className="row">
                <div className="col-6">
                    <textarea name="text" id="text" cols="120" rows="7" placeholder="Textingizni shu yerga qoldirishingiz mumkin." onChange={changehandler} ref={textmuroajat}></textarea>
                </div>
            </div>
            <div className=" arizabutton">
                {flag ? <button className="btn btn-primary" onClick={chiqar}>Muroajatingizni yuborish</button> : ''}
            </div>

            <div>
                <ul className="list-group">
                    {data.length ? (<li className="list-group-item">
                        <p>{data}</p>
                        <div className="d-flex block">
                            <button className="btn btn-success m-1" onClick={uzgartirish}>O`zgartirish</button>
                            <button className="btn btn-primary m-1" onClick={yuborish}>Yuborish</button>
                        </div>
                    </li>) : <p>Sizning textingiz Shu yerda bo`ladi. </p>}
                </ul>
            </div>

        </div>
    )
};



export default Ariza;