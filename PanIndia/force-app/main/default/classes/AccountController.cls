public with sharing class AccountController {
    
    @AuraEnabled(cacheable= true)
    public static List<Account> getAccounts(){
        try {

            return [select id,name,type,rating,industry,Phone ,SLA__c from Account  LIMIT 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}