const studentsArray = [];
let voldysArray = [];

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
const inputStudent = () => {
    const domString = 
        `
    <form class="row g-3">
        <div class="col-md-6">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" required>
        </div>
        <div class="col-md-6">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" required>
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sort!</button>
        </div>
    </form>    
    `

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

//Take input from form and pushes it to the array allong with the random house.

const handleInputStudentEvent = (event) => {
   
    //event.preventDefault(); //***Not sure why it isnt working. ASK!

    const houseAssignment = randomHouse();
    const student = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        house: randomHouse(),
        
    }
    studentsArray.push(student);
    houseList(studentsArray);
    inputStudent();
}

//Takes students and renders them to DOM via Card input.
const houseList = () => {
    let domString = ""; 
    studentsArray.forEach((student, i) => {
            domString += `
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
                      <p class="card-text">of House ${student.house}</p>
                    <a type="button" id="${i}" class="btn btn-primary">Expel</a>
                 </div>
             </div>
            `;
        });
        renderToDom("#sortedContainer", domString);
        console.log(studentsArray);
    }

//Expels students from Hogwarts and adds them to Voldy's Army.
const expelFunction = (event) => {
    
    const targetType = event.target.type;
    const targetId = event.target.id;

    if(targetType === "button") {
        voldysArray.push(studentsArray.splice(targetId, 1)[0]);      
        armyList(voldysArray);
        houseList();  
    };
}

//Takes Voldy's Army and renders them to DOM via Card input.
const armyList = () => {
    let domString = ""; 
    voldysArray.forEach((soldier, i) => {
            domString += `
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${soldier.firstName} ${soldier.lastName}</h5>
                      <p class="card-text">Soldier for Voldy</p>
                    
                 </div>
             </div>
            `;
            // <a type="button" id="${i}" class="btn btn-primary">Expel</a>
        });
        renderToDom("#voldysContainer", domString);
        console.log(voldysArray);
    }
    
//Listens to Start Sorting button click and calls Input Student form to DOM
const startingButtonClick = (event) => {
        const startingButtonEvent = document.querySelector('#sortingHat');
        startingButtonEvent.addEventListener('click', startSorting)
        inputStudent();    
    }

//Listens for handleInputStudentEvent and pushes input to the Array   
const inputStudentEvent = (event) => {
        const inputStudentElement = document.querySelector('#formContainer');
        inputStudentElement.addEventListener('submit', inputStudent);
        handleInputStudentEvent();       
    }
    
      
//Event Listener calls?
    const buttonEvents = () => {
        document.querySelector('#sortingHat').addEventListener('click', startingButtonClick)

        document.querySelector('#formContainer').addEventListener('submit', inputStudentEvent)

        document.querySelector("#sortedContainer").addEventListener("click", expelFunction);
    }
    
//Initializes the App
const init = () => {
    startSorting();
    buttonEvents();
    houseList(studentsArray);
    armyList(voldysArray);
};

init()