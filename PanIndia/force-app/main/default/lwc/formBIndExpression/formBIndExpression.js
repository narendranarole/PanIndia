import { LightningElement } from 'lwc';

export default class FormBIndExpression extends LightningElement {

    fullName ='';
    email ='';
    phone ='' ;

    handleOnChangeinput(event){

            const field = event.target.name;
            if(field =='fullName'){
                console.log('#####Inside Full Name');
                this.fullName = event.target.value;

            }else if (field =='email'){

                this.email=event.target.value;
            }else if(field == 'phone'){
                this.phone= event.target.value;

            }


    }

    get nameUpperCase() {

        return '${this.fullName}'.toUpperCase();

    }

   

}