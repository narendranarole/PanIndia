import { LightningElement ,wire} from 'lwc';
import findAllProducts from '@salesforce/apex/ProductManager.findAllProducts';

export default class ProductMasterDisplay extends LightningElement {

    allProducts;
    errorDetails;
    @wire(findAllProducts)
    processAllProduct({error,data}){
        if(data) {
            this.allProducts = data;
        }   
        else if(error){
            this.errorDetails = error;
        }
    }
}