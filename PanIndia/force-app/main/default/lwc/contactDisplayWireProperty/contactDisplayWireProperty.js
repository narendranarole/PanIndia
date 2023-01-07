import { LightningElement ,wire} from 'lwc';
import fetchAllContacts from '@salesforce/apex/ContactManager.fetchAllContacts';
export default class ContactDisplayWireProperty extends LightningElement {

@wire(fetchAllContacts)
contacts;


}