// JSON Array
const chemicals = [
    {id : 1, chemicalName : "Ammonium Persulfate", vender : "LG Chem", density : "3525.92 gm/cm³",
         viscosity : "60.63 m²/s", packaging : "Bag", packSize : "100.00", unit : "kg", quantity : 6495.18},
    {id : 2, chemicalName : "Caustic Potash", vender : "Formosa", density : "3172.15 gm/cm³",
        viscosity : "48.22 m²/s", packaging : "Bag", packSize : "100.00", unit : "kg", quantity : 8751.90},
    {id : 3, chemicalName : "Dimethylaminopropyloamino", vender : "LG Chem", density : "8435.37 gm/cm³",
         viscosity : "12.62 m²/s", packaging : "Barrel", packSize : "75.00", unit : "L", quantity : 5964.61},
    {id : 4, chemicalName : "Mono Ammonium Phosphate", vender : "Sinopec", density : "1597.65 gm/cm³",
        viscosity : "76.51 m²/s", packaging : "Bag", packSize : "105.00", unit : "kg", quantity : 8183.73},
    {id : 5, chemicalName : "Ferric Nitrate", vender : "DowDuPont", density : "364.84 gm/cm³",
         viscosity : "14.90 m²/s", packaging : "Bag", packSize : "105.00", unit : "kg", quantity : 4154.33},
    {id : 6, chemicalName : "n-Pentane", vender : "Sinopec", density : "4535.26 gm/cm³",
        viscosity : "66.75 m²/s", packaging : "N/A", packSize : "N/A", unit : "t", quantity : 6272.34},
    {id : 7, chemicalName : "Glycol Ether PM", vender : "LG Chem", density : "6495.18 gm/cm³",
         viscosity : "72.12 m²/s", packaging : "Bag", packSize : "250.00", unit : "kg", quantity : 8745.94},
    {id : 8, chemicalName : "Chemical-A", vender : "Formosa", density : "3555.92 gm/cm³",
        viscosity : "10.63 m²/s", packaging : "Bag", packSize : "150.00", unit : "kg", quantity : 5495.18},
    {id : 9, chemicalName : "Chemical-B", vender : "LG Chem", density : "4525.42 gm/cm³",
        viscosity : "40.44 m²/s", packaging : "Bag", packSize : "125.00", unit : "kg", quantity : 4455.32},
    {id : 10, chemicalName : "Chemical-C", vender : "DowDuPont", density : "3475.55 gm/cm³",
         viscosity : "80.63 m²/s", packaging : "Barrel", packSize : "100.00", unit : "kg", quantity : 1515.26},
    {id : 11, chemicalName : "Chemical-D", vender : "Formosa", density : "1897.68 gm/cm³",
        viscosity : "64.43 m²/s", packaging : "Bag", packSize : "250.00", unit : "kg", quantity : 8498.23},
    {id : 12, chemicalName : "Chemical-E", vender : "Sinopec", density : "3525.77 gm/cm³",
         viscosity : "78.25 m²/s", packaging : "Bag", packSize : "110.00", unit : "kg", quantity : 4455.22},
    {id : 13, chemicalName : "Chemical-F", vender : "LG Chem", density : "3225.12 gm/cm³",
        viscosity : "54.35 m²/s", packaging : "Barrel", packSize : "120.00", unit : "kg", quantity : 6587.25},
    {id : 14, chemicalName : "Chemical-G", vender : "LG Chem", density : "5425.92 gm/cm³",
         viscosity : "12.05 m²/s", packaging : "Bag", packSize : "160.00", unit : "kg", quantity : 7489.32},
    {id : 15, chemicalName : "Chemical-H", vender : "Sinopec", density : "2525.92 gm/cm³",
        viscosity : "64.23 m²/s", packaging : "Bag", packSize : "130.00", unit : "kg", quantity : 4897.35}         
];

// function to populate the array using json array
function populateTable(){
    const tableBody = document.querySelector("#chemicalTable tbody");
    tableBody.innerHTML = ""; //clear existing rows

    chemicals.forEach(chemical => {
        const row = document.createElement("tr");
        for(const key in chemical){
            const cell = document.createElement("td");
            cell.textContent = chemical[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}

// call function on page load
populateTable();

// Function to sort table based on column index

function sortTable(columnIndex) {
    const table = document.getElementById("chemicalTable");
    const rows = Array.from(table.rows).slice(1); //header row is excluded thus index 1
    const sortedRows = rows.sort((a,b) => {
        const cellA = a.cells[columnIndex].textContent;
        const cellB = b.cells[columnIndex].textContent;
        return cellA.localeCompare(cellB);
    });
    sortedRows.forEach(row => table.appendChild(row));
}

// Function to add a new row to the table 
function addRow(){
    const tableBody = document.querySelector("#chemicalTable tbody");
    const newRow = document.createElement("tr");

    // Add cell to new row with default values
    const newChemical = { id: chemicals.length + 1, chemicalName: "", vender: "", density: "",
        viscosity: "", packaging: "", packSize: "", unit: "", quantity: 0};
        for (const key in newChemical) {
            const cell = document.createElement("td");
            cell.textContent = newChemical[key];
            newRow.appendChild(cell);
        }
        tableBody.appendChild(newRow);
        chemicals.push(newChemical); //to add new chemical to aray
    }


// Function to move selected row up
function moveRowUp() {
    const table = document.getElementById("chemicalTable");
    const selectedRow = table.querySelector("tr.selected");
    if (selectedRow && selectedRow.previousElementSibling){
        table.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
}

// function to move selected row down
function moveRowDown() {
    const table = document.getElementById("chemicalTable");
    const selectedRow = table.querySelector("tr.selected");
    if (selectedRow && selectedRow.nextElementSibling){
        table.insertBefore(selectedRow.nextElementSibling, selectedRow);
    }
}

// Funct to delete selected row
function deleteRow() {
    const table = document.getElementById("chemicalTable");
    const selectedRow = table.querySelector("tr.selected");
    if(selectedRow) {
        selectedRow.remove();
    }
}

// Function to refresh table data
function refreshData() {
    populateTable();
}

// function to save thw data
function saveData() {
    console.log("Data saved", chemicals);
}

// Event listener to select a row when clicked
document.querySelector("#chemicalTable tbody").addEventListener("click", function(event) {
    const rows = document.querySelectorAll("#chemicalTable tbody tr");
    rows.forEach(row => row.classList.remove("selected"));
    event.target.parentNode.classList.add("selected");
});

