import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' 
import createNewApplicant from '@salesforce/apex/ApplicantProvider.createNewApplicant' ;
import searchApplicant from '@salesforce/apex/ApplicantProvider.searchApplicant';
export default class CreateApplicant extends LightningElement {

applicantObj = {'sobjectType':'Applicant__c'}
showDetailFlag = false;

saveButtonHandler(){

this.applicantObj.First_Name__c = this.template.querySelector('lightning-input[data-formfield ="applicantFirstName"]').value;
this.applicantObj.Last_Name__c = this.template.querySelector('lightning-input[data-formfield ="applicantLastName"]').value;
this.applicantObj.DOB__c = this.template.querySelector('lightning-input[data-formfield ="applicantDOB"]').value;

createNewApplicant({objApp:this.applicantObj})

.then(result =>{

    this.result = result;
    this.error = undefined;
})
.catch(error =>{
    this.result = undefined;
    this.error = error ;
});

}
searchButtonHandler(){
    
    
    this.applicantObj.Name = this.template.querySelector('lightning-input[data-formfield ="applicantName"]').value;
   
    searchApplicant({objApp:this.applicantObj})
    .then(result =>{

        this.applicantObj = result;
        this.showDetailFlag = true ;
        this.showSuccessToast(); 
       

        this.error = undefined;
    })
    .catch(error =>{
        this.result = undefined;
        this.error = error ;
    });
}

showSuccessToast() {
    const evt = new ShowToastEvent({
        title: 'Message',
        message: 'Record Found...!!!',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}






}