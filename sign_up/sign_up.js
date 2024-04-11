const name_message = document.getElementById("name_message");
const email_message = document.getElementById("email_message");
const age_message = document.getElementById("age_message");
const password_message = document.getElementById("password_message");
const password_validation_message = document.getElementById("password_validation_message");

const close = document.getElementById("close");
const success_div = document.getElementsByClassName("success")[0];

window.onload = function () {
    // 가입하기 버튼 클릭 시 실행되는 함수
    document.getElementById("sign_up").onclick = function () {
        // 이름 입력값 가져오기
        var userName = document.getElementById("user_name").value;
        // 이메일 입력값 가져오기
        var email = document.getElementById("email").value;
        // 나이 입력값 가져오기
        var age = document.getElementById("user_age").value;
        // 비밀번호 입력값 가져오기
        var password = document.getElementById("user_password").value;
        // 비밀번호 확인 입력값 가져오기
        var passwordValidation = document.getElementById("user_password_validation").value;
        // 문자열 확인값
        var regex = /^[a-zA-Z]+$/;
        var regexkr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

        // 버튼확인

        var namech = 0;
        var emailch = 0;
        var agech = 0;
        var passwordch = 0;
        var password_validationch = 0;

        // 이름 확인
        if (userName.trim() === "") {
            name_message.style.color = 'red';
            name_message.innerHTML = "필수 입력 사항입니다!";
            namech = 0;
        }
        else if (!regex.test(userName) && !regexkr.test(userName)) {
            name_message.style.color = 'red';
            name_message.innerHTML = "필수 입력 사항입니다!"
            namech = 0;
        }
        else {
            name_message.style.color = 'green';
            name_message.innerHTML = "멋진 이름이네요!";
            namech = 1;
        }

        // 이메일 유효성 검사
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            email_message.style.color = 'red';
            email_message.innerHTML = "올바른 이메일 형식이 아닙니다!";
            emailch = 0;
        }
        else if (email.trim() === "") {
            email_message.style.color = 'red';
            email_message.innerHTML = "필수 입력 사항입니다!";
            emailch = 0;
        }
        else {
            email_message.style.color = 'green';
            email_message.innerHTML = "올바른 이메일 형식입니다!";
            emailch = 1;
        }

        // 나이 확인
        if (age.trim() === "") {
            age_message.style.color = 'red';
            age_message.innerHTML = "필수 입력 사항입니다!";
            agech = 0;
        }
        else if (isNaN(age)) {
            age_message.style.color = 'red';
            age_message.innerHTML = "나이는, 숫자를 입력받아야 합니다.";
            agech = 0;
        }
        else if (parseInt(age) < 0) {
            age_message.style.color = 'red';
            age_message.innerHTML = "나이는 음수가 될 수 없습니다.";
            agech = 0;
        }
        else if (parseInt(age) % 1 != 0) {
            age_message.style.color = 'red';
            age_message.innerHTML = "나이는 소수가 될 수 없습니다.";
            agech = 0;
        }
        else if (parseInt(age) > 0 && age <= 19) {
            age_message.style.color = 'red';
            age_message.innerHTML = "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
            agech = 0;
        }
        else {
            age_message.style.color = 'green';
            age_message.innerHTML = "올바른 나이 형식입니다!";
            agech = 1;
        }

        // 비밀번호 확인
        var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;
        if (password.trim() === "") {
            password_message.style.color = 'red';
            password_message.innerHTML = "필수 입력 사항입니다!";
            passwordch = 0;
        }
        else if (password.length < 4) {
            password_message.style.color = 'red';
            password_message.innerHTML = "비밀번호는 최소 4자리 이상이어야 합니다.";
            passwordch = 0;
        }
        else if (password.length > 12) {
            password_message.style.color = 'red';
            password_message.innerHTML = "비밀번호는 최대 12자리까지 가능합니다."
            passwordch = 0;
        }
        else if (!passwordRegex.test(password)) {
            password_message.style.color = 'red';
            password_message.innerHTML = "영아, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
            passwordch = 0;
        }
        else {
            password_message.style.color = 'green';
            password_message.innerHTML = "올바른 비밀번호입니다!";
            passwordch = 1;
        }

        // 비밀번호 확인이 비어 있는지 확인 및 비밀번호 일치 확인
        if (passwordValidation.trim() === "") {
            password_validation_message.style.color = 'red';
            password_validation_message.innerHTML = "비밀번호 확인을 입력하세요.";
            password_validationch = 0;
        }
        else if (password !== passwordValidation) {
            password_validation_message.style.color = 'red';
            password_validation_message.innerHTML = "비밀번호가 일치하지 않습니다.";
            password_validationch = 0;
        }
        else {
            password_validation_message.style.color = 'green';
            password_validation_message.innerHTML = "비밀번호가 일치합니다.";
            password_validationch = 1;
        }
        //가입하기 버튼 활성화 / 비활성화
        var sign_up_check = namech + emailch + agech + passwordch + password_validationch;

        if (sign_up_check == 5) {
            success_div.style.display = "flex";
        }
    };
    close.onclick = function () {
        success_div.style.display = "none";
    };
};

