let Calc = function (param) {
    param = param;

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
                param = param;

                let number = document.querySelectorAll('.app .wiev .draft input[type="number"]'),
                    radio = document.querySelectorAll('.app .wiev .draft input[type="radio"]'),
                    radioValue = '',
                    resDraft;

                radio.forEach(function (element) {
                    if (element.checked) radioValue = element.value;
                });
                let numberValue = Object.values(number);
                resDraft = Math.round(((numberValue[0].value * radioValue) + (numberValue[1].value * radioValue) + (numberValue[2].value) * radioValue) * param);

                //console.log(resDraft);
                return resDraft;

            };

            let street = function (param) {
                param = param;

                let number = document.querySelectorAll('.app .wiev .street input[type="number"]'),
                    radio = document.querySelectorAll('.app .wiev .street input[type="radio"]'),
                    radioValue = '',
                    resStreet;

                radio.forEach(function (element) {
                    if (element.checked) radioValue = element.value;
                });
                let numberValue = Object.values(number);
                resStreet = Math.round((numberValue[0].value * radioValue) * param);

                //console.log(resStreet);
                return resStreet;
            };

            let clean = function (param) {
                param = param;

                let number = document.querySelectorAll('.app .wiev .clean input[type="number"]'),
                    resClean,
                    numberValue = Object.values(number);

                resClean = Math.round(((numberValue[0].value) + (numberValue[1].value) + (numberValue[2].value) + (numberValue[3].value) + (numberValue[4].value) + (numberValue[5].value)) * param);

                //console.log(resClean);
                return resClean;
            };

            let money = function () {
                //const dollar = 2.4;
                //const euro = 2.8;
                //const ruble = 1;
                let checkbox = document.querySelectorAll('.app .wiev ul li input[type="checkbox"]'),
                    checkboxElem;
                checkbox.forEach(function (element) {
                    if (element.checked) checkboxElem = element.value;
                });

                //console.log(checkboxElem);
                return checkboxElem;
            };

            let showInit = function (param) {
                param = param;

                let divWraper = document.createElement('div'),
                    divElem1 = document.createElement('div'),
                    divElem2 = document.createElement('div'),
                    divElem3 = document.createElement('div');

                divElem1.innerHTML = param[0];
                divElem2.innerHTML = param[1];
                divElem3.innerHTML = param[2];

                divWraper.appendChild(divElem1);
                divWraper.appendChild(divElem2);
                divWraper.appendChild(divElem3);

                divWraper.classList.add('resultat');

                let site = document.querySelector('.site');
                site.appendChild(divWraper);

                console.log(divWraper);
            };
            showInit([draft(money()), street(money()), clean(money())]);
        });

    };

};

window.addEventListener('load', function () {
    let calc = new Calc('app1');
});