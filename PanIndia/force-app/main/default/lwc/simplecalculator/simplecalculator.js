import { LightningElement } from 'lwc';

export default class Simplecalculator extends LightningElement {
firstNum
secondNum
finalResult
showResult = false;

handleFirstNumber(event){

    this.firstNum = event.target.value;

}

handleSecondtNumber(event){
    this.secondNum = event.target.value;}

handleAddEvent(event){

    this.finalResult = Number(this.firstNum) + Number(this.secondNum);
    this.showResult = true;
}
handleSubEvent(event){

    this.finalResult = Number(this.firstNum) - Number(this.secondNum);
    this.showResult = true;
}
handleMulEvent(event){

    this.finalResult = Number(this.firstNum) * Number(this.secondNum);
    this.showResult = true;
}
handleDivEvent(event){
    
    this.finalResult = Number(this.firstNum) / Number(this.secondNum);
    this.showResult = true;
}


}