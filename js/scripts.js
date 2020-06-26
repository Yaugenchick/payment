 function calc (param) {
    param = param || null;

    let add = function () {

        let pickup = document.querySelector ('.pickup');
        pickup.classList.add ('add');

        pickup.addEventListener ('click', function () {
            let wiev = document.querySelector ('.wiev');
            wiev.classList.add ('add');
        });
        let close = document.querySelector ('.app .wiev .close');
        close.addEventListener ('click', function () {
            let wievClose = document.querySelector ('.app .wiev');
           
            wievClose.classList.remove ('add');
            pickup.classList.remove ('add');
            window.location.reload ();
        });

        init ();
    };
    setTimeout (add, 1100);

    let init = function () {
        let pay = document.querySelector ('.pay');
        pay.addEventListener ('click', function () {

            let draft = function (param) {
                param = param || null;

                let number = document.querySelectorAll ('.app .wiev .draft input[type="number"]'),
                    radio = document.querySelectorAll ('.app .wiev .draft input[type="radio"]'),
                    radioValue = '';
                    
                radio.forEach (function (element) {
                    if (element.checked) radioValue = element.value;
                });
        
                let numberValueDraft,
                    resDraft = 0,
                    sum = 0;
                number.forEach(function(element){
                    numberValueDraft = element.value ;
                    sum = Math.round((numberValueDraft * radioValue) / param );
                    resDraft += sum ;
                });

                if(!numberValueDraft && !radioValue && !param ) return 0;
                
                return resDraft;

            };

            let street = function (param) {
                param = param || null;

                let number = document.querySelectorAll ('.app .wiev .street input[type="number"]'),
                    radio = document.querySelectorAll ('.app .wiev .street input[type="radio"]'),
                    radioValue = '';
               
                radio.forEach (function (element) {
                    if (element.checked) radioValue = element.value;
                });
              
                let numberValueStreet,
                    resStreet = 0,
                    sum = 0 ;

                    number.forEach(function(element) {
                        numberValueStreet = element.value ;
                        sum = Math.round((numberValueStreet * radioValue) / param );
                        resStreet += sum ;
                    });

                    if(!numberValueStreet && !radioValue && !param) return 0 ;

                return resStreet;
            };

            let clean = function (param) {
                param = param || null;
                const powerCabel = 6 ,
                      cabel = 3 ,
                      pribor = 7 ,
                      camera = 5 ;  

                let number = document.querySelectorAll ('.app .wiev .clean input[type="number"]'),
                    resClean = 0,
                    numberValue;

                    numberValue = Object.values(number);
                    
                    if(!numberValue && !param) return 0;

                    resClean = Math.round (((numberValue[0].value * cabel) + (numberValue[1].value * powerCabel) + (numberValue[2].value * cabel) + (numberValue[3].value * cabel) + (numberValue[4].value * pribor) + (numberValue[5].value * camera)) / param );

                  

                return resClean;
            };

            let money = function () {
             
                let checkbox = document.querySelectorAll ('.app .wiev ul li input[type="checkbox"]'),
                    checkboxElem ;
                    
                    checkbox.forEach (function (element) {
                    if (element.checked) checkboxElem = element.value;

                });

                return checkboxElem;
            };

            let showInit = function (param) {
                param = param || null;
               
                let divWraper = document.createElement ('div'),
                    divElem1 = document.createElement ('div'),
                    divElem2 = document.createElement ('div'),
                    divElem3 = document.createElement ('div'),
                    buttonElem = document.createElement ('button');

                    buttonElem.style = `position: absolute;
                                        top: 10px;
                                        right: 10px;
                                        color: #fff;
                                        border: 2px solid #fff;
                                        border-radius: 3px;
                                        background-color: blue;
                                        width: 20px;
                                        hight: 10px;`     

                    divElem1.innerHTML = 'черновые работы' + ' ' + param[0];
                    divElem2.innerHTML = 'ввод питания' + ' ' + param[1];
                    divElem3.innerHTML = 'чистовые работы' + ' ' + param[2];
                    buttonElem.innerHTML = 'x';

                    divWraper.appendChild (divElem1);
                    divWraper.appendChild (divElem2);
                    divWraper.appendChild (divElem3);
                    divWraper.appendChild (buttonElem);

                    divWraper.classList.add ('resultat');

                let site = document.querySelector ('.site');
                site.appendChild (divWraper);

                let del = function(){ 
                    let delElem = document.querySelector ('.site .resultat'), 
                        delButtonElem = document.querySelector ('.site .resultat');  
                        delButtonElem.remove (delElem);
                }
                
                divWraper.addEventListener ('click', del);
                    
            };
            showInit ( [draft(money()), street(money()), clean(money())] );
        });

    };

};

window.addEventListener ('load', function () {
    calc ('app1');
});