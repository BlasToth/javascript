const osszesParatlanDiv = document.querySelectorAll('.paratlan');
const osszesParosDiv = document.querySelectorAll('.paros');
const osszRow = document.querySelectorAll('.row');
const torlesBtn = document.getElementById('torles');

let divke = [];

function divkeKiosztas(array) {
    for (let i = 0; i < array.length; i++) {
         divke[i] = array[i];
        // divke[i] = array2[i];
        
    }
}
divkeKiosztas(osszRow);



// here is to set item in localstorage when you click the check box.

let checkBox = document.getElementsByClassName('checkbox');   
  
for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].onclick = function() {
        if(checkBox[i].checked) {
            localStorage.setItem(`toggle_value${i}`, "1");
            divke[i].style.backgroundColor="green";
            
        } else {
            localStorage.setItem(`toggle_value${i}`, "0");
            divke[i].style.backgroundColor="#B8B382"; // color after clicked
            
        }
    }


    // here is to fetch the item stored in local storage, and use that value
    // to check or uncheck the box based on localstorage value.
    let taroltErtek = [];
    taroltErtek[i] = localStorage.getItem(`toggle_value${i}`);


    if (taroltErtek[i] === "1") {
        checkBox[i].checked=true;
        divke[i].style.backgroundColor="green";
    } else {
        checkBox[i].checked=false;
        
    }

}

function torles(){
    if (localStorage.length){
        for (let i = 0; i < osszRow.length; i++){
            localStorage.removeItem(`toggle_value${i}`);
            console.log(`toggle_value${i}`);
        }   
    }
    location.reload();
}    

torlesBtn.addEventListener('click', torles);

    
    