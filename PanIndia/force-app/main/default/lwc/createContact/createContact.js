import { LightningElement } from 'lwc';
import createNewContact from '@salesforce/apex/ContactProvider.createNewContact';


export default class CreateContact extends LightningElement {

    objCon = {'sobjectType':'Contact'}
    saveButtonHandler(){

        console.log('In saveButtonHandler');
        this.objCon.FirstName = this.template.querySelector('lightning-input[data-formfield ="contactFirstName"]').value;
        this.objCon.LastName = this.template.querySelector('lightning-input[data-formfield ="contactLasttName"]').value;
        console.log('In saveButtonHandler '+'' + this.objCon.First_Name  +'' + this.objCon.Last_Name );

        createNewContact({objContactProvider :this.objCon })
        .then(result=>{
            this.result= result;
            this.error = undefined;
            console.log('Sucess');
        })
        .catch(error =>{
            this.result= undefined;
            this.error = error;
            console.log('Error');
        });


    }

}