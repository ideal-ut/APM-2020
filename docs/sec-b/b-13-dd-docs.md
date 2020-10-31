---
title: Interactive Online Visualization
--- 
Authors: Daniel Stern, Luke Stevens, Grayson Taylor. ([PDF](../../static/b-13-dd-docs.pdf))

## Overview

Interactive Online Visualization is a useful technique for developing detailed data storytelling. One of the primary resources used for this technique is Data Driven Documents (D3), a JavaScript library. D3 is an open-source library that allows one to manipulate documents into stunning visualizations. The components of D3 include data document, HTML, JS, CSS, and SVG. These components make up the web page layout, the actual code, visualization style, and the geometry within the visualization. D3 is a comprehensive tool, thus users can tailor their visualization to look exactly how they wish. The added value of using D3 is the amount of control one has in creating a unique and informative visual while also being completely free to use. However, D3 is not suited for data exploration or mining. It is for "web facing, interactivity, and complete customization," according to Diego Garcia-Olano.

## Principles of Data Visualization


The following principles are a collection and synthesis of Professor Jenifer Starling's notes from our summer course and a Countants medium post:

**(1) Choose an appropriate visual format**  
Your visualization format must make sense with the data you have and the story you are trying to tell. For instance, time-series data should probably not appear as a pie chart or bar chart. If you have geographic data, a map is probably a good idea. This step also ensures that your data is not being misrepresented to mean something it is not.

**(2) Balanced design**  
From a visual perspective, you want the elements of your data to be proportional to the amount of notice they will get. You do not want text, color, or space to be distracting. Although the design elements of the visualization may not impact _what_ the data is saying, they do influence _how_ the data is read and understood.

**(3) Make and highlight relevant elements**  
Only information that is adding to the storytelling of the visualization should be present. You want to avoid comparisons or highlights that are just "fun facts" but do not contribute to the overall analysis. Comparisons should be relevant and meaningful.

**(4) Keep it simple**  
Your analysis and story are only as good as what can be understood by your audience. If someone can easily get "lost in the sauce," it's time to makes some cuts. However, a visualization can be dynamic and full of information as long as you have good labeling and meaningful titles (and follow the other principles listed).

**(5) Display patterns and trends**  
It is important to show the big picture of your story. There are several ways to visualize trends over time, across demographics, and locations. Trends are important to understand as well because they add a level of predictability and certainty for your audience.

**(6) Make detailed comparisons**  
The other side of the big picture coin is granular comparisons. These details highlight anecdotal pieces of data that help your audience connect with the story you are telling. Without these comparisons, the full impact of your analysis may fall flat.

**(7) Know your audience**  
This principle is the linchpin for the rest. A visualization can be visually pleasing and show important business analysis but go straight over your audience's head. The information you are displaying needs to highlight important information in a way that translates to the knowledge and limitations of your audience.

## Competitors/Use Cases

Diego spoke primarily about using D3 for data visualization. The focus of these visualizations is visual storytelling to emphasize the main points of in-depth data analysis and make recommendations. They are made interactive so that the user can pick and choose what aspect is important to them. He also mentioned other software and packages that can be useful for similar use cases of data visualization. We have provided a table of a few tools and the scope in which they may be appropriately used.

## D3 Against Competitors
|Attributes  | D3 |R Shiny|MatplotLib|PowerBI|Tableau|
|--------|-----|---------|-------|--------|--------|
| Access/Availabilty|Open source|Open source|Open source|Proprietary|Proprietary|
| Primary Use Case|Business Intelligence Visualizations|Business Intelligence Visualizations|Exploratory Analysis|Exploratory Analysis|Exploratory Analysis|
| Online Interactivity |Seamless|Difficult|None|Limited|Limited|
| Learning Curve|Steep|Moderate|Minimal|Minimal|Minimal|
| Necessary Coding Knowledge|Javascript, Html, CSS|R|Python|None|None|

## Visualization Examples
![](https://imgur.com/mbbDsc5.png)
https://observablehq.com/@d3/collision-detection/2

### Each circle represents a county
![](https://imgur.com/QcTvv2w.png)
https://bl.ocks.org/mbostock/4206975


## Resources 

Previous visualizations for Modification
https://bl.ocks.org/, http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922

Observable Example with Visualization and Code
https://observablehq.com/@d3/zoom-to-bounding-box

Tutorials for learning D3 syntax:
https://github.com/d3/d3/wiki/Tutorials
https://observablehq.com/@d3/learn-d3

Principles of Data Visualization
https://medium.com/gobeyond-ai/7-key-principles-of-effective-data-visualization-b854b0b81946
