mainTableCols = [{
    checkbox: true
}, {
    field: 'hcType',
    title: '種類'
}, {
    field: 'hcNo',
    title: '棟樓編號'
}, {
    field: 'hcPingSu',
    title: '登記坪數'
}, {
    field: 'hcContractPingSu',
    title: '銷售坪數'
}, {
    field: 'hcGiftPingSu',
    title: '贈送坪數'
}, {
    field: 'hcListPrice',
    title: '定價'
}, {
    field: 'hcDealMoney',
    title: '售價'
}, {
    field: 'hcMynusPrice',
    title: '差價'
}, {
    field: 'hcClearMoney',
    title: '淨售'
}, {
    field: 'hcFloorPrice',
    title: '底價'
}, {
    field: 'hcBalaPrice',
    title: '超(底)價'
}, {
    field: 'hcCommPrice',
    title: '贈佣'
}, ];

$(function() {
    let $table1 = $("#table1");
    bsTableInit($table1, mainTableCols);

    let $btnAdd1 = $("#buttonAdd1");
    $btnAdd1.click(function() {
        $table1.bootstrapTable('insertRow', {
            index: 0,
            row: {
                hcType: '',
                hcNo: '',
                hcPingSu: '',
                hcContractPingSu: '',
                hcGiftPingSu: '',
                hcListPrice: '',
                hcDealMoney: '',
                hcMynusPrice: '',
                hcClearMoney: '',
                hcFloorPrice: '',
                hcBalaPrice: '',
                hcCommPrice: '',
            }
        });
    });

    let $getTableData = $("#getTableData");
    $getTableData.click(function() {
        alert(JSON.stringify($table1.bootstrapTable('getData')));
    });

});