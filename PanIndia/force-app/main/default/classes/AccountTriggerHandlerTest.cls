@isTest
public class AccountTriggerHandlerTest {

    @isTest
    public static void updateRatingTest()
    {
        List<Account>accList = new List<Account>();
        
        for(Integer i=0; i<=5; i++)
        {
            Account objAcc = new Account();
            objAcc.Name ='test'+i;
            objAcc.Industry = 'Energy';
            accList.add(objAcc);
        }
        
        Test.StartTest();
        Database.insert(accList,false);
        Test.stopTest();
        
        List<Account> updatedAccList = [SELECT Id,Rating from Account WHERE Id =: accList[0].Rating];
        System.assertEquals('Hot',updatedAccList[0].Rating );
        
    }
    
}