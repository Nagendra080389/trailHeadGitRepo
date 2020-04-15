/**
 * Created by Nagendra on 10/2/2019.
 */

public with sharing class ForLoopSOQLWithMethod {

    public void testFetchDataFromAccount() {
        for (Integer i = 0; i < 2; i++) {
            fetchDataFromAccount();
        }
    }

    public List<Account> fetchDataFromAccount() {
        return [SELECT Id FROM Account];
    }

}