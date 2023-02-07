import React, { useState } from "react"


const CheckForLegal = () => {
    const [age, setAge] = useState()
    const [displayCool, setDisplayCool] = useState('none');
    const [displayNotCool, setDisplayNotCool] = useState('none');
    const [colorOfBorder, setCoolColorOfBorder] = useState('black');


    const checkLegal = () => {
        if (age >= 18) {
            setDisplayCool('block')
            setDisplayNotCool('none')
            setCoolColorOfBorder('green')
        } else {
            setDisplayNotCool('block')
            setDisplayCool('none')
            setCoolColorOfBorder('red')
        }
    }

    console.log(age)

    return (
        <>
            <div style={{ border: `5px solid ${colorOfBorder}` }} >
                <div>CheckForLegal works</div>
                <input type="number" placeholder="Ваш возраст" value={age} onChange={e => setAge(e?.target?.value)} />
                <button onClick={checkLegal}>Мне можно?</button>
                <div className="cool" style={{ display: displayCool }} >Класс</div>
                <div className="not-cool" style={{ display: displayNotCool }} >Не нужна тебе такая тачка</div>
            </div>
        </>
    )
}

export default CheckForLegal