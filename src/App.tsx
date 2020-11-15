import React, { FormEvent, useState } from "react";

import { IoIosSwap, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import LinkTo from "./Components/LinkTo";

import BinToDec from './Functions/BinToDec'

function App() {
  const [value, setValue] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [titleContainer, setTitleContainer] = useState<Array<string>>([ "Binário", "Decimal" ]);

  function clearStates() {
    setValue('')
    setResult('')
  }

  function handleChangeConvert() {
    const binDec = new BinToDec(value)

    const InvertTitle = binDec.InvertArray(titleContainer);

    setTitleContainer(InvertTitle);

    clearStates()
  }

  function setValueIfValid(isValid: boolean, value: string) {
    if(isValid) setValue(value);
  }

  function handleCheckIfValueIsValid(value: string) {
    const binDec = new BinToDec(value)

    if(binDec.isBackspace()) return setValueIfValid(true, '')

    const isValid = binDec.inputIsBinary(titleContainer) 
      ? binDec.valueIsBinary() 
      : binDec.valueIsDecimal()

    setValueIfValid(isValid, value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const binDec = new BinToDec(value)

    const result = binDec.inputIsBinary(titleContainer) 
      ? binDec.convertBinToDec() 
      : binDec.convertDecToBin()
    
    setResult(result)
  }

  return (
    <div className="App">
      <Header>
        <h1>Bin2Dec</h1>
      </Header>

      <main>
        <h2>{titleContainer[0]} para {titleContainer[1]}</h2>

        <form onSubmit={handleSubmit} className="container">
          <IoIosSwap className="icon-swap" onClick={handleChangeConvert} />

          <Input 
            value={value} 
            onChange={e => handleCheckIfValueIsValid(e.target.value)} 
            label={titleContainer[0]} 
            htmlFor="bin" 
          />

          <Input readOnly value={result} label={titleContainer[1]}/>

          <button>Converter!</button>
        </form>
      </main>

      <Footer>
        <div>
          <LinkTo url="https://github.com/joaoazevedoJS/Bin2Dec">
            <IoLogoGithub className="icon-link" />
          </LinkTo>

          <LinkTo url="https://www.linkedin.com/in/joaoazevedojs">
            <IoLogoLinkedin className="icon-link" />
          </LinkTo>
        </div>

        <LinkTo url="github.com/joaoazevedoJS">Created by JoaoazevedoJS</LinkTo>
      </Footer>
    </div>
  );
}

export default App;
