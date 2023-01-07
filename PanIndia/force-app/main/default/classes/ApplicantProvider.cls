public with sharing class ApplicantProvider {


    @AuraEnabled
    public static string createNewApplicant(Applicant__c objApp){
        try {
            insert objApp ;
            return 'Applicant Record Created Successfully';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Applicant__c searchApplicant(Applicant__c objApp){
        try {
              Applicant__c objAppRetrieved = [select Id ,First_Name__c,Last_Name__c,Name,DOB__c FROM Applicant__c WHERE Name =:objApp.Name ];
                return objAppRetrieved;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Applicant__c> searchApplicantFirstNameWisedName(Applicant__c objApp){
        try {
            if(String.isNotBlank(objApp.First_Name__c)){

                return [select Id,Name,First_Name__c,Last_Name__c,createdDate from Applicant__c WHERE First_Name__c like : objApp.First_Name__c+'%'];
            }else {
                return null;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled
      public static List<Applicant__c> deleteSelectedApplicantRecords(List<Id> appIDList, Applicant__c objApp){
        try {
         Database.delete([select id from Applicant__c where Id IN : appIDList] ,false);
         return [select Id, Name, First_Name__c, Last_Name__c,CreatedDate from Applicant__c where First_Name__c like : objApp.First_Name__c+'%'];
        } catch (Exception e) {
          throw new AuraHandledException(e.getMessage());
        }
      }


   

  }