$(document).ready(function () {
    document.getElementById('password').addEventListener('keyup', function () {
        const password = document.getElementById('password').value;

        const upperCaseResult = uppercaseChecker(password);
        document.getElementById('upperCaseResult').innerHTML = upperCaseResult;

        const lengthResult = lengthChecker(password);
        document.getElementById('lengthResult').innerHTML = lengthResult;

        const numberResult = numberChecker(password);
        document.getElementById('numberResult').innerHTML = numberResult;

        const alphaNumericResult = alphaNumericChecker(password);
        document.getElementById('alphaNumericResult').innerHTML = alphaNumericResult;
        
    })
})


function uppercaseChecker(password) {
    if (password.trim().length === 0) {
        document.getElementById('upperCaseResult').style.color = 'red';
        return `<i class="fas fa-x"></i><span>Password cannot have space</span>`;
    } else if (password.charAt(0) !== password.charAt(0).toUpperCase()) {
        document.getElementById('upperCaseResult').style.color = 'red';
        return `<i class="fas fa-x"></i><span>Password must start with a uppercase</span>`;
    } else {
        document.getElementById('upperCaseResult').style.color = 'green';
        return `<i class="fas fa-check"></i><span>Password starts with a uppercase</span>`;
    }

    return;
}

function lengthChecker(password) {
    if (password.length <= 6) {
        document.getElementById('lengthResult').style.color = 'red';
        return `<i class="fas fa-x"></i><span>Password must be more than 6 characters</span>`;
    } else {
        document.getElementById('lengthResult').style.color = 'green';
        return `<i class="fas fa-check"></i><span>Password is more than 6 characters</span>`;
    }
}

function numberChecker(password) {
    let number = /[0-9]/gi

    if (password.match(number)) {
        document.getElementById('numberResult').style.color = 'green';
        return `<i class="fas fa-check"></i><span>Password contains a number</span>`;
    } else {
        document.getElementById('numberResult').style.color = 'red';
        return `<i class="fas fa-x"></i><span>Password must contain a number</span>`;
    }
}

function alphaNumericChecker(password) {
    let symbols = /\w/g ;

    if (password.match(symbols)) {
        document.getElementById('alphaNumericResult').style.color = 'green';
        return `<i class="fas fa-check"></i><span>Password contains an alphanumeric symbol</span>`;
    } else {
        document.getElementById('alphaNumericResult').style.color = 'red';
        return `<i class="fas fa-x"></i><span>Password does not contain an alphanumeric symbol</span>`;
    }
}