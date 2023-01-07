import { LightningElement,api} from 'lwc';

export default class PaginationChildCompo extends LightningElement {

    totalRecords
    visibleRecords
    recordSize = 5;
    currentPage = 1
    totalPage
    
    get records(){
    
        return this.visibleRecords;
    }
    
    @api
    set records(data){
        if(data){
            this.totalRecords = data;
            
            this.totalPage = Math.ceil(data.length/this.recordSize);
            this.passRecords();
        }
    
    }
    
        nextHandler(){
    
                if(this.currentPage < this.totalPage){
                
                    this.currentPage = this.currentPage+1;
                    this.passRecords();
                }
            }
        previousHandler(){
    
                if(this.currentPage > 1){
                
                    this.currentPage = this.currentPage-1;
                    this.passRecords();
                }
            }
    
        passRecords()	{
        
            const start = (this.currentPage-1)*this.recordSize;
            const end = (this.currentPage)*this.recordSize;
            this.visibleRecords = this.totalRecords.slice(start,end);
            this.dispatchEvent(new CustomEvent('sliced',
                                {detail:{ records:this.visibleRecords                                  
                                      
            
                                } 
                                
              }));
        
        }   


}