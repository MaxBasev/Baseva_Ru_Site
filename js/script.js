document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let inputPhone = document.getElementById('user-phone'),
        inputPhoneLength = 0,
        mainForm = document.getElementById('main-form');
    
    setTimeout(() => {
        mainForm.classList.add('visible');
    }, 400);


    inputPhone.addEventListener('click', function() {
        if (this.value == '') {
            this.value = '+7(';
            inputPhoneLength = 3;
        }
    });
    inputPhone.addEventListener('focus', function() {
        if (this.value == '') {
            this.value = '+7(';
            inputPhoneLength = 3;
        }
    });
    inputPhone.addEventListener('blur', function() {
        if (this.value == '+7(') {
            this.value = '';
            inputPhoneLength = 0;
        }
    });
    inputPhone.addEventListener('input', function() {
        if (this.value.length > inputPhoneLength) {
            inputPhoneLength = this.value.length;
            switch(inputPhoneLength) {
                case 0:
                    this.value = '+7(';
                    inputPhoneLength = 3;
                    break;
                case 1:
                    let a = '+7(',
                        b = this.value;
                    this.value = a + b;
                    break;
                case 2:
                    this.value += '(';
                    inputPhoneLength = this.value.length;
                    break;
                case 6:
                    this.value += ')-';
                    inputPhoneLength = this.value.length;
                    break;
                case 7:
                    if (this.value[6] != ')') {
                        let b = ')-' + this.value[6],
                        a = this.value.slice(0, 6);
                        this.value = a + b; 
                        inputPhoneLength = this.value.length;
                    }
                    break;
                case 8:
                    if (this.value[7] != '-') {
                        let b = '-' + this.value[7],
                        a = this.value.slice(0, 7);
                        this.value = a + b; 
                        inputPhoneLength = this.value.length;
                    }
                    break;
                case 11:
                    this.value += '-';
                    inputPhoneLength = this.value.length;
                    break;
                case 12:
                    if (this.value[11] != '-') {
                        let b = '-' + this.value[11],
                        a = this.value.slice(0, 11);
                        this.value = a + b; 
                        inputPhoneLength = this.value.length;
                    }
                    break;
                default:
                    inputPhoneLength = this.value.length;
                    break;
            }
        } else {
            inputPhoneLength = this.value.length;
        }

    });

});