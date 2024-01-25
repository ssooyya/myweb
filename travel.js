//슬라이드바
$(document).ready(function(){
    $('.carousel').carousel({   //carousel함수
        interval: 2000          //자동슬라이드
    });
});
//메뉴 토글바
function toggle(){
    const toggleBtn = document.querySelector(".navbar_toggleBtn");
    const menu = document.querySelector(".navbar_menu");
    const icon = document.querySelector('.navbar_icon');
    //토글버튼 클릭시 메뉴바 보이게
    toggleBtn.addEventListener('click', () => { 
        menu.classList.toggle('active');
        icon.classList.toggle('active');
    });
}
//로그인 유효성
function signin(){
    const frm = document.forms['signin-form'];
    //이메일 정규식
    var emailPat = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    // 비밀번호 정규식
    var pwJ = /^[A-Za-z0-9]{4,12}$/; 
    let email = document.getElementsByName('userEmail')[0].value.trim();
    let pw = document.getElementsByName('userPw')[0].value.trim();
    if(!emailPat.test(email)){
        alert("이메일을 다시 입력하세요");
        // document.getElementsByName('userEmail').focus();
        return false;
    }
    if(!pwJ.test(pw)){
        alert("비밀번호를 다시 입력하세요");
        // document.getElementsByName('userPw').focus();
        return false;
    }
    //submit클릭
    //frm.submit();
    return true;
}

//회원가입 유효성
function signup(){
    const frm2 = document.forms['signup-form'];
    //이메일 정규식
    var emailPat = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    // 비밀번호 정규식
    var pwJ = /^[A-Za-z0-9]{4,12}$/; 
    // 이름 정규식
    var nameJ = /^[가-힣]{2,6}$/;
    // 휴대폰 번호 정규식
    var phoneJ = /^(01[016789]{1})?[0-9]{3,4}?[0-9]{4}$/;
    let email = document.getElementsByName('email')[0].value.trim();
    let pw = document.getElementsByName('pw')[0].value.trim();
    let pwck = document.getElementsByName('pwck')[0].value.trim();
    let name = document.getElementsByName('username')[0].value.trim();
    let phone = document.getElementsByName('mobile')[0].value.trim();
    //이메일 확인
    if(!emailPat.test(email)){
        alert("이메일을 다시 입력하세요");
        // document.getElementsByName('email').focus();
        return false;
    }
    //비밀번호
    if(!pwJ.test(pw) || !pwJ.test(pwck)){
        alert("비밀번호를 다시 입력하세요");
        // document.getElementsByName('pw').focus();
        return false;
    }
    //비밀번호 확인
    if(pw != pwck){
        alert("비밀번호가 일치하지 않습니다.");
        // document.getElementsByName('pwck').focus();
        return false;
    }
    //이름   
    if(!nameJ.test(name)){
        alert("이름을 다시 입력해주세요");
        // document.getElementsByName('username').focus();
        return false;
    }
    //전화번호 확인
    if(!phoneJ.test(phone)){
        alert("전화번호를 다시 입력해주세요");
        // document.getElementsByName('mobile').focus();
        return false;
    }
    return true;
}

//map 위치
// var map_key='43b3cc3fc3a95a32e488271fc4445410';
// function showPosition(){
//     locationx = x;
//     locationy = y;
//     mylocationx = x;
//     mylocationy = y;
//     mayCenterlocationx = x;
//     mayCenterlocationy = y;
//     getAddress(locationx, locationy);
// }
// function showPositionNot(x, y){
//     if(x == 0) x = 37.566470;
//     if(y == 0) y = 126.977963
// }