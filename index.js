$(document).ready(function() {
    // 檢查 cookie 是否存在
    const isLoggedIn = checkLoginStatus();
  
    // 根據用戶登入狀態，更新會員中心連結
    updateMemberCenterLink(isLoggedIn);
  
    // 點擊「會員中心」連結的事件處理函式
    $("a.gotomember").click(function(event) {
      if (!isLoggedIn) {
        // 如果用戶未登入，取消點擊事件預設行為，並導向 login.html 頁面
        event.preventDefault();
        window.location.href = "login.html";
      }
      // 如果用戶已登入，點擊事件會繼續執行，用戶會導向 index_member.html 頁面
    });
  
    function checkLoginStatus() {
      // 檢查 cookie 中是否有記錄登入狀態，這裡使用一個簡單的假設，可以根據您實際的登入方式進行更複雜的判斷。
      // 假設在 cookie 中有名為 "loggedIn" 的屬性，其值為 "true" 表示已登入，否則表示未登入。
      const loggedInCookie = getCookie("loggedIn");
      return loggedInCookie === "true";
    }
  
    function updateMemberCenterLink(isLoggedIn) {
      // 根據用戶登入狀態更新「會員中心」連結
      const memberCenterLink = $("a.gotomember:eq(0)"); // 取得「會員中心」的連結元素
      if (isLoggedIn) {
        // 如果用戶已登入，將連結改為導向 index_member.html
        memberCenterLink.attr("href", "index_member.html");
      } else {
        // 如果用戶未登入，將連結改為導向 login.html
        memberCenterLink.attr("href", "login.html");
      }
    }
  
    function getCookie(name) {
      // 取得指定名稱的 cookie
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const txtContentElement = document.getElementById('news');
    const txtFilePath = 'news.txt'; // 替换为你的 .txt 文件名

    fetch(txtFilePath)
        .then(response => response.text())
        .then(text => {
            txtContentElement.innerText = text;
        })
        .catch(error => {
            txtContentElement.innerText = '无法读取文件内容：' + error.message;
        });
});