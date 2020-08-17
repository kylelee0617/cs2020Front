mainTableCols = [{
    checkbox: true
}, {
    field: 'chisu',
    title: '期數'
}, {
    field: 'priceKind',
    title: '款項'
}, {
    field: 'priceName',
    title: '款項名稱'
}, {
    field: 'per',
    title: '百分比'
}, {
    field: 'price',
    title: '金額'
}, {
    field: 'payType',
    title: '付款方式'
}, {
    field: 'type',
    title: '狀態'
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
                patType: '',
                type: '',
            }
        });
    });

    let $getTableData = $("#getTableData");
    $getTableData.click(function() {
        alert(JSON.stringify($table1.bootstrapTable('getData')));
    });

});