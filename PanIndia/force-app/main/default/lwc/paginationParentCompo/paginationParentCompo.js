import { LightningElement,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactListProvider.getContacList'

export default class PaginationParentCompo extends LightningElement {

    totalContactList
    visibleContacts
    
    @wire(getContactList)
    wiredContact({data,error}){
        if(data){
        
            this.totalContactList = data;
            console.log(JSON.stringify(this.totalContactList));
            this.error = undefined
        }
        if(error)
        {
                
                console.log('error occured');
                this.data = undefined;
                this.error = error;
                
                
        }
    }
    
    sliceHandler(event){
    
        this.visibleContacts = [...event.detail.records];
    
    
    }

}