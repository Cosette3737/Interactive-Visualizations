
function init() {
    var dropdown= d3.select("#selDataset");
    d3.json("js/samples.json").then((Sampledata) => {
        //filter to get names
        //var parsedData = Sampledata.names;
         var parsedData=Sampledata.names;
       
        //put names into drowdown menu 
        
        parsedData.forEach((name)=> {
        dropdown.append("option").text(name).property("value");
    });
        createPlots(parsedData[0]);
        createMeta(parsedData[0]);
        })
}

init();

function optionChanged(selection){
    createPlots(selection);
    createMeta(selection);
}
function createMeta(selection) {

    d3.json("js/samples.json").then((sampleData) => {
        var parsedData = sampleData.metadata;
        var sampleArray = parsedData.filter(sampleObj => sampleObj.id == selection);
        var sample = sampleArray[0];
        var demo_meta = d3.select("#sample-metadata");
        demo_meta.html("");
        Object.entries(sample).forEach(([key,value]) => {
           demo_meta.append("p").text(`${key} : ${value}`);
        })
    })
}
function createPlots(selection) {
    //read json
    d3.json("js/samples.json").then((sampleData) => {
        var parsedData = sampleData.samples;
        var sampleData = parsedData.filter(sampleObj => sampleObj.id == selection);
        var sampleArray2=sampleData[0]
        var values = sampleArray2.sample_values;
        var tenOTU = values.slice(0,10).reverse();
        var otu_labels = sampleArray2.otu_ids;
        var tenOTU_labels=otu_labels.slice(0,10).reverse();
        var combinedlabels=[];
        tenOTU_labels.forEach((otu_label) => {
        combinedlabels.push("OTU  " + otu_label);
        var hover = sampleArray2.otu_labels;
        var barcharthover = hover.slice(0,10).reverse();

        var barChartTrace= {
            type: "bar",
            y:combinedlabels,
            x: tenOTU,
            text:barcharthover,
            orientation:'h'
        };
        var barChartData = [barChartTrace];
        var barlayout={
            title: "Top 10 OTUs in Test Subject",
            yaxis: {tickmode: "linear"},
            margin: {
                l: 150,
                 r: 150,
                t: 150,
                b: 150
            }
        };
        Plotly.newPlot("bar", barChartData, barlayout);
        
        var BubbleTrace={
            x:otu_labels,
            y: values,
            text:hover,
            mode:"markers",
            marker: { 
                size: values,
                color: values
            }}
        var bubblechartData=[BubbleTrace];
        var bublayout={
            showlegend:false,
            height: 600,
            width:1100,
            xaxis:{
            title: "OTU ID"
            }
        };
    Plotly.newPlot("bubble", bubblechartData, bublayout);
    
    })})}
