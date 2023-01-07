public with sharing class ContactProvider {
    public ContactProvider() {

    }

    @AuraEnabled
    public static void createNewContact(Contact objContactProvider){
        try {
                
                 Database.insert (objContactProvider,false)  ;                
                
                
        } 
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}