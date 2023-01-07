trigger AccountNameDuplicate on Account (before insert,before update) {

    Set<String> accNameSet = new Set<String>();

    for(Account objAcc :trigger.new)
    {
        if(trigger.isInsert && trigger.isBefore)
        {
            if(String.isNotBlank(objAcc.Name))
            {
                accNameSet.add(objAcc.Name);
            }
            
        }
        if(trigger.isUpdate && trigger.isBefore)
        {
            if(trigger.oldMap.get(objAcc.id).Name != objAcc.Name)
            {
                if(String.isNotBlank(objAcc.Name))
                {
                    accNameSet.add(objAcc.Name);
                }
                
            }
            
        }

       
    }
    Map<String,Account> accMap =new Map<String,Account>();
    if(!accNameSet.isEmpty())
    {
        for(Account objAcc : [select id ,Name from Account WHERE Name  In : accNameSet])
        {
            accMap.put(objAcc.Name,objAcc);
        }

    }

    if(!accMap.isEmpty())
    {
        for(Account objAcc: trigger.new)
        {
            if(accMap.containsKey(objAcc.Name))
            {
                ObjAcc.addError('Duplicate Record Exist');
            }
        }
    }

}