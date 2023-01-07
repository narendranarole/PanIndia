@RestResource(urlMapping='/getAccountRecords/*')
global class AccountProvider {
    
    @httpGet
    global static Account getSelectedAccounts(){
      RestRequest req = RestContext.request;
      RestResponse res = Restcontext.response;

      String jsonString=req.requestBody.tostring();
      responseWrapper objResWrap=(responseWrapper) JSON.deserialize(jsonString,responseWrapper.class);        
        
        return ([select Id, Name, Type, Rating, CreatedDate from Account where Name=: objResWrap.Name LIMIT 1]);
    }

    @httpPost
    global static Account createNewAccount(){
      RestRequest req = RestContext.request;
      RestResponse res = Restcontext.response;

      String jsonString=req.requestBody.tostring();
      responseWrapper objResWrap =(responseWrapper) JSON.deserialize(jsonString,responseWrapper.class);        
        
      
      Account objAcc = new Account(Name=objResWrap.name, Type=objResWrap.type, Rating=objResWrap.rating, SLA__c=objResWrap.sla);
      insert objAcc;
        
      return   objAcc;
    }

	@httpPut
    global static Account updateAccounts(){
      RestRequest req = RestContext.request;
      RestResponse res = Restcontext.response;

      String jsonString=req.requestBody.tostring();
      responseWrapper objResWrap =(responseWrapper) JSON.deserialize(jsonString,responseWrapper.class);        
    
      Account objAcc = [select Id, Name, Rating, Type from Account where Id =:objResWrap.Id];
      objAcc.Rating =   objResWrap.rating;
      update objAcc;  
       
      return objAcc;  
    
    }

    @httpDelete
    global static String deleteAccounts(){
      RestRequest req = RestContext.request;
      RestResponse res = Restcontext.response;

      String jsonString=req.requestBody.tostring();
      responseWrapper objResWrap =(responseWrapper) JSON.deserialize(jsonString,responseWrapper.class);        
    
      Account objAcc = [select Id, Name from Account where Id =:objResWrap.Id];
      delete objAcc;
      
        return 'Record has been deleted successfully...!!!';
    
    }

    
    
    global class responseWrapper{
       global Id Id;
       global string name;
       global String type;
       global String rating;  
       global String sla; 
 
      }


}