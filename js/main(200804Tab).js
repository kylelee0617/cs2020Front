let mainTableCols;
let funcName;

$(function() {
    init();

    $(document).on("click", ".dropdown-item", function(event) {
        let url = $(this).attr("href");
        // console.log(url)
        if (url !== "#") goPage(url);
    });

    $(document).on('click', '.table tr', function(event) {
        $(".table tr").removeClass("table-active");
        $(this).addClass("table-active");
        let td = $(this).children("td");
    });

    $(document).on("click", ".tabMenu", function(event) {
        let $this = $(this);

        $("#tabContent").hide();

        $(".tabMenu").removeClass("active");
        $(this).addClass("active");

        var go = $this.attr("go");
        $("#tabContent").load(go).fadeIn(300);

        localStorage.setItem(funcName + "_Tab", go);
    })

});

// 初始化
function init() {
    $("#navBarMain").load("./subMenu.html");

    // goPage('./payNotice/payNotice.html');
    goPage('./custData/custData.html');
    // goPage('./getMoney/getMoney.html');
}

//功能初始化
function funcInit() {
    var funcTab = localStorage.getItem(funcName + "_Tab");
    if (funcTab == null || funcTab == "") {
        $(".tabMenu").first().click();
    } else {
        //選定menu
        $("[go='" + funcTab + "']").click();
    }
}

//換頁
function goPage(page) {
    $("#introSection").load(page);
    //換頁後滑動到最上面
    $("html,body").stop().animate({
        scrollTop: 0
    }, 300);
}

// 更新麵包屑
function updBread(breadId) {
    $(".breadcrumb-item").last().text(breadId);
}

// 暫時沒用
$("#goBackBtn").click(function() {
    $("html,body").stop().animate({
        scrollTop: 0
    }, 300);
})