import { LightningElement } from 'lwc';
import searchApplicantFirstNameWisedName from '@salesforce/apex/ApplicantProvider.searchApplicantFirstNameWisedName';
import deleteSelectedApplicantRecords from '@salesforce/apex/ApplicantProvider.deleteSelectedApplicantRecords';

const applicantColumns = [
    { label: 'Applicant ID', fieldName: 'Name', editable: true },
    { label: 'First Name', fieldName: 'First_Name__c', editable: true },
    { label: 'Last Name', fieldName: 'Last_Name_del__c', editable: true },
    { label: 'Created Date', fieldName: 'CreatedDate', editable: true }
  ];


export default class CreateApplicantDataTableLWC extends LightningElement {

    applicantObject ={'sObjectType':'Applicant__c'}
    appList;
    columns=applicantColumns;
    selectedRecordCount = 0 ;
    draftValues=[] ;
    selectedRecordList;
    showDataTableFlag =false;
    totalRecord = 0;


    deleteButtonHandler(){

        deleteSelectedApplicantRecords({appIDList :this.selectedRecordList ,objApp:this.applicantObject})

        .then(result=>{
                this.appList= result;
                this.error = undefined;
                this.totalRecord= result.length;
                if(result.length>0 || result.length != null || result.length == 'undefined')
                  { 
                    this.showDataTableFlag =true;
                 }else{

                    this.showDataTableFlag  =false;
                 }
        })
        .catch(error =>{

                this.result = undefined;
                this.error = error ;
                this.showDataTableFlag  =false;
        });
    }

    searchRecords(){
        this.applicantObject.First_Name__c = this.template.querySelector('lightning-input[data-formfield="applicantFirstName"]').value;
        
        console.log(this.applicantObject.First_Name__c);

        searchApplicantFirstNameWisedName({objApp:this.applicantObject})

        .then(result =>{
            this.appList=result;
            console.log('Result'+JSON.stringify(result));
            this.totalRecord= result.length;
            if(result.length>0 || result.length != null || result.length == 'undefined')
                  { 
                    this.showDataTableFlag =true;
                 }else{

                    this.showDataTableFlag  =false;
                 }
            
        })
        .catch(error =>{


            console.log('Error'+JSON.stringify(error));
            this.showDataTableFlag  =false;
        });

    }

    selectedRecordsHandler(event){
        const selectedRows = event.detail.selectedRows;

           this.selectedRecordCount = event.detail.selectedRows.length;

          let recordsSets = new Set();
          
          for(let i=0 ; i<selectedRows.length ; i++ ){
            recordsSets.add(selectedRows[i].Id);

            this.selectedRecordList= Array.from(recordsSets);

          }
    }


}