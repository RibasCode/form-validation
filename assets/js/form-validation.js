'use strict'




const formName = () => {




    var name = document.getElementById("name");
    // var name = document.getElementsByTagName("input")[0];




        name.addEventListener('focus',() => {
            var labelContent = document.getElementById("name-content");

            if(name.value == ""){
                labelContent.style.transform = "translateY(-160%)";
                labelContent.style.fontSize = "12px";
            }
        });


    function nameLabel(){
        var labelContentName = document.getElementById("form__label-name");

        if(name.value == ""){
            // que no faci res
            // labelContentName.style.borderBottom = "solid 1px  #9c9c9c";

        }else if(name.value != ""){
            labelContentName.style.borderBottom = "solid 1px  #7fff7f";

        }

    }


        name.addEventListener('focus',nameLabel());
        setInterval(nameLabel, 100);




        name.addEventListener('focusout', () => {

        var labelContent = document.getElementById("name-content");
        var labelContentName = document.getElementById("form__label-name");

        if(name.value != ""){
            labelContentName.style.borderBottom = "solid 1px  #7fff7f";
            labelContent.style.transform = "translateY(-160%)";

        }else if(name.value == ("")){
            labelContentName.style.borderBottom = "solid 1px  #9c9c9c";
            labelContent.style.transform = "translateY(0%)";
            labelContent.style.fontSize = "15px";

            return false;
        }

    });




}

// Hem apres que si agafem un element pel DOM de la seguent forma i amb un nom mes general que no sigui var email, podem estalviar codi ja que el repetim si ho fem per .getElementById
// var email = document.getElementsByTagName("input")[2];

// També ens estalviem els id=""; del html







const formCompany = () => {




    var company = document.getElementById("company");
    // var company = document.getElementsByTagName("input")[1];



        company.addEventListener('focus',() => {
            var labelContent = document.getElementById("company-content");

            if(company.value == ""){
                labelContent.style.transform = "translateY(-160%)";
                labelContent.style.fontSize = "12px";
            }
        });


    function companyLabel(){
        var labelContentCompany = document.getElementById("form__label-company");

        if(company.value == ""){
            // que no faci res
            // labelContentCompany.style.borderBottom = "solid 1px  #9c9c9c";

        }else if(company.value != ""){
            labelContentCompany.style.borderBottom = "solid 1px  #7fff7f";

        }

    }


        company.addEventListener('focus',companyLabel());
        setInterval(companyLabel, 100);




        company.addEventListener('focusout', () => {

        var labelContent = document.getElementById("company-content");
        var labelContentCompany = document.getElementById("form__label-company");

        if(company.value != ""){
            labelContentCompany.style.borderBottom = "solid 1px  #7fff7f";
            labelContent.style.transform = "translateY(-160%)";

        }else if(company.value == ("")){
            labelContentCompany.style.borderBottom = "solid 1px  #9c9c9c";
            labelContent.style.transform = "translateY(0%)";
            labelContent.style.fontSize = "15px";

            return false;
        }

    });




}








const formEmail = () => {


    
    var email = document.getElementById("email");
    // var email = document.getElementsByTagName("input")[2];




        email.addEventListener('focus',() => {
            var labelContent = document.getElementById("email-content");

            if(email.value == ""){
                labelContent.style.transform = "translateY(-160%)";
                labelContent.style.fontSize = "12px";
            }
        });


    function emailLabel(){
        var labelContentEmail = document.getElementById("form__label-email");

        if(email.value == ""){
            // que no faci res
            // labelContentEmail.style.borderBottom = "solid 1px  #9c9c9c";

        }else if(email.value.includes("@" && ".com") || email.value.includes("@" && ".es")){
            labelContentEmail.style.borderBottom = "solid 1px  #7fff7f";

        }else{
            labelContentEmail.style.borderBottom = "solid 1px #ff0000";
        }

    }


        email.addEventListener('focus',emailLabel());
        setInterval(emailLabel, 100);




    email.addEventListener('focusout', () => {

        var labelContent = document.getElementById("email-content");
        var labelContentEmail = document.getElementById("form__label-email");

        if(email.value.includes("@" && ".com") || email.value.includes("@" && ".es")){
            labelContentEmail.style.borderBottom = "solid 1px  #7fff7f";
            labelContent.style.transform = "translateY(-160%)";

        }else if(email.value == ("")){
            labelContentEmail.style.borderBottom = "solid 1px  #9c9c9c";
            labelContent.style.transform = "translateY(0%)";
            labelContent.style.fontSize = "15px";

            return false;

        }else{
            labelContentEmail.style.borderBottom = "solid 1px #ff0000";

            return false;
        }

    });




}









const formMessage = () => {




    var message = document.getElementById("message");
    // var message = document.getElementsByTagName("textarea")[0];




        message.addEventListener('focus',() => {
            var labelContent = document.getElementById("message-content");



            if(message.value == ""){
                labelContent.style.transform = "translateY(-330%)";
                labelContent.style.fontSize = "12px";
            }
        });


    function messageLabel(){
        var labelContentMessage = document.getElementById("form__label-message");



        if(message.value == ""){
            
            // que no faci res
            // labelContentMessage.style.borderBottom = "solid 1px  #9c9c9c";

        }else if(message.value != ""){
            labelContentMessage.style.borderBottom = "solid 1px  #7fff7f";

        }

    }


        message.addEventListener('focus',messageLabel());
        setInterval(messageLabel, 100);




        message.addEventListener('input', () => {
    
            if(message.value != ""){
    
                // Comverteix la primera lletra a upercase al escriure en el text area
                var toUpperCase = message.value.charAt(0).toUpperCase() + message.value.slice(1);
                message.value = toUpperCase;
            }

        });




        message.addEventListener('focusout', () => {

        var labelContent = document.getElementById("message-content");
        var labelContentMessage = document.getElementById("form__label-message");

        if(message.value != ""){

            labelContentMessage.style.borderBottom = "solid 1px  #7fff7f";
            labelContent.style.transform = "translateY(-330%)";

        }else if(message.value == ("")){
            labelContentMessage.style.borderBottom = "solid 1px  #9c9c9c";
            labelContent.style.transform = "translateY(0%)";
            labelContent.style.fontSize = "15px";

            return false;
        }

    });




}








formName();
formCompany();
formEmail();
formMessage();



// Hem apres en fer la primera lletra de la sentencia uppercase al escriure en un textarea i tambe la de cada paraula en un input

// Hem apres que si agafem un element pel DOM de la seguent forma i amb un nom mes general que no sigui var email, podem estalviar codi ja que el repetim si ho fem per .getElementById
// var email = document.getElementsByTagName("input")[2];

// També ens estalviem els id=""; del html