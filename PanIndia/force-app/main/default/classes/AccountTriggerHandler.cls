public class AccountTriggerHandler {

    public static void updateRating( List<Account> accList){
        
        for(Account objAcc :accList)
        {
            if(objAcc.Industry =='Media' || objAcc.Industry == 'Energy')
                objAcc.Rating = 'Hot';
        }
        
        
    }
}