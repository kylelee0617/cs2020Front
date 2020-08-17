$(function() {
    let newCols = {
        no: '',
        customType: '',
        shinto: '',
        customNo: '',
        customName: '',
        eName: '',
        nickName: '',
        birthday: '',
        quickGui: '',
        doorNo: '',
        phone: '',
        mphone: '',
        address1: '',
        address2: '',
        no: '',
    };
    let $table = $('#table');
    let $button = $('#button');
    let $getTableData = $('#getTableData');

    $button.click(function() {
        $table.bootstrapTable('insertRow', {
            index: 0,
            row: newCols
        });
    });

    $table.bootstrapTable({
        url: 'data2.json',
        toolbar: '#toolbar',
        clickEdit: true,
        showToggle: false,
        pagination: false, //显示分页条
        showColumns: false,
        showPaginationSwitch: false, //显示切换分页按钮
        showRefresh: false, //显示刷新按钮
        //clickToSelect: true,  //点击row选中radio或CheckBox
        columns: cols,
        /**
         * @param {点击列的 field 名称} field
         * @param {点击列的 value 值} value
         * @param {点击列的整行数据} row
         * @param {td 元素} $element
         */
        onClickCell: function(field, value, row, $element) {
            $element.attr('contenteditable', true);
            $element.blur(function() {
                let index = $element.parent().data('index');
                let tdValue = $element.html();

                saveData(index, field, tdValue);
            })
        }
    });

    $getTableData.click(function() {
        alert(JSON.stringify($table.bootstrapTable('getData')));
    });

    function saveData(index, field, value) {
        $table.bootstrapTable('updateCell', {
            index: index, //行索引
            field: field, //列名
            value: value //cell值
        })
    }

});