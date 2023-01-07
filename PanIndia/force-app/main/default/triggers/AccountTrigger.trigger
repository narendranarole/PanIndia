trigger AccountTrigger on Account (before insert) {

    AccountTriggerHandler.updateRating(Trigger.New);
    
}