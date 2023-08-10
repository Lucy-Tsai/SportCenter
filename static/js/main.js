// 會員登入轉到忘記密碼
$("#forgotpassword").on("click", function(e) {
    e.preventDefault();
    window.location.href = "{{ url_for('forgotPassword') }}";
});

// 會員登入轉到註冊頁面
$("#register").on("click", function(e) {
    e.preventDefault();
    window.location.href = "{{ url_for('register') }}";
});

$(function(){
    $("#Backtomember_index").on("click",function(){
        window.location.href = "{{ url_for('member_index') }}";
    });
});


//返回交易歷史
$(function(){
    $("#checkTransaction").on("click",function(){
        window.location.href="{{ url_for('transaction') }}";
    })
}) 



// 員工登入轉到註冊頁面
$("#staff_register").on("click", function() {
    window.location.href = "staff_register.html";
});

// 從會員交易紀錄轉到管理中心
$(function(){
    $("#Backtoindex_staff").on("click",function(){
        window.location.href="index_staff.html";
    })
})

// 從退費頁面轉到交易紀錄
$(function(){
    $("#Backtostaff_transaction").on("click",function(e){
        e.preventDefault();
        window.location.href="{{ url_for('staff_transaction') }}";
    })
})

//會員資料轉到修改基本資料
$(function(){
    $("#editProfile").on("click",function(){
        window.location.href="{{url_for('edit_profile')}}";
    })
}) 

$(function(){
    $("#editPassword").on("click",function(){
        window.location.href="change_password.html";
    })
}) 

// 首頁跑馬燈文字訊息來源

window.addEventListener('DOMContentLoaded', () => {
    const txtContentElement = document.getElementById('news');
    const txtFilePath = '../static/txt/news.txt'; // 替换为你的 .txt 文件名

    fetch(txtFilePath)
        .then(response => response.text())
        .then(text => {
            txtContentElement.innerText = text;
        })
        .catch(error => {
            txtContentElement.innerText = '無法讀取資料：' + error.message;
        });
});


// check_in_class計算總學員數
$(function(){
    $("#senttotal").on("click",function(){
        let checkedboxes = $('input:checkbox:checked').length;
        let checkedboxe = $('input:checkbox:not(":checked")').length;
        alert("點名完成！\n今日總上課人數："+ checkedboxes +" \n今日未到人數："+ checkedboxe+ "\n請記得簽到！");
    })
})


// 表格過濾關鍵字
$(document).ready(function() {
    $("#filterInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".data-row").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
