// 會員登入轉到忘記密碼
$("#forgotpassword").on("click", function() {
    window.location.href = "forgotpassword.html";
});

// 會員登入轉到註冊頁面
$("#register").on("click", function() {
    window.location.href = "register.html";
});

// 我的訂單返回會員中心
$(function(){
    $("#Backtomember_index").on("click",function(){
        window.location.href="index_member.html";
    })
})

//返回交易歷史
$(function(){
    $("#checkTransaction").on("click",function(){
        window.location.href="transaction.html";
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
    $("#Backtostaff_transaction").on("click",function(){
        window.location.href="staff_transaction.html";
    })
})

//會員資料轉到修改基本資料
$(function(){
    $("#editProfile").on("click",function(){
        window.location.href="edit_profile.html";
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
        alert("今日總上課人數："+ checkedboxes +"今日未到人數："+ checkedboxe);
    })
})

$(function(){
    $("#ckeckindone").on("click",function(){
        window.location.href="index_coach.html";

    })
})

// $(function(){
//     $("#changeinput").on("click",function(){
//         $("input[type='checkbox']").prop("checked",true);;
//     })
// })
