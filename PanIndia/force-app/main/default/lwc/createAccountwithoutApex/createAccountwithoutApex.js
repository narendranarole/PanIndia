import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class CreateAccountwithoutApex extends LightningElement {
    accountId;
    name ="";

    handleNameChange(event){

          this.name = event.target.value;
          console.log('name :' + JSON.stringify(this.name))
    }

    handleCreateAccount(){

        const field ={};
        field[NAME_FIELD.fieldApiName]= this.name ;
        console.log('field :' + JSON.stringify(field))

        const recordInput ={apiName :ACCOUNT_OBJECT.objectApiName ,field};
        createRecord(recordInput)
        .then(account =>{
            console.log('result :' + JSON.stringify(result))
            this.accountId = account.id;
            this.error =undefined;
        })
        .catch(error =>{
            console.error('error :' + JSON.stringify(error))
            this.error = error;
            this.result = undefined;

        });
    }
}