public with sharing class ContactManager {
    
      @AuraEnabled
      public static List<Contact> fetchAllContacts(){
        try {
            return [select Id,NAME,Phone,Email,Account.Name FROM Contact ];
        } 
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
      }     
   

}
