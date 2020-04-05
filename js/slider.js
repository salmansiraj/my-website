function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var taggedList= document.getElementsByClassName("content__tag");

    for (var key = 0; key < taggedList.length; key++) {
        if (taggedList[key].style.backgroundColor === undefined || taggedList[key].style.backgroundColor == "" || taggedList[key].style.backgroundColor == "darkcyan") {
            taggedList[key].style.backgroundColor = "rgb(77, 240, 189)";
        } else if (taggedList[key].style.backgroundColor == "rgb(77, 240, 189)") {
            taggedList[key].style.backgroundColor = "darkcyan"
        }
    }

    var companyNames = $('[id="dark-id"]');

    for (var key = 0; key < companyNames.length; key++) {
        if (companyNames[key].style.color === undefined || companyNames[key].style.color == "" || companyNames[key].style.color == "black") {
            companyNames[key].style.color = "rgb(77, 240, 189)"

        } else if (companyNames[key].style.color == "rgb(77, 240, 189)") {
            companyNames[key].style.color = "black"
        }       
     }

}
