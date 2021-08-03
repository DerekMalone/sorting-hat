const students = []

//Renders to DOM when Called
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

//Header that is called when application is launched. 
const startSorting = () => {
    const domString = `
    <div id="" class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button class="btn btn-primary">Start Sorting</button>
    </div>
  </div>
    `;
    renderToDom('#sortingHat', domString);
}

//Form that renders when startSorting's button is clicked.
/*May need to try a new input form? Could be causing the error? Uses "Click" instead of "Submit" */
const inputStudent = () => {
    const domString = `
    <div class="input-group mb-3">
    <input id="studentsName" type="text" class="form-control" placeholder="Student's Name" aria-label="Student's Name" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="click" id="inputSubmit button-addon2">Sort!</button>
    </div>
    `;
    renderToDom('#formContainer', domString)
}

//Creates a random number and assigns it to a house and returns it.
const randomHouse = () => {
    const houseNumber = Math.floor(Math.random() * 3) + 1;
    
    if (houseNumber === 1) {
        return 'Griffandor';
    } else if (houseNumber === 2) {
        return 'HufflePuff';
    } else {
        return 'Slithren'
    }
}

//***Errors here: Supposed to take input from form and push it to the array with the random house.

const handleInputStudentEvent = (event) => {
    // event.preventDefault();

    const houseAssignment = randomHouse();
    const student = {
        name: document.querySelector('#studentsName').value,
        house: randomHouse(),
    }
    students.push(student);
    houseList(students);
    console.log(students);
}

//Need to create. Takes students and renders them to DOM via Card input.
const houseList = () => {
        console.log(students);
    }
    
//Listens to Start Sorting button click and calls Input Student form to DOM
const startingButtonClick = (event) => {
        const startingButtonEvent = document.querySelector('#sortingHat');
        startingButtonEvent.addEventListener('click', startSorting)
        inputStudent();
        console.log('clicked');
    }

//Listens for handleInputStudentEvent and pushes input to the Array   
const inputStudentEvent = (event) => {
        const inputStudentElement = document.querySelector('#formContainer');
        inputStudentElement.addEventListener('click', inputStudent);
        handleInputStudentEvent();
        console.log('clicked');
    }
    
      
//Event Listener calls?
    const buttonEvents = () => {
        document.querySelector('#sortingHat').addEventListener('click', startingButtonClick)

        document.querySelector('#formContainer').addEventListener('click', inputStudentEvent)
    }
    
//Initializes the App
const init = () => {
    startSorting();
    buttonEvents();
    //handleInputStudentEvent();
};

init()