// from data.js
const tableData = data;

// get table references
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
      }
    );
  });
}

// Building an empty filters variable
var filters = {};

// Function to update filters
function updateFilters() {

  // Grab the datetime value from the filter
  let element = d3.select(this);
  let elementValue = element.property("value");
  let elementId = element.attr("id");

  // Check to see if an elementValue was entered 
  if (elementValue) {
    // Apply `filter` 
    filters[elementId] = elementValue;
  }

  else{
  delete filters[elementId] = elementValue;
  }

  // Display the filters list on the console.
  console.log(filters);

      //  Call function to apply all filters and rebuild the table
      filterTable();
  
    }

    // Function that filters the table when data is entered
    function filterTable() {

      let filteredData = tableData;

      //Loop through the filters object 
      //and store the data that matches the filter values
      Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
      });

      //Rebuild table using filtered data
      buildTable(filteredData);
    }


// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);


// Build the table when the page loads
buildTable(tableData);


