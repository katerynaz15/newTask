window.onload = function() {
    console.log(localStorage);
    var myStorage = JSON.parse(localStorage.getItem("users")); 
    if(myStorage!==null) {
        var myObj = {};
        myStorage.forEach(function(el) {
            if(typeof(myObj[el.clickedButton])=="undefined") {
                myObj[el.clickedButton] = 1;
            }else {
                myObj[el.clickedButton]++;
            }
        }); 
        console.log(myObj);
    } 
    
    var userID = Math.floor(Math.random()*(999999-100000)+100000);
    var button = document.getElementsByClassName("myButtons");
    for(var i=0; i<button.length; i++) {
        button[i].onclick = function() {
            var userInfo = {
                id: userID,
                clickedButton: this.value
            };
            console.log(typeof(localStorage.getItem("users")));
            if(localStorage.getItem("users")==null) {
                localStorage.setItem("users", JSON.stringify([userInfo])); 
            } else {
                if(myStorage.every(function(el) {return el.id!==userID})) { 
                    myStorage.push(userInfo);
                } else {
                    myStorage.forEach(function(el, i, a) { 
                        if(el.id==userID) {
                            myStorage[i].clickedButton = userInfo.clickedButton;
                        }
                    }); 
                }
                localStorage.setItem("users", JSON.stringify(myStorage)); 
            }
        }
    }
    var newButton = document.getElementById("newButton");
    newButton.onclick = function() {
        localStorage.clear();
        location.reload();
    }
}