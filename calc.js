const httpStatus = require('http-status');
((calc) => {
    calc.sum = function (a, b) {
        return a + b;

    }
    calc.sub = function (a, b) {
        return a - b;
    }

    calc.login = async (request) => {
        const isValid = await calc.loginValidation(request);
        if (isValid == false) {
            return {
                status: httpStatus.BAD_GATEWAY, message: "Username is required!"
            }
        }
        if (request.name == 'ram') {
            console.log("success");
            return request.username
        }
    }

    calc.loginValidation = async (request) => {
        if (request.name == "ram") {
            return true;
        }
        return false;
    }


})(module.exports)