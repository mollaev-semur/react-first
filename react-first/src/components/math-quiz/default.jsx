import React, { useState } from "react"

const MathQuiz = () => {

    const [num, setNum] = useState()
    const [x, setX] = useState(Math.floor(Math.random() * (100 - 0 + 1)) + 0)
    const [y, setY] = useState(Math.floor(Math.random() * (100 - 0 + 1)) + 0)
    const [round, setRound] = useState(1)
    const [score, setScore] = useState(0)
    const [borderColor, setborderColor] = useState('black')

    const checkAnswer = () => {
        if (num == (x + y)) {
            console.log('true' + num)
            setScore(score + 1)
            setborderColor('green')

        } else {
            console.log('false' + num)
            setborderColor('red')

        }
        setTimeout(() => {
            setborderColor('black');
        }, "1000")

        setX(Math.floor(Math.random() * (100 - 0 + 1)) + 0)
        setY(Math.floor(Math.random() * (100 - 0 + 1)) + 0)
        setRound(round + 1)
    }

    return <>
        <h1>Math quiz</h1>
        <h2>Раунд №{round}</h2>
        <p>Сколько будет:</p>

        <p>{x} + {y}</p>
        <input style={{ border: `3px solid ${borderColor}` }} type="number" value={num} onChange={e => setNum(e?.target?.value)} />
        <button style={{ border: `3px solid ${borderColor}` }} onClick={checkAnswer}>Проверить</button>

        <p>Счет: {score}</p>
    </>

}
export default MathQuiz;




// const CheckForLegal = () => {
//     const [age, setAge] = useState()
//     const [displayCool, setDisplayCool] = useState('none');
//     const [displayNotCool, setDisplayNotCool] = useState('none');
//     const [colorOfBorder, setCoolColorOfBorder] = useState('black');


//     const checkLegal = () => {
//         if (age >= 18) {
//             setDisplayCool('block')
//             setDisplayNotCool('none')
//             setCoolColorOfBorder('green')
//         } else {
//             setDisplayNotCool('block')
//             setDisplayCool('none')
//             setCoolColorOfBorder('red')
//         }
//     }

//     console.log(age)

//     return (
//         <>
//             <div style={{ border: `5px solid ${colorOfBorder}` }} >
//                 <div>CheckForLegal works</div>
//                 <input type="number" placeholder="Ваш возраст" value={age} onChange={e => setAge(e?.target?.value)} />
//                 <button onClick={checkLegal}>Мне можно?</button>
//                 <div className="cool" style={{ display: displayCool }} >Класс</div>
//                 <div className="not-cool" style={{ display: displayNotCool }} >Не нужна тебе такая тачка</div>
//             </div>
//         </>
//     )
// }

