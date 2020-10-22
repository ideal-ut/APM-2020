(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/a-11-outliers-ec1eeca02d645c06893f3da83beee38f.pdf"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/boxplot-2caa08913ce0929c2c01ae1f82a2d75e.png"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/charts-9257d8931b855bdfa65e8c9408878e48.jpg"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),o=(a(0),a(86)),r={title:"Handling Outliers"},s={unversionedId:"sec-a/a-11-outliers",id:"sec-a/a-11-outliers",isDocsHomePage:!1,title:"Handling Outliers",description:"Authors: Vikram Seth, Steve Sohn, Xinmeng Song. (PDF)",source:"@site/docs\\sec-a\\a-11-outliers.md",slug:"/sec-a/a-11-outliers",permalink:"/APM-2020/docs/sec-a/a-11-outliers",version:"current",lastUpdatedAt:1603328123,sidebar:"docs",previous:{title:"Data Preprocessing",permalink:"/APM-2020/docs/sec-a/a-10-dp"},next:{title:"The Gaussian Distribution",permalink:"/APM-2020/docs/sec-b/b-01-gaussian-dist"}},l=[{value:"Overview of Lecture",id:"overview-of-lecture",children:[]},{value:"Data cleaning",id:"data-cleaning",children:[{value:"Dealing with Missing Values",id:"dealing-with-missing-values",children:[]},{value:"Handling Outliers",id:"handling-outliers",children:[]},{value:"Huber Loss",id:"huber-loss",children:[]},{value:"Python Outlier Detection (PyOD)",id:"python-outlier-detection-pyod",children:[]}]},{value:"Exploratory Data Analysis/Data Visualization",id:"exploratory-data-analysisdata-visualization",children:[]},{value:"Data reduction",id:"data-reduction",children:[]},{value:"Addtional Resources",id:"addtional-resources",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Authors:")," Vikram Seth, Steve Sohn, Xinmeng Song. (",Object(o.b)("a",{target:"_blank",href:a(158).default},"PDF"),")"),Object(o.b)("h2",{id:"overview-of-lecture"},"Overview of Lecture"),Object(o.b)("p",null,"The lecture first introduced several common data issues, and then explained that the solution is to use data pre-processing. Data pre-processing is a very frequently used process in daily data analysis. "),Object(o.b)("p",null,"Then it introduced how data cleaning is used and how to process missing values and outliers. Many algorithms used in feature selection and feature extraction are introduced in data reduction methods."),Object(o.b)("p",null,"Our note will go over the following topics:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Data Cleaning"),Object(o.b)("li",{parentName:"ul"},"Exploratory Data Analysis"),Object(o.b)("li",{parentName:"ul"},"Data Reduction"),Object(o.b)("li",{parentName:"ul"},"Data Visualization")),Object(o.b)("h2",{id:"data-cleaning"},"Data cleaning"),Object(o.b)("h3",{id:"dealing-with-missing-values"},"Dealing with Missing Values"),Object(o.b)("p",null,"There are many reasons for missing data. For example, it may be because the respondent forgot to answer the question, or the questionnaire is too long and the questionnaire is too long, and the survey may not be completed. There may also be a problem with the recorded equipment or network error. There are several common ways to deal with missing values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ignore the record or attribute(s)"),Object(o.b)("li",{parentName:"ul"},"Fill in missing values")),Object(o.b)("h3",{id:"handling-outliers"},"Handling Outliers"),Object(o.b)("p",null,"Outliers are data objects with characteristics that are considerably different than most of the other data objects in the data set. For univariate detection of outliers, there is a simple and effective way: to use boxplot. Note that the outliers (the + markers in your plot) are simply points outside of the wide ","[(Q1-1.5 IQR), (Q3+1.5 IQR)]"," margin below."),Object(o.b)("p",null,Object(o.b)("img",{alt:"title",src:a(159).default})),Object(o.b)("h3",{id:"huber-loss"},"Huber Loss"),Object(o.b)("p",null,"Instead of identifying and eliminating outliers, we can use methods that are not as affected by outliers."),Object(o.b)("p",null,"One of these methods is Huber Loss (1964)."),Object(o.b)("p",null,"Easiest way to explain Huber Loss would be that it is like a combination of Mean Squared Error and Mean Absolute Error, where it is similar to MSE (quadratic) for small numbers and similar to MAE (linear) for larger numbers. It is expressed by the following:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/M8Bf9Pd.jpg",alt:"Huber Loss"}))),Object(o.b)("p",null,"Refer to Additional resources for comparisons with other loss functions."),Object(o.b)("h3",{id:"python-outlier-detection-pyod"},"Python Outlier Detection (PyOD)"),Object(o.b)("p",null,"PyOD includes over 20 outlier detection algorithms and is well-documented. "),Object(o.b)("p",null,"For a tutorial and a list of the algorithms visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.analyticsvidhya.com/blog/2019/02/outlier-detection-python-pyod/"}),"here")," or refer to other links in the additional resources section."),Object(o.b)("h2",{id:"exploratory-data-analysisdata-visualization"},"Exploratory Data Analysis/Data Visualization"),Object(o.b)("p",null,"Data exploration and data visualization are generally inseparable. There are many graphical choices faced in visualization. There is a chart selection diagram created by Dr. Andrew Abela that should help you pick the right chart for your data type."),Object(o.b)("p",null,Object(o.b)("img",{alt:"title",src:a(160).default})),Object(o.b)("p",null,"First, we need to understand that data usually contains five related relationships: composition, comparison, trend, distribution, and connection."),Object(o.b)("p",null,'The composition is mainly concerned with the percentage of each part of the whole. If the information you want to express includes: "share", "percentage" and "what percentage is expected to reach", then you can use a pie chart;'),Object(o.b)("p",null,'Comparison can show the order of things\u2014is it the same, or is one more or less than the other? "Greater than", "less than" or "approximately equal" are all keywords in a comparative relative relationship. At this time, bar graphs are preferred;'),Object(o.b)("p",null,"Trend is the most common kind of time series relationship. It is concerned about how data changes over time. The weekly, monthly, and yearly trends are increasing, decreasing, fluctuating up and down or basically unchanged. At this time, it is better to use line graphs. The trend of the performance indicators over time;"),Object(o.b)("p",null,'Distribution is concerned with how many items are included in each value range. Typical information will include: "concentration", "frequency" and "distribution", etc. At this time, bar graphs are used; at the same time, it can also be displayed on a map based on geographic location data Different distribution characteristics;'),Object(o.b)("p",null,'The connection is mainly to check whether the two variables express the model relationship we expect to prove. For example, the expected sales may increase with the increase of the discount rate. At this time, it can be displayed with a bubble chart to express "related to... ", "Growing with...", "Differing with..." the relationship between variables.'),Object(o.b)("h2",{id:"data-reduction"},"Data reduction"),Object(o.b)("p",null,"The lecture provides a detailed introduction to data reduction related technologies, and also mentions some technologies of Data transform. Box-cox is also a common conversion technology.   "),Object(o.b)("p",null,"When considering reducing data, one has two primary options:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"1) Reducing the number of observations"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"2) Reducing the number of features"),"   "),Object(o.b)("p",null,'Beyond doing this, one can change the "resolution" of the data, which means changing the extent to which each data point contains information. A good example of this would be decreasing the number of pixels in an image.   '),Object(o.b)("p",null,"When considering decreasing the number of observations, there are several things to consider. If one has a simple mode, they may only need a certain amount of observations/data to fit it, and there will be diminishing marginal returns to adding more data to train the model. If there is ",Object(o.b)("em",{parentName:"p"},"no collinearity")," between the features of the data set, a good rule of thumb is to require 10 observations per feature. If there is variable interaction, then you will require more data points.   "),Object(o.b)("p",null,"If you are considering dropping many data points, then you need to understand the fundamental principles behind ",Object(o.b)("em",{parentName:"p"},"sampling theory"),". For example - you do not need to sample all 350 million respondents of the United States in order to have a ",Object(o.b)("em",{parentName:"p"},"representative sample")," of the population. You could achieve this sample accuracy by ensuring certain qualities are met (which can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sciencedirect.com/topics/social-sciences/sampling-theory"}),"here"),"). "),Object(o.b)("p",null,"Compressed Sensing - a situation where it is possible to get a good model, despite having ",Object(o.b)("em",{parentName:"p"},"less observations than the number of features"),".   "),Object(o.b)("p",null,"In order to achieve a good model with this theory, you have to make two assumptions of the data:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"1) Sparsity of Signals"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"2) Incoherence"),"   "),Object(o.b)("p",null,"While this theory predominatley relates to image processing, the information can best be summarized in these ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.slideshare.net/ahmed_nasser_ahmed/introduction-to-compressive-sensing-43183358"}),"slides"),". "),Object(o.b)("p",null,"If you are considering removing features from the data in order to simplify it, an easy, and somewhat obtuse, assumption to have would be that you are removing information that is useful when removing features. There are many considerations here:",Object(o.b)("br",{parentName:"p"}),"\n","1) Less variables can lead to more interpretable models",Object(o.b)("br",{parentName:"p"}),"\n","2) Redundant Features can have collinearity - which lead to decreased return in the complexity VS information tradeoff.    "),Object(o.b)("p",null,'The "curse of dimensionality" also exists - where with increased levels of dimensions, as given by increased number of features, results in the lower ability for an indvidual to make inferences from the data, and or model results. '),Object(o.b)("h2",{id:"addtional-resources"},"Addtional Resources"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data Cleaning / Pre-Processing / Outliers")," "),Object(o.b)("p",null,"Box Plots and Outlier Detection using Python"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://statinfer.com/104-3-5-box-plots-and-outlier-dectection-using-python/"}),"https://statinfer.com/104-3-5-box-plots-and-outlier-dectection-using-python/")),Object(o.b)("p",null,"Boxplots in matplotlib: Markers and outliers"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/17725927/boxplots-in-matplotlib-markers-and-outliers"}),"https://stackoverflow.com/questions/17725927/boxplots-in-matplotlib-markers-and-outliers")),Object(o.b)("p",null,"Box Cox Transformation"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.statisticshowto.com/box-cox-transformation/"}),"https://www.statisticshowto.com/box-cox-transformation/")),Object(o.b)("p",null,"5 Regression Loss Functions All Machine Learners Should Know"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0"}),"https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0")),Object(o.b)("p",null,"Huber Error| Loss Functions"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@gobiviswaml/huber-error-loss-functions-3f2ac015cd45"}),"https://medium.com/@gobiviswaml/huber-error-loss-functions-3f2ac015cd45")),Object(o.b)("p",null,"Focus on PYOD"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rsipvision.com/ComputerVisionNews-2019March/18/"}),"https://rsipvision.com/ComputerVisionNews-2019March/18/")),Object(o.b)("p",null,"An Awesome Tutorial to Learn Outlier Detection in Python using PyOD Library"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.analyticsvidhya.com/blog/2019/02/outlier-detection-python-pyod/"}),"https://www.analyticsvidhya.com/blog/2019/02/outlier-detection-python-pyod/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data Visualization")),Object(o.b)("p",null,"The Extreme Presentation(tm) Method"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://extremepresentation.typepad.com/blog/2006/09/choosing_a_good.html"}),"https://extremepresentation.typepad.com/blog/2006/09/choosing_a_good.html")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data Reduction")),Object(o.b)("p",null,"Sampling Theory"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sciencedirect.com/topics/social-sciences/sampling-theory"}),"https://www.sciencedirect.com/topics/social-sciences/sampling-theory")),Object(o.b)("p",null,"Introduction to compressive sensing"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.slideshare.net/ahmed_nasser_ahmed/introduction-to-compressive-sensing-43183358"}),"https://www.slideshare.net/ahmed_nasser_ahmed/introduction-to-compressive-sensing-43183358")))}u.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,h=b["".concat(r,".").concat(d)]||b[d]||p[d]||o;return a?i.a.createElement(h,s(s({ref:t},c),{},{components:a})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);