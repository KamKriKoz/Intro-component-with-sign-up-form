var warningText = $(".warning");
var input = $("input");
var email = $("#em")[0];

$("button").click(function() {

    for (i = 0; i < 4; i++) {

        input[i].classList.remove("error");
        warningText[i].style.display = "none";

        if (!email.validity.valid) {
            warningText[2].style.display = "block";
            email.classList.add("error");
        }

        if (input.type != "email" && input[i].value == "") {
            warningText[i].style.display = "block";
            input[i].classList.add("error");
        }
    }    
});