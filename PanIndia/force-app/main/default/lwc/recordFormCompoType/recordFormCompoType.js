import { api, LightningElement } from 'lwc';

export default class RecordFormCompoType extends LightningElement {
@api recordId
@api objectApiName

connectedCallback(){

    this.objectName = this.objectApiName;
}



}