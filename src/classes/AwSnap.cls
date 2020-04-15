global without sharing class AwSnap {

    public String strTest { get; set; }
    public List<Case> lstCases { get; set; }

    public void fetchCases() {
        lstCases = [SELECT Id FROM Case limit 1];
    }
}