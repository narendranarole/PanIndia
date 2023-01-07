import { LightningElement ,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    { label: 'Name', fieldName: 'Name',type :'text' },
    { label: 'Type', fieldName: 'Type', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'SLA', fieldName: 'SLA__c', type: 'text' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
];

export default class DataTableWithWire extends LightningElement {

@track data;
columns = columns;
@wire(getAccounts) accountRecords({data,error}){

    if(data){
        this.data = data;
    }
    else if(error){

        this.data = undefined;
    }


}
}