// import the data from data.js 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        
      });
    });
  }
                             
  // Building a handle click
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // default filter
    let filteredData = tableData;

    // if statement [pseudocode practice] if (a date is entered) {  Filter the default data to show only the date entered };
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    buildTable(filteredData);

  }
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


 // Calling build table function

buildTable(tableData);
