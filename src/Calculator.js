import React, { useState } from 'react'

const Calculator = () => {
    const [result, setReasult] = useState("")
    const handleClick = (e) => {
        setReasult(result.concat(e.target.name))
    }
    const handleClear = () => {
        setReasult("")
    }
    const Calculate = () =>{
      
        try {
              setReasult(eval(result).toString())
        } catch (error) {
            setReasult("error")
        }
    }
    return (
        <div>
            <div className="calculator">
                <div className="calculator__output">{result}</div>
                <div className="calculator__keys">
                    <button name='+' onClick={handleClick} className="calculator__key calculator__key--operator">+</button>
                    <button name='-' onClick={handleClick} className="calculator__key calculator__key--operator">-</button>
                    <button name='*' onClick={handleClick} className="calculator__key calculator__key--operator">×</button>
                    <button name='/' onClick={handleClick} className="calculator__key calculator__key--operator">÷</button>
                    <button name='7' onClick={handleClick} className="calculator__key">7</button>
                    <button name='8' onClick={handleClick} className="calculator__key">8</button>
                    <button name='9' onClick={handleClick} className="calculator__key">9</button>
                    <button name='4' onClick={handleClick} className="calculator__key">4</button>
                    <button name='5' onClick={handleClick} className="calculator__key">5</button>
                    <button name='6' onClick={handleClick} className="calculator__key">6</button>
                    <button name='1' onClick={handleClick} className="calculator__key">1</button>
                    <button name='2' onClick={handleClick} className="calculator__key">2</button>
                    <button name='3' onClick={handleClick} className="calculator__key">3</button>
                    <button name='0' onClick={handleClick} className="calculator__key">0</button>
                    <button name='.' onClick={handleClick} className="calculator__key">.</button>
                    <button onClick={handleClear} className="calculator__key">AC</button>
                    <button onClick={Calculate} className="calculator__key calculator__key--enter">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
