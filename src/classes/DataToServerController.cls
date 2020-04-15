/**
 * Created by nagesingh on 7/31/2018.
 */

public class DataToServerController {

    @AuraEnabled
    public static void createStudent(String asdasd) {
        Account acc = new Account(Name = 'Test 1');
        Database.insert(acc, true);
        Database.setSavepoint();
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://jsonplaceholder.typicode.com/users');
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        System.debug(res);
    }

}