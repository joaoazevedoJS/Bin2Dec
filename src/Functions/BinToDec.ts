export default class BinToDec {
  private _value: string;

  constructor (value: string) {
    this._value = value
  }

  private CreateNewArrayExistent = (array: Array<any>): Array<any> => {
    return [...array];
  }

  public InvertArray = (array: Array<string>): Array<any> => {
    return this.CreateNewArrayExistent(array.reverse())
  }

  public inputIsBinary = (titleContainer: Array<string>): boolean => {
    return titleContainer[0] === "Binário"
  }

  private toBoolean = (value: any): boolean => {
    return !!value
  }

  public valueIsBinary = (): boolean => {
    const getLastBinary = this._value.match(/(0|1)$/i)
    
    return this.toBoolean(getLastBinary)
  }
  
  public valueIsDecimal = (): boolean => {
    const getLastDecimal = this._value.match(/\d$/i)
    
    return this.toBoolean(getLastDecimal)
  }

  public isBackspace = (): boolean => {
    const getBackspace = this._value.match(/\b/i)

    return !this.toBoolean(getBackspace)
  }

  private Base2 = (binary: number, index: number): number => {
    return binary * 2 ** index++
  }

  public convertBinToDec = (): string => {
    // Vai receber o número binário e reverter ele
    const binaryArray = this._value.split("").reverse()

    let decimal = 0

    binaryArray.forEach((binary, index) => {
      decimal += this.Base2(Number(binary), index)
    })

    return String(decimal)
  }

  public convertDecToBin = (): string => {
    let decimal = Number(this._value)
    let binary = ''

    // Vai dividir até o decimal ser igual a 0
    while(decimal > 0) {
      binary += decimal % 2

      decimal = Math.floor(decimal / 2)
    }

    // Adiciona o número 0 para binários com até 3 caracteres
    if (binary.length <= 3) {
      binary += 0
    }

    return binary.split('').reverse().join('')
  }
}
