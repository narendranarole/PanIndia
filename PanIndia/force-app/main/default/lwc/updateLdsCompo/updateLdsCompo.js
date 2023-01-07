import { LightningElement,api } from 'lwc';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import Contact_LeadSource from '@salesforce/schema/Contact.LeadSource';
import Contact_AccountId from '@salesforce/schema/Contact.AccountId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateLdsCompo extends LightningElement {
    @api recordId
    @api objectApiName
    fields =[Contact_FirstName,Contact_LastName,Contact_LeadSource,Contact_AccountId];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Contact Record: ' + event.detail.fields.LastName.value +'   is Successfuly Created',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

}