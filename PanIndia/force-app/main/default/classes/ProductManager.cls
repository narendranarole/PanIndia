public with sharing class ProductManager {
   
    @AuraEnabled(cacheable= true)
    public static List<Product2> findAllProducts(){

        try {
                return[select id,Name,Family,ProductCode,Description from Product2 where IsActive=TRUE with SECURITY_ENFORCED];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
