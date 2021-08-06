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
    <div class="card-body">
      <h5 class="card-title">Welcome to the Hogwarts House Sorting Ceremony!</h5>
      <p class="card-text">Please begin by clicking below.</p>
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

// //Takes randomHouse and assigns a color based on the house.
const assignHouseColor = (house) => {
    
    if (house === 'Griffandor') {
        return '#AE0001';
    } else if (house === 'HufflePuff') {
        return '#ffcc00';
    } else {
        return '#006600';
    }
}

//Takes randomHouse and assigns an image based on the assigned house
const assignImage = (house) => {
    
    if (house === 'Griffandor') {
        return 'https://thenichollsworth.com/wp-content/uploads/2020/11/C0441055-AEE4-4C0D-8F43-A708DDEB6C3B-721x900.jpeg';
    } else if (house === 'HufflePuff') {
        return 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507644096.jpg?c=2';
    } else {
        return 'https://i.pinimg.com/originals/de/d8/7e/ded87e4b3dad3327988511af87724206.jpg';
    }
}

//Take input from form and pushes it to the array allong with the random house.
const handleInputStudentEvent = (event) => {
    
    const houseAssignment = randomHouse();
    const houseColor = assignHouseColor(houseAssignment);
    const houseImage = assignImage(houseAssignment);

    const student = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        house: houseAssignment,
        color: houseColor,
        imageUrl: houseImage,
        
    };
    studentsArray.push(student);
    houseList(studentsArray);
    inputStudent();
    console.log(studentsArray);
}

//Takes students and renders them to DOM via Card input.
const houseList = () => {
    let domString = ""; 
    studentsArray.forEach((student, i) => {
            domString += `
              <div class="card1" style="width: 18rem; background-color: ${student.color}">
                <img src="${student.imageUrl}" class="card-img-top" alt="${student.house}">
                 <div class="card-body">
                    <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
                      <p class="card-text">of House ${student.house}</p>
                    <a type="button" id="${i}" class="btn btn-primary">Expel</a>
                 </div>
             </div>
            `;
        });
        renderToDom("#sortedContainer", domString);
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
              <div class="card2" style="width: 18rem;">
                <img src="https://m.media-amazon.com/images/I/61j8BksetiL._SL1383_.jpg" class="card-img-top" alt="deatheater image">
                 <div class="card-body">
                    <h5 class="card-title">${soldier.firstName} ${soldier.lastName}</h5>
                      <p class="card-text">Soldier for Voldy</p>
                    
                 </div>
             </div>
            `;
        });
        renderToDom("#voldysContainer", domString);
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