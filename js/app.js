//optionchange function to update page
function optionChanged(newSelection) {
    createMeta(newSelection);
    createPlots(newSelection);
};

//initial function on page load with sample data
function init() {
    //read json
    d3.json("samples.json").then((data) => {
    //filter to get names
    var parsedData = data.names;
    console.log(parsedData);

    });

};
