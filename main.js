// creates my style element and appends it to the page
let newStyle = document.createElement(`style`)
newStyle.innerHTML = `
    .done{
        background-color:#acf256;
        color: grey
    }
`
document.body.append(newStyle)

// creates my list
let toDo = []

// links the button to the click
addItem.addEventListener("click", (event) => {
    event.preventDefault();

    // creates my object
    let newItem = {
        input: userInput.value,
        completion: false,
        dateIn: getDate(),
        dateDone: ``,
        // creates a random id for each new task added
        id: Math.random() * 10000 * Math.random(),
        class: ``,
        deleted: false
    }
    
    // adds my objects to the list
    toDo.push(newItem);

    // calls the function to display my objects into the table
    displayTask()
})

// creates my function for the checkbox with id as an argument
const checkboxClick = (id) => {
    for (task of toDo) {

        // if sentence for matching the random id key to the id argument of the function, activated by onclick
        if (id == task.id) {

            // if the box is unchecked and gets checked
            if (task.completion == false) {
                task.completion = true
                
                // calls the function for getting the time of completion 
                task.dateDone = getDate()
                
                // gives the checkbox the class of done
                task.class = `done`
                displayTask()
            }

            // if the box is checked and gets unchecked
            else if (task.completion == true) {
                task.completion = false
                task.dateDone = ``
                task.class = ``
                displayTask()
            }
        }
    }

}

// creates the function to display the objects in the html table
const displayTask = () => {

    // clears my innerHTML and sets the table heads
    userFeedbackTable.innerHTML = 
                `                
                <th>
                    Task
                </th>
                <th>
                    Date
                </th>
                <th>
                    
                </th>
                <th>
                    Finalized
                </th>
                `
    
    // separates my rows from done and undone, so I can place the done ones at the end of the table
    // first gets all the uncompleted tasks and display them
    for (item of toDo) {
        if (item.completion == false && item.deleted == false) {

            userFeedbackTable.innerHTML +=
                `
                
                <tr class="${item.class}">

                <td>
                ${item.input}
                </td>

                <td>
                ${item.dateIn}
                </td>
                <td>
                    <input type="checkbox" name="checkbox" onclick="checkboxClick(${item.id})">
                </td>
                <td>${item.dateDone}</td>

                </tr>
                 `
        }
    }

    // then gets all of the completed ones and display them after, unless they have been deleted
    for (item of toDo) {
        if (item.completion == true && item.deleted == false){

            userFeedbackTable.innerHTML +=
                `<tr class="${item.class}">

                <td>
                ${item.input}
                </td>

                <td>
                ${item.dateIn}
                </td>
                <td>
                    <input type="checkbox" name="checkbox" checked onclick="checkboxClick(${item.id})">
                </td>
                <td>${item.dateDone}</td>

                 </tr>
                  `
        }
    }

}

// creates my function to get the edited date format
const getDate = () => {
    return new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
}


// bonus: creates new button
let updateTaskList = document.createElement(`button`)
updateTaskList.classList = 'enter'
updateTaskList.id = 'updateList'
updateTaskList.innerHTML = 'Update Task List!'
document.body.append(updateTaskList)
updateTaskList.addEventListener("click", (event) => {
    event.preventDefault();

    return cleanUp();

})

// creates function to update the list
const cleanUp = () => {
    userFeedbackTable.innerHTML = ``

    for (item of toDo){
        if (item.completion == false) {

            userFeedbackTable.innerHTML +=
                `
                <tr class="${item.class}">

                <td>
                ${item.input}
                </td>

                <td>
                ${item.dateIn}
                </td>
                <td>
                    <input type="checkbox" name="checkbox" onclick="checkboxClick(${item.id})">
                </td>
                <td>${item.dateDone}</td>

                </tr>
                `
        }

        if (item.completion == true){ console.log(item)
            item.deleted = true;
            userFeedbackTable.innerHTML += "";
        }}
        }