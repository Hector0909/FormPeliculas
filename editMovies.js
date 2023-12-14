let table = document.getElementById('movieTable');
let addbutton = document.getElementById('addButton');
let deletebutton = document.getElementById('deleteButton');
let editbutton = document.getElementById('editButton');
let titleInput = document.getElementById('titleTextbox');
let yearInput = document.getElementById('yearTextbox');
let durationInput = document.getElementById('durationTextbox');
let genreInput = document.getElementById('genreTextbox');
let directorInput = document.getElementById('directorTextbox');
let synopsisInput = document.getElementById('descriptionTextArea');

let selectedRowIndex = null;
let selectedRow = null;
let savedRowColor = null;

function getRow(x){
    if(selectedRowIndex != null){
        table.rows[selectedRowIndex].style.backgroundColor = savedRowColor;
    }
    
    selectedRowIndex = x.rowIndex; 
    selectedRow = table.rows[selectedRowIndex];
    savedRowColor = x.style.backgroundColor;

    x.style.backgroundColor = "#525650";
    console.log("Selected table row: " + x.rowIndex);
}

function addMovie(){
    const newRow = table.insertRow(table.rows.length);
    const titleCell = newRow.insertCell(0);
    const yearCell = newRow.insertCell(1);
    const durationCell = newRow.insertCell(2);
    const genreCell = newRow.insertCell(3);
    const directorCell = newRow.insertCell(4);
    const synopsisCell = newRow.insertCell(5);
    titleCell.innerHTML = titleInput.value;
    yearCell.innerHTML = yearInput.value;
    durationCell.innerHTML = durationInput.value;
    genreCell.innerHTML = genreInput.value;
    directorCell.innerHTML = directorInput.value;
    synopsisCell.innerHTML  = synopsisInput.value;
    

    newRow.addEventListener("click",function(){
        getRow(this);
    });
}

function deleteMovie(){
    if(selectedRowIndex !== null){
        table.deleteRow(selectedRowIndex);      
        selectedRowIndex = null;
        selectedRow = null;
        savedRowColor = null;
    }
}

function editMovie(){
    let newRow = selectedRow;
    let titleCell = selectedRow.cells[0];
    let yearCell = selectedRow.cells[1];
    let durationCell = selectedRow.cells[2];
    let genreCell = selectedRow.cells[3];
    let directorCell = selectedRow.cells[4];
    let synopsisCell = selectedRow.cells[5];

    if(selectedRow != null){ 
        if (titleInput.value != "") {
            titleCell.innerHTML = titleInput.value;
        }
        if (yearInput.value != "") {
            yearCell.innerHTML = yearInput.value;
        }
        if (durationInput.value != "") {
            durationCell.innerHTML = durationInput.value;
        }
        if (genreInput.value != "") {
            genreCell.innerHTML= genreInput.value;
        }
        if (directorInput.value != "") {
            directorCell.innerHTML= directorInput.value;
        }
        if (synopsisInput.value != "") {
            synopsisCell.innerHTML = synopsisInput.value;
        }
    }
}

addbutton.addEventListener('click', addMovie);
deletebutton.addEventListener('click', deleteMovie);
editbutton.addEventListener('click', editMovie);







