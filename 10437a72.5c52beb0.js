(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return o})),t.d(i,"metadata",(function(){return r})),t.d(i,"rightToc",(function(){return l})),t.d(i,"default",(function(){return m}));var a=t(2),n=t(6),s=(t(0),t(72)),o={title:"The Gaussian Distribution"},r={unversionedId:"sec-b/b-1-gaussian-dist",id:"sec-b/b-1-gaussian-dist",isDocsHomePage:!1,title:"The Gaussian Distribution",description:"Authors: Luke Bravo, Sidd Chauhan and Shuming Chen",source:"@site/docs\\sec-b\\b-1-gaussian-dist.md",slug:"/sec-b/b-1-gaussian-dist",permalink:"/APM-2020/docs/sec-b/b-1-gaussian-dist",version:"current",lastUpdatedAt:1599708142,sidebar:"secb",next:{title:"Document Number 2",permalink:"/APM-2020/docs/sec-b/b-2-doc"}},l=[{value:"Gaussian Distribution",id:"gaussian-distribution",children:[{value:"Transformation Of Variables To Follow Gaussian Distribution:",id:"transformation-of-variables-to-follow-gaussian-distribution",children:[]}]},{value:"Maximum Likelihood Estimation",id:"maximum-likelihood-estimation",children:[]},{value:"Multiple Linear Regression",id:"multiple-linear-regression",children:[]},{value:"Resources",id:"resources",children:[{value:"Guassian Distribution",id:"guassian-distribution",children:[]},{value:"Maximum Likelihood Estimation",id:"maximum-likelihood-estimation-1",children:[]},{value:"Multiple Linear Regression",id:"multiple-linear-regression-1",children:[]}]}],c={rightToc:l};function m(e){var i=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,t,{components:i,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Authors: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linkedin.com/in/luke-bravo/"}),"Luke Bravo"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linkedin.com/in/siddhantchauhan77/"}),"Sidd Chauhan")," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linkedin.com/in/shuming-chen/"}),"Shuming Chen")),Object(s.b)("p",null,"The lecture covered the basics of multiple linear regression and the application of maximum likelihood estimation. Fundamental to both of these topics is the basic gaussian distribution, which these notes cover first. Then, we cover maximum likelihood functions and estimations. Next, we look at the equation, assumptions, and limitations of multiple linear regression. Finally, we have included two videos that provide more information on maximum likelihood estimation, and tie these three topics together."),Object(s.b)("h2",{id:"gaussian-distribution"},"Gaussian Distribution"),Object(s.b)("p",null,"Gaussian Distribution is interchangeable with normal probability distribution or a \u2018bell curve\u2019. It is symmetrical about the mean of its data points, and points closer to the mean are more common than points far off from the mean. A key characteristic of data that have a gaussian or normal distribution is that they are independent and identically distributed (i.i.d.). The i.i.d. assumption is central to machine learning theory; it asserts that data are consistent and uniform by virtue of the way they were sampled."),Object(s.b)("p",null,"In general terms, functions with gaussian distributions are of the following form, where ",Object(s.b)("em",{parentName:"p"},"a")," and ",Object(s.b)("em",{parentName:"p"},"b")," are constants and ",Object(s.b)("em",{parentName:"p"},"c")," is a non-zero constant:"),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/13993a37c117176295fada7cdaa9c1ef1ae769f7"}),Object(s.b)("p",null,"The equation below is one way of writing the probability density for the Gaussian distribution, where ",Object(s.b)("em",{parentName:"p"},"mu")," is the mean, ",Object(s.b)("em",{parentName:"p"},"sigma")," is the standard deviation, and ",Object(s.b)("em",{parentName:"p"},"sigma^2")," is the variance."),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/61463c3decedda46e356782e24051ec7dd3c34c8"}),Object(s.b)("p",null,"The function has its peak at the mean, and its \u201cspread\u201d increases with the standard deviation (the function reaches 0.607 times its maximum at ",Object(s.b)("em",{parentName:"p"},"x + sigma")," and ",Object(s.b)("em",{parentName:"p"},"x - sigma"),". This implies that normal is more likely to return samples lying close to the mean, rather than those far away. ",Object(s.b)("em",{parentName:"p"},"From numpy documentation and P. R. Peebles Jr., \u201cCentral Limit Theorem\u201d in \u201cProbability, Random Variables and Random Signal Principles\u201d, 4th ed., 2001, pp. 51, 51, 125.")),Object(s.b)("h3",{id:"transformation-of-variables-to-follow-gaussian-distribution"},"Transformation Of Variables To Follow Gaussian Distribution:"),Object(s.b)("p",null,"These are some direct, mathematical methods to transform variables so that they follow Gaussian distribution. None of them is better than the other. They majorly depend on the original distribution of the variables. They are,"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Logarithmic Transformation"),Object(s.b)("li",{parentName:"ul"},"Reciprocal Transformation"),Object(s.b)("li",{parentName:"ul"},"Square Root Transformation"),Object(s.b)("li",{parentName:"ul"},"Exponential Transformation")),Object(s.b)("h2",{id:"maximum-likelihood-estimation"},"Maximum Likelihood Estimation"),Object(s.b)("p",null,"Maximum Likelihood Estimation is a method for estimating parameters of a probability distribution. We saw in class that maximizing a likelihood function (or minimizing its negative in the context of a cost function, see example equation below) lets you calculate the mean and variance of a distribution."),Object(s.b)("p",null,"In most cases, it is best to take the natural log of a likelihood function and then maximize or minimize the result; this is then called log-likelihood. This simplifies multiplication to addition and cancels the e term. You can also avoid differentiating to test for maxima and then differentiating again by doing this. Professor Ghosh explained that we can rest assured that the extrema of the log-likelihood function will correspond to those of the original likelihood function because the logarithm is a monotonically decreasing function."),Object(s.b)("p",null,"The two following equations express the likelihood and log-likelihood functions, respectively:"),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/fa485e7acf98b3a0ce236ce7293f63dd89f84b96"}),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/70323a65c0f24cb9b3e9bb0e1a8cf30442c350a7"}),Object(s.b)("p",null,"Note that for the likelihood function,"),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/5a0e1848f54c87072bd9ebf8871ceeb19e8bb1e9"}),Object(s.b)("p",null,"is a product of two single-variable functions."),Object(s.b)("h2",{id:"multiple-linear-regression"},"Multiple Linear Regression"),Object(s.b)("p",null,"A linear regression model is a statistical model that\u2019s frequently used in data science. It\u2019s also one of the basic building blocks of machine learning! Multiple linear regression (MLR/multiple regression) is a statistical technique. It can use several variables to predict the outcome of a different variable. The goal of multiple regression is to model the linear relationship between your independent variables and your dependent variable. It looks at how multiple independent variables are related to a dependent variable."),Object(s.b)("p",null,"Multiple Linear Regression is a statistical technique that models the relationship between a scalar response and one or more explanatory vairables. It is often fitted using the Least Square approach. The general equation for a multiple linear regression is as follows:"),Object(s.b)("img",{src:"https://wikimedia.org/api/rest_v1/media/math/render/svg/704b31aa61dfc93d672f15bf02aa6d168be49643"}),Object(s.b)("p",null,"There are two assumptions behind the model, and they are as follows:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The conditional mean of Y is linear in the Xi variables")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The error terms \\ epsoilon \\ are normally distributed, independent from each other, and have constant variance."))),Object(s.b)("p",null,"The model also has its limitations, one of them being that it does not model the distribution of x."),Object(s.b)("p",null,"MLR is used extensively in econometrics and financial inference."),Object(s.b)("p",null,"Minimizing the mean square error is equivalent to maximizing likelihood under a Gaussian model."),Object(s.b)("p",null,"Least squares estimation finds the line that minuses total squared distance between the actual data point and the regression line. Maximum likelihood estimation maximizes the total probability of the data. Under Gaussian distribution, maximum probability is close to the mean value and this is equivalent to minimizing the distance between the data point and the mean value since Gaussian distribution is symmetric. "),Object(s.b)("h2",{id:"resources"},"Resources"),Object(s.b)("h3",{id:"guassian-distribution"},"Guassian Distribution"),Object(s.b)("p",null,"This ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/towards-artificial-intelligence/introduction-to-gaussian-distribution-726be7dc5046"}),"article")," further explains gaussian distribution."),Object(s.b)("h3",{id:"maximum-likelihood-estimation-1"},"Maximum Likelihood Estimation"),Object(s.b)("p",null,"This ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=XepXtl9YKwc&ab_channel=StatQuestwithJoshStarmer"}),"video")," gives a brief overview of MLE. The example provided helps better visualize how the estimation works.  "),Object(s.b)("p",null,"This ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1#:~:text=Maximum%20likelihood%20estimation%20is%20a,data%20that%20were%20actually%20observed"}),"article")," further explains MLE."),Object(s.b)("h3",{id:"multiple-linear-regression-1"},"Multiple Linear Regression"),Object(s.b)("p",null,"This ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://towardsdatascience.com/multiple-linear-regression-in-four-lines-of-code-b8ba26192e84"}),"article")," further explains MLR and how to write the basic code for MLR."),Object(s.b)("p",null,"This ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.investopedia.com/terms/m/mlr.asp#:~:text=Key%20Takeaways-,Multiple%20linear%20regression%20(MLR)%2C%20also%20known%20simply%20as%20multiple,uses%20just%20one%20explanatory%20variable"}),"artilce")," explains how to apply MLR in investing and finance contexts."))}m.isMDXComponent=!0}}]);