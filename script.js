function generateCaptcha(){
    var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha='';
    for(var i=0;i<6;i++){
        captcha +=chars.charAt(Math.floor(Math.random() * chars.length));

    }
    return captcha;
}
function refreshCaptcha(){
    var captcha = generateCaptcha();
    document.getElementById('captcha').textContent = captcha;
    document.getElementById('captcha-input').value = '';
    document.getElementById('result').textContent = '';
}

document.getElementById('refresh-btn').addEventListener('click',function(){
    refreshCaptcha()
});
document.getElementById('verify-btn').addEventListener('click' , function(){
    var captchaText = document.getElementById('captcha').textContent;
    var userInput = document.getElementById('captcha-input').value ;
    if(userInput === captchaText){
        document.getElementById('result').textContent = 'CAPTCHA verification successfull';
    }
    else{
        document.getElementById('result').textContent = 'CAPTCHA verification failed . please try again .';
    }
});
refreshCaptcha();