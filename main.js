const students = []

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

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

const startingButtonClick = (event) => {
    const startingButtonEvent = document.querySelector('#sortingHat');
    startingButtonEvent.addEventListener('click', startSorting)
    inputStudent();
}

const inputStudent = () => {
    const domString = `
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Student's Name" aria-label="Student's Name" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Sort!</button>
        </div>
    `;
    renderToDom('#formContainer', domString)
}
 

const buttonEvents = () => {
    document.querySelector('#sortingHat').addEventListener('click', startingButtonClick)

}

const init = () => {
    startSorting();
    buttonEvents();

};

init()