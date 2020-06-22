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
            let inputvalue = '',
                radiovalue = '',
                resultat = '',
                sum = 0 ;
                

            let inputelem =document.querySelectorAll('.app .wiev ul li input');
            inputelem.forEach(function (element) {
                if(element.checked) radiovalue = element.value ;
                if(element.getAttribute('name') == 'draft') inputvalue = element.value ;
               

               console.log(inputvalue);
               console.log(radiovalue);
            });
         
        });

    };
}

window.addEventListener('load', function () {
    let calc = new Calc('app1');
});