let Calc = function (param) {

    let add = function () {

        let pickup = document.querySelector('.pickup');
        pickup.classList.add('add');

        pickup.addEventListener('click', function () {
            let wiev = document.querySelector('.wiev');
            wiev.classList.add('add');
        });
        init();
    };
    setTimeout(add, 1000);

    let init = function () {
        let pay = document.querySelector('.pay');
        pay.addEventListener('click', function () {
    
            let draft = function (param) {
                param = param ;

                let number = document.querySelectorAll('.app .wiev .draft input[type="number"]'),
                    radio = document.querySelectorAll('.app .wiev .draft input[type="radio"]'),
                    radioValue = '',
                    resDraft ;

                radio.forEach(function (element) {
                    if (element.checked) radioValue = element.value;
                });
                let numberValue = Object.values(number);
                    resDraft = ((numberValue[0].value * radioValue) + (numberValue[1].value * radioValue) + (numberValue[2].value) * radioValue) * param;
                //return resDraft;
               console.log(resDraft);
            };
            
            let street = function (param) {
                param = param ;

                let number = document.querySelectorAll('.app .wiev .street input[type="number"]'),
                    radio = document.querySelectorAll('.app .wiev .street input[type="radio"]'),
                    radioValue = '',
                    resStreet;

                radio.forEach(function (element) {
                    if (element.checked) radioValue = element.value;
                });
                let numberValue = Object.values(number);
                    resStreet = (numberValue[0].value * radioValue) * param;
               
                console.log(resStreet);
            };

            let clean = function (param) {
                param = param ;

                let number = document.querySelectorAll('.app .wiev .clean input[type="number"]'),
                    resClean,
                    numberValue = Object.values(number);
                    
                   resClean = ((numberValue[0].value * param) + (numberValue[1].value) + (numberValue[2].value) + (numberValue[3].value) + (numberValue[4].value) + (numberValue[5].value)) * param ;
                    console.log(resClean);
            };

            let money = function () {
                //const dollar = 2.4;
                //const euro = 2.8;
                //const ruble = 1;
                let checkbox = document.querySelectorAll('.app .wiev ul li input[type="checkbox"]'),
                    checkboxElem;
                checkbox.forEach(function (element) {
                    if(element.checked) checkboxElem = element.value ;
                });
               return checkboxElem;   //console.log(checkboxElem);
            };
            
            draft(money());
            street(money());
            clean(money());
           
        });

    };

};

window.addEventListener('load', function () {
    let calc = new Calc('app1');
});