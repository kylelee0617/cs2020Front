$(function() {
    let $tableCust = $("#tableCust");
    bsTableInit($tableCust, mainTableCols);

    let $tableBen = $("#tableBen");
    bsTableInit($tableBen, colsBen);

    let $btnAdd = $("#buttonAddCust");
    $btnAdd.click(function() {
        $tableCust.bootstrapTable('insertRow', {
            index: 0,
            row: {
                no: '',
                customType: '',
                shinto: '',
                customNo: '',
                customName: '',
                birthday: '',
                eName: '',
                countryName: '',
                majorName: '',
                positionName: '',
                doorNo: '',
                phone: '',
                mphone: '',
                email: '',
                address1: '',
                address2: '',
                fundsSrc: '',
                foreignerReason: '',
                agentReason: '',
                amlLV: '',
                amlResult: '',
            }
        });
    });

    let $btnAddBen = $("#buttonAddBen");
    $btnAddBen.click(function() {
        $tableBen.bootstrapTable('insertRow', {
            index: 0,
            row: {
                no: '',
                customName: '',
                benType: '',
                benName: '',
                benNo: '',
                benBirthday: '',
                benCountryName: '',
                benType2: '',
            }
        });
    });

    let $saveData = $("#saveData");
    $saveData.click(function() {
        alert(JSON.stringify($tableCust.bootstrapTable('getData')));
    });

});