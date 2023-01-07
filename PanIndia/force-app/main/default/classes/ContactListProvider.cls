public with sharing class ContactListProvider {
    
    
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacList(){
        try {

            return[Select Id,firstName,Phone,Email,AccountId From Contact with SECURITY_ENFORCED ];

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
