# Belly Button Biodiversity

![Bacteria Image](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/bacteria2.jpg)


# Project Scope

* For the scope of this project an interactive dashboard was created to explore the Belly Button Biodiversity Dataset. This dashboard allows the user to access the individual's data to analyze and visualize the demographic information, a bubbleplot and a bar graph. In order to complete this project we utilized the following tools and languages:
   
   - Visual Studio Code
    - HTML
    - JavaScript
    - D3 
    - CSS
    - JSON
    - Plotly
 
 
 ![BubbleGraph](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/dash.JPG)
 
# Process
 - Dashboard Creation

The first step was to import the samples.json file loaded into the App.js and pull the data needed from the json file.  The sample file consists of 3 lists including the names, metadata, and samples. After parsing the data, it is used in 4 different functions.  These functions include init, optionChanged, createMeta, and createPlots.  These functions help initialize the dashboard, select a test subject and create plots to visualize the data when there is a user change.  Giving the option to select the test subject, the dataset is interactive. 


 - Styling

After the plots are created and functioning, the dashboard is personalized with images, opacity, and font changes in the CSS file. 


# Results

## Barchart ##
![Horizontal BarChart](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/barchart.JPG)

In the above horizontal barchart, it is easy to compare the test subjects top 10 OTU's in an easy to follow chart. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## BubbleGraph ##
![BubbleGraph](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/bubblechart.JPG)

In the above bubblegraph, it is easy to examine the OTUs of the test sample and the amount of the bacteria in each sample.  

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Demographics ##

![Demographics](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/demographics.JPG)

The demographic information is presented by using key-value pairs from the metadata extracted from the JSON file.  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Gauge ##

![Gauge](https://raw.githubusercontent.com/Cosette3737/Interactive-Visualizations/main/Images/plots.JPG)

Extracting the selected test subjects number of washes per week (WFREQ), we can create a gauge to easily see the value of washes per week.  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
