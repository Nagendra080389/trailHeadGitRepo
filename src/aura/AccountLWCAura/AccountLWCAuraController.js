/**
 * Created by nagesingh on 3/23/2020.
 */

({
    doInit: function (component, event, helper) {
        const test = 'c:AccountTwoColumn';
        const lstComponentToBePassed = [
            ["c:accountPage_Aura", {"cardName": "DataTable Title"}], ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}],
            ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}],
            ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}],
            ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}], ["c:accountPage_Aura", {}],
            ["c:accountPage_Aura", {}]];
        if (lstComponentToBePassed.length > 0) {
            $A.createComponents(
                lstComponentToBePassed,
                function (components, status, errorMessage) {
                    let listToBePassed = [];
                    if (component.isValid()) {
                        if (components.length > 0) {
                            let lstAuraComponentsTabSet = [];
                            lstAuraComponentsTabSet.push(components[0]);
                            lstAuraComponentsTabSet.push(components[1]);
                            listToBePassed.push({key: 'TabSet', value: lstAuraComponentsTabSet, size: 6});
                            let lstAuraComponentsMultiTabSet = [];
                            lstAuraComponentsMultiTabSet.push(components[2]);
                            lstAuraComponentsMultiTabSet.push(components[3]);
                            let lstAuraComponentsMultiTabSet2 = [];
                            lstAuraComponentsMultiTabSet2.push(components[4]);
                            lstAuraComponentsMultiTabSet2.push(components[5]);
                            lstAuraComponentsMultiTabSet2.push(components[6]);
                            let innerList = [{key: 'Patient Care', value: lstAuraComponentsMultiTabSet}, {key: 'Claims Care', value: lstAuraComponentsMultiTabSet2}];
                            listToBePassed.push({key: 'MultiTabSet', value: innerList, size: 6});
                            const lstAuraComponentsTwoColumn = [];
                            lstAuraComponentsTwoColumn.push(components[7]);
                            lstAuraComponentsTwoColumn.push(components[8]);
                            listToBePassed.push({key: 'TwoColumn', value: lstAuraComponentsTwoColumn, size: 6});
                            const lstAuraComponentsOneColumn = [];
                            lstAuraComponentsOneColumn.push(components[9]);
                            lstAuraComponentsOneColumn.push(components[10]);
                            listToBePassed.push({key: 'OneColumn', value: lstAuraComponentsOneColumn, size: 12});
                        }
                        $A.createComponent(
                            test, {
                                "aura:id": "AuraTwoColumnMarkUp",
                                "mapAuraComponents": listToBePassed
                            },
                            function (newcomponent, status, errorMessage) {
                                if (component.isValid()) {
                                    const body = component.get("v.body");
                                    body.push(newcomponent);
                                    component.set("v.body", body);
                                }
                            }
                        );
                    }
                }
            );
        }
    }
});