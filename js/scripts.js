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
          /*  let inputelem = document.querySelectorAll('.app .wiev ul li input[type="number"]'),
                radioelem = document.querySelectorAll('.app .wiev ul li input[type="radio"]'),
                valueRadio = '',
                valueInput = '',
                resultat = '';

            radioelem.forEach(function (elem) {
                if (elem.checked) valueRadio = elem.value;
                console.log(valueRadio);
                console.log(elem);
            });
            inputelem.forEach(function (elem) {
                valueInput = elem.value;
            });*/
                  
                //checkboxelem = document.querySelectorAll('.app .wiev ul li input[type="checkbox"]');
               let numberelem = document.querySelectorAll('.app .wiev ul li input[type="number"]'),
                    radioelem = document.querySelectorAll('.app .wiev ul li input[type="radio"]');
                    let radio = '';
                radioelem.forEach(function (elem) {
                    if(elem.checked) radio = elem.value ;
                });
                console.log(radio);
        });
         
    };

};

window.addEventListener('load', function () {
    let calc = new Calc('app1');
});