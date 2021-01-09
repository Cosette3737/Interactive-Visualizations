//initial function grab json file
function init() {
    var dropdown= d3.select("#selDataset");
    d3.json("js/samples.json").then((Sampledata) => {
        //filter to get names
        
         var parsedData=Sampledata.names;
       
        //put names into drowdown menu 
        
        parsedData.forEach((name)=> {
        dropdown.append("option").text(name).property("value");
    });
    //call the createplot, and meta functions for selected test subject
    creategauge(parsedData[0]);    
    createPlots(parsedData[0]);
        createMeta(parsedData[0]);
        })
}
//run the init function
init();
// optionchange function when a change is created
function optionChanged(selection){
    createPlots(selection);
    createMeta(selection);
    creategauge(selection);
}
function creategauge(selection) {
    d3.json("js/samples.json").then((sampleData) => {
        var parsedData = sampleData.metadata;
        var sampleArray = parsedData.filter(sampleObj => sampleObj.id == selection);
        var sample = sampleArray[0];
        wfreq = sample.wfreq;
        console.log(wfreq);
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: wfreq,
              title: { text: "Washes per Week" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                axis: { range: [null, 9] },
                steps: [
                  { range: [0, 1], color: "MidnightBlue" },
                  { range: [1, 2], color: "Navy" },
                  { range: [2, 3], color: "DarkBlue" },
                  { range: [3, 4], color: "MediumBlue" },
                  { range: [4, 5], color: "RoyalBlue" },
                  { range: [5, 6], color: "DodgerBlue" },
                  { range: [6, 7], color: "DeepSkyBlue" },
                  { range: [7, 8], color: "SkyBlue" },
                  { range: [8, 9], color: "PowderBlue" }
                ],
              }
            }
          ];
          
          var layout = { width: 405, height: 450, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', data, layout);
    
    }
    )}
function createMeta(selection) {
// create demographic values to be put into dashboard
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
    //read json create data for bubblegraph and barchart
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
        //barchart created with barchart data and layout
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
    Plotly.newPlot("bubble", bubblechartData, bublayout);})})}