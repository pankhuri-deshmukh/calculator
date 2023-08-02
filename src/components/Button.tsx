import React, { useContext } from "react";
import { CalcContext } from '../context/CalcContext'

interface ButtonProps {
  value: string | number;
}

//Record is Typescript utility for mapping ket-value pair
//adds required style class to operation button
const getStyle = (btn: string | number) => {
  const style: Record<string, string> = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return style[btn]
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + Number(value) : calc.num
    });
  }

  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0, expression: ''})
  }

  const handleClick = () => {
    const numberString = value.toString()

    let numberValue:number;
    if (numberString === '0' && calc.num === 0) {
      numberValue = 0
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  const signClick = () => {
    setCalc({
      ...calc,
      sign: value as string,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a: number, b: number, sign: string) => {
        const result: Record<string, (a: number, b: number) => number> = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sign](a, b);
      }

      const newExpression = `${calc.res} ${calc.sign} ${calc.num}`
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
        expression: newExpression,
      })
    }
  }

  const perClick = () => {
    setCalc({
      ...calc,
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }

  const invertClick = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  const handleBtnClick = () => {
    const results: Record<string, () => void> = {
      '.': dotClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': perClick,
      '+-': invertClick
    }
    if (results[value]) {
      return results[value]()
    } else {
      return handleClick()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyle(value)} button`}>{value}</button>
  )
}

export default Button;
