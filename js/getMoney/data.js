mainTableCols = [{
    checkbox: true
}, {
    field: 'chisu',
    title: '匯入信託'
}, {
    field: 'priceKind',
    title: '戶名'
}, {
    field: 'priceName',
    title: '存匯代號'
}, {
    field: 'per',
    title: '項目'
}, {
    field: 'price',
    title: '期數'
}, {
    field: 'type',
    title: '預計金額'
}, {
    field: 'type',
    title: '幣別'
}, {
    field: 'type',
    title: '匯入之國家或地區'
}, {
    field: 'type',
    title: '實繳金額'
}, {
    field: 'type',
    title: '確認'
}, {
    field: 'type',
    title: '預計金額'
}, {
    field: 'type',
    title: '實際金額'
}, {
    field: 'type',
    title: '預計金額(土)'
}, {
    field: 'type',
    title: '實際金額(土)'
}, {
    field: 'type',
    title: '預計金額(優車房)'
}, {
    field: 'type',
    title: '實際金額(優車房)'
}, {
    field: 'type',
    title: '預計金額(優車土)'
}, {
    field: 'type',
    title: '實際金額(優車土)'
}, {
    field: 'type',
    title: '實際日'
}, {
    field: 'type',
    title: '處理日'
}, {
    field: 'type',
    title: '通知日'
}, {
    field: 'type',
    title: '預計日'
}, {
    field: 'type',
    title: '帳號'
}, {
    field: 'type',
    title: '備註'
}, {
    field: 'type',
    title: '流水號'
}, ];


$(function() {
    let $table1 = $("#table1");
    bsTableInit($table1, mainTableCols);

    let $btnAdd1 = $("#buttonAdd1");
    $btnAdd1.click(function() {
        $table1.bootstrapTable('insertRow', {
            index: 0,
            row: {
                chisu: '',
                priceKind: '',
                priceName: '',
                per: '',
                price: '',
                type: '',
            }
        });
    });

    let $getTableData = $("#getTableData");
    $getTableData.click(function() {
        alert(JSON.stringify($table1.bootstrapTable('getData')));
    });

});