var selectedRow = null

function onFormSubmit() {
     
        var formData = readFormData();
               if (selectedRow == null)
            insertNewRecord(formData)
    }

function readFormData() {
    var formData = {};
    formData["addtaskinput"] = document.getElementById("addtaskinput").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("addedtasklist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.addtaskinput;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<button onClick="onEdit(this)" class="text-primary"><i class="fa fa-edit"></i>Edit</button>
                       <button onClick="onDelete(this)" class="text-danger"><i class="fa fa-trash"></i>Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("addtaskinput").value = selectedRow.cells[0].innerHTML;
    
}

function resetForm() {
    document.getElementById("addtaskinput").value = "";
   
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("addedtasklist").deleteRow(row.rowIndex);
        resetForm();
    }
}
