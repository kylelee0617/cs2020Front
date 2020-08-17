function bsTableInit($table, cols) {
    $table.bootstrapTable({
        url: 'data2.json',
        toolbar: '#toolbar',
        clickEdit: true,
        showToggle: false,
        pagination: false, //顯示分頁條
        showColumns: false,
        showPaginationSwitch: false, //顯示切換分頁按鈕
        showRefresh: false, //顯示刷新按鈕
        //clickToSelect: true,  //點擊row選中radio或CheckBox
        columns: cols,
        /**
         * @param {點擊列的 field 名稱} field
         * @param {點擊列的 value 值} value
         * @param {點擊列的整行數據} row
         * @param {td 元素} $element
         */
        onClickCell: onClickCell
    });

    function onClickCell(field, value, row, $element) {
        $element.attr('contenteditable', true);
        $element.blur(function() {
            let index = $element.parent().data('index');
            let tdValue = $element.html();

            saveData(index, field, tdValue);
        })
    }

    function saveData(index, field, value) {
        $table.bootstrapTable('updateCell', {
            index: index, //行索引
            field: field, //列名
            value: value //cell值
        })
    }

}