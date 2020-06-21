let Calc = function (param) {
    // console.log(param);

    let add = function () {
        
        let pickup = document.querySelector('.pickup');
        pickup.classList.add('add');

        pickup.addEventListener('click', function () {
            let wiev = document.querySelector('.wiev');
            wiev.classList.add('add');
        });
        init();
    };
    setTimeout(add, 3000);

    let init = function () {
        let pay = document.querySelector('.pay');


        pay.addEventListener('click', function () {
            let inputelem = document.querySelectorAll('.app .wiev ul li input');

            inputelem.forEach(function (elem) {
                let inputelemValue = elem.value;
                console.log(inputelemValue);
            });
            let divelem = document.createElement('div');
            divelem.classList.add('resultat');
            console.log(divelem);
        });

    };
}

window.addEventListener('load', function () {
    let calc = new Calc('app1');
});