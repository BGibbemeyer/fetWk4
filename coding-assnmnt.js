let id = 0;

//links to the 'add' button in html and when clicked... 
document.getElementById('add').addEventListener('click', () => {
//...executes this code:
    let table = document.getElementById('list');
//insert under the hardwired coders
    let row = table.insertRow(4);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-coder').value;
    row.insertCell(1).innerHTML = document.getElementById('new-certificates').value;
//links the createDeleteButton function to the new coder    
    let remove = row.insertCell(2);
    remove.appendChild(createDeleteButton(id++));
    document.getElementById('new-coder').value;
});

//creates delete button
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

//how do I get the form to clear after onclick?

//make this into function? 

// document.getElementById('add').addEventListener('click', () => {
    
//         let codersDiv = document.getElementById('coders');
//         clearElement(codersDiv);
//         let table = document.getElementById('list');
    
//         let row = table.insertRow(4);
//         row.setAttribute('id', `item-${id}`);
//         row.insertCell(0).innerHTML = document.getElementById('new-coder').value;
//         row.insertCell(1).innerHTML = document.getElementById('new-certificates').value;
        
//         let remove = row.insertCell(2);
//         remove.appendChild(createDeleteButton(id++));
//         document.getElementById('new-coder').value;
//     });
    

// function clearElement(element) {
//     //it will remove any first child while there is a firstChild to clear everything out of it, this will be tru as long as there is a 1st child of it 
//     while(element.firstChild) {
//         //this will ensure that the firstchild is removed until it is completely cleared out 
//         element.removeChild(element.firstChild);
//     }
// }

