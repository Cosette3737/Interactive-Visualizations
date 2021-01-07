# Belly Button Biodiversity

![Gun Image](https://storage.googleapis.com/kaggle-datasets-images/455/925/944efec6f9c143560a4a8f5ff8efbf59/dataset-cover.jpg)


# Project Scope

* For the scope of this project an interactive dashboard was created to explore the Belly Button Biodiversity Dataset. This dashboard allows the user to select the individual's data to access and analyze by use of a demographic information, a bubleplot and a bar graph. In order to complete this project we utilized the following tools and launguages:
    - Visual Studio Code
    - HTML
    -JavaScript
    -D3 
    -CSS
    -JSON
    
# Process
1. App.js

The first step was to import the samples.json file loaded into the App.js and pull the data needed from the json file.  The sample file consists of 3 lists including the names, metadata, and samples. After parsing the data, it is used in 4 different functions.  These functions include init, optionChanged, createMeta, and createPlots.  These functions help initialize the dashboard, select a test subject and create plots to visualize the data.  Allowing selection of the test subject, allows the dataset to be interactive. 


2. Styling

After the plots are created and functioning, the dashboard is personalized with images, opacity, and font changes in the CSS file. 


# Results




In the above horizontal barchart, it is easy to compare the test subjects top 10 OTU's in an easy to follow chart. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![states killed](Images/states1.png)

In the above bubblegraph, it is easy to examine the OTUs of the test sample and the amount of the bacteria in each sample.  

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![states injured](Images/states2.png)

The demographic information is presented by using key-value pairs from the metadata extracted from the JSON file.  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
