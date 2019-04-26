// from data.js
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function build_table() {
    // clear table
    tbody.html("");
    // loop through each report and load entries into the table
    data.forEach(function (UFOreport) {
        var row = tbody.append("tr");
        Object.entries(UFOreport).forEach(function ([key, value]) {
            var cell = tbody.append("td").text(value);
        });
    });
};
build_table();

// Select the submit button
var submit = d3.select("#filter-btn");

// when the submit button is clicked....
submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // get value of input element
    var inputValue = d3.select("#datetime").property("value");

    // clear the table
    tbody.html("");

    // keep track of how many records are added
    var records_added = 0;
    // loop through each report and load entries into the table
    data.forEach(function (UFOrecord) {
        // if the date is a match, append the record to the table
        if (inputValue == UFOrecord['datetime']) {
            var row = tbody.append("tr");
            Object.entries(UFOrecord).forEach(function ([key, value]) {
                var cell = tbody.append("td").text(value);
            });
            records_added += 1;
        };
    });
    // warn the user if the date is not found
    if (records_added == 0) {
        console.log('Sorry, that date does not exist.');
        var row = tbody.append("tr").text('Not a match.');
    };
});
