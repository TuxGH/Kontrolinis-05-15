var clicks = 0;


const element = document.getElementById("add");

  element.addEventListener("click", myFunction);

  function myFunction() {
    clicks += 1; ///Plus counter
    document.getElementById("clicks").innerHTML = clicks;

    const list = document.createDocumentFragment();
    const li = list
      .appendChild(document.createElement("li")); ///Creates a list element inside of ul
    li.textContent = input.value + " " + "No." + clicks;  ///Places the input value inside of the list element
    document.getElementById('list1').appendChild(list);
};
  

const elements = document.getElementById("remove");

elements.addEventListener("click", myFunctions);

function myFunctions() {    
    
    if( clicks<=0){ ///Remove counter
        clicks=0;
    }
    else{clicks -= 1}
    
    document.getElementById("clicks").innerHTML = clicks; ///Changes the counter text in HTML

    const list = document.getElementById("list1");
    list.removeChild(list.lastElementChild);
  }
  
  