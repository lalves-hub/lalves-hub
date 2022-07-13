//This is a dance move application that allows for them to
// be saved in a list form

// You will need an array to save the entries to, and an event listener,
// like we went over in class, to save the entries when a button is clicked

// *** Hint: Look at the HTML IDs on how to select elements.

//selecting the elements
let addDance = document.getElementById("submitBtn")
let inputDance = document.getElementById("danceInput")
//let output = document.getElementById("danceList")

let list = []

//console.log("print input",inputDance)


// addDance.addEventListener("click", eventHandler)

/* function eventHandler() {
    
} */
//____________________ or
// addDance.addEventListener("click", () => { })


addDance.addEventListener("click", () => {
    //make a local variable
    let outputDance = ""
    //make a variable for the numbers in front of the text
    let numbers = 1;
    //select the text from the inputbox area
    list.push(inputDance.value);

    //do a for loop to go through the array, get all of the entries, and adds the numbers from the loop in front of my list items

    for(let i=0; i<list.length; i++, numbers++){
        outputDance += `<ul><li>Dance Moves # ${numbers} ${list[i]}</li></ul>`
    }
    
    // changes the innerHTML of the output area with teh value i want to add
    danceList.innerHTML = outputDance;

    //this clears the input box and focuses the cursos in the box
    inputDance.value = "";
    inputDance.focus();

})

