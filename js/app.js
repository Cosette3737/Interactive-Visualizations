d3.json("samples.json").then((Sampledata) => {
    //filter to get names
    var parsedData = Sampledata.names;
    console.log(parsedData);
    var parseddata=Sampledata.names;
    //put names into drowdown menu 
    var dropdown= d3.select("#selDataset");
    parseddata.forEach((name)=> {
    dropdown.append("option").property("value", name).text(name);})
    createPlots(parseddata[0]);
    createMeta(parseddata[0]);
    });