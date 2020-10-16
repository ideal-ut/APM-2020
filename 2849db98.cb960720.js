(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM1-3339ad9c723452d08ffc02536d1903d0.png"},117:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM2-bde3cd1548b6c24109b80f1aa0301618.png"},118:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM3-088b39227d10d56edf41a1835f79ce4d.png"},119:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM4-0f08343574ec60d18508ea68f9d3f740.png"},120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM5-ab48a01b5e38a298a1245e3e0155a6df.png"},121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM6-6d7794eb3b9dd81155ffad2ef330f293.png"},122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM7-73c30bc6d83e7edf5491719bba92cec7.png"},123:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/APM9-d5818475290eef08c2967ad447d43929.png"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),i=(a(0),a(83)),o={title:"Bias-Variance Dilemma"},l={unversionedId:"sec-b/b-5-bias-variance",id:"sec-b/b-5-bias-variance",isDocsHomePage:!1,title:"Bias-Variance Dilemma",description:"Authors: Zachary Hall, Mac Husted, Nicole Jiang",source:"@site/docs\\sec-b\\b-5-bias-variance.md",slug:"/sec-b/b-5-bias-variance",permalink:"/APM-2020/docs/sec-b/b-5-bias-variance",version:"current",lastUpdatedAt:1601328509,sidebar:"docs",previous:{title:"Regularization",permalink:"/APM-2020/docs/sec-b/b-4-regularization"},next:{title:"Beyond Linear Regression and Gradient Descent",permalink:"/APM-2020/docs/sec-b/b-6-gradient-descent"}},s=[{value:"Math Details: The Bias-Variance Decomposition (optional)",id:"math-details-the-bias-variance-decomposition-optional",children:[]},{value:"Irreducible error",id:"irreducible-error",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Authors: Zachary Hall, Mac Husted, Nicole Jiang"),Object(i.b)("p",null,"Expected square loss (E","[L]",") formula:"),Object(i.b)("p",null,Object(i.b)("img",{src:a(116).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"t: target value (random variable) \u2192 Assume: t = h (x) + zero - mean noise"),Object(i.b)("li",{parentName:"ul"},"x: input value (random variable)"),Object(i.b)("li",{parentName:"ul"},"h(x): target line"),Object(i.b)("li",{parentName:"ul"},"y(x): predicted line")),Object(i.b)("p",null,"The first term of the expected square loss is bias and variance. It is the difference between the predicted line and the target line. This first term is composed of bias^2 + variance."),Object(i.b)("p",null,"The second term of the expected square loss represents the variance of the error term. It shows the difference between target line and the target points."),Object(i.b)("h2",{id:"math-details-the-bias-variance-decomposition-optional"},"Math Details: The Bias-Variance Decomposition (optional)"),Object(i.b)("p",null,Object(i.b)("img",{src:a(117).default})),Object(i.b)("p",null,"In order to minimize the expected test error, we need to select a statistical learning method that simultaneously achieves ",Object(i.b)("em",{parentName:"p"},"low variance")," and ",Object(i.b)("em",{parentName:"p"},"low bias"),"."),Object(i.b)("p",null,"Expected loss = (bias)^2 + variance + noise"),Object(i.b)("p",null,Object(i.b)("img",{src:a(118).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Variance")," : how sensitive the model is to variations in data."),Object(i.b)("p",null,"Variance refers to the amount by which \u02c6",Object(i.b)("em",{parentName:"p"},"f")," would change if we estimated it using a different data set (training dataset ","&"," testing dataset)."),Object(i.b)("p",null,"In general, more flexible statistical methods have higher variance."),Object(i.b)("p",null,Object(i.b)("img",{src:a(119).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Bias")," : how good the average model is;"),Object(i.b)("p",null,"Bias refers to the error that is introduced by approximating a real-life problem, which may be extremely complicated, by a much simpler model."),Object(i.b)("p",null,"Generally, more flexible methods result in less bias."),Object(i.b)("p",null,Object(i.b)("img",{src:a(120).default})),Object(i.b)("p",null,"*","*"," the bias and variance concepts here apply to a predictive model, rather than to an estimator of a specific value."),Object(i.b)("h1",{id:"bias-variance-tradeoff"},"Bias-Variance Tradeoff"),Object(i.b)("p",null,"When a model is too simple and has very few parameters then it may have high bias and low variance. While, if a model is too complex and has too many parameters then it","'","s going to have too much variance and low bias. The optimal model is one where the level of complexity leads equivalent reduction in variance and increase in bias."),Object(i.b)("p",null,"If our model complexity exceeds this optimal spot, the model will be in effect over-fit. On the other hand, if the model is too simple, the model will be under-fit . Thus, one has to ensure that they balance the complexity of the model that will provide the reduction in both bias and variance."),Object(i.b)("p",null,Object(i.b)("img",{src:a(121).default})),Object(i.b)("p",null,Object(i.b)("img",{src:a(122).default})),Object(i.b)("h1",{id:"how-does-one-improve-their-model"},"How does one improve their model?"),Object(i.b)("p",null,"The first method to improve one","'","s model is to get more training data. This will reduce the variance of one","'","s estimates while keeping the bias overall the same. It also has an additional benefit of allowing one to increase their model complexity. The more training data one has the more likely that training error and the test error will converge. Since the test error is an unbiased estimate of the true mean, the model will be closer to the ",'"',"true",'"'," error."),Object(i.b)("p",null,"The second method is to change the complexity of the model via regularization. Through regularization, one can find the optimal complexity that will reduce the bias and variance allowing one to improve their model","'","s overall fit."),Object(i.b)("p",null,"The third method is to change the optimization method. Through cross validation and regularization one can also optimize the parameters of the model which will also improve the overall fit of the model."),Object(i.b)("p",null,"The last method is to change the model type. There are times when a linear model may not provide the most optimal solution. Sometimes one might change the model type to a nonlinear model which may improve the overall fit of the model."),Object(i.b)("p",null,"If these methods don","'","t improve the overall solution, one might need to do feature engineering. This involved careful selection and possible manipulation of the data features. The reason to do this is to feed the model only the most optimal inputs. If one can consistently give the model only part of the data it needs to make more accurate predictions then it doesn","'","t have to deal with any extra noise that comes from the rest of data. It also allows one to reduce the possibility that the model is suffering from the collinearity problem. An alternative way of selecting features may be through principal component analysis for example."),Object(i.b)("h1",{id:"the-effect-of-regularization-on-bias-and-variance"},"The Effect of Regularization on Bias and Variance"),Object(i.b)("p",null,"When one regularizes a model, they are penalizing model complexity with the goal of reducing the variance and bias to an optimal level. When there is more regularization (i.e. higher lambda or alpha), there is more bias and less variance. When one regularizes a model, they must keep this in mind to ensure that they haven","'","t regularized the model too much where more bias is being introduced. This goes back to the idea of the bias-variance trade-off. When we keep this mind when regularizing, the model should make more reliable predictions on future data sets other than just the training dataset."),Object(i.b)("p",null,Object(i.b)("img",{src:a(123).default})),Object(i.b)("h1",{id:"additional-information--resources"},"Additional Information ","&"," Resources"),Object(i.b)("h2",{id:"irreducible-error"},"Irreducible error"),Object(i.b)("p",null,"Variability associated with error terms also affects the accuracy of our predictions. This is known as the ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"irreducible")," ")," error, because no matter how well we estimate ",Object(i.b)("em",{parentName:"p"},"f"),", we cannot reduce the error introduced by the error terms."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Why is the irreducible error larger than zero?")),Object(i.b)("p",null,"The quantity may contain ",Object(i.b)("strong",{parentName:"p"},"unmeasured variables")," that are useful in predicting ",Object(i.b)("em",{parentName:"p"},"Y")," : since we don","'","t measure them, ",Object(i.b)("em",{parentName:"p"},"f")," cannot use them for its prediction."),Object(i.b)("p",null,"The quantity may also contain ",Object(i.b)("strong",{parentName:"p"},"unmeasurable variation"),". For example, the risk of an adverse reaction for a given patient on a given day."),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://towardsdatascience.com/understanding-the-bias-variance-tradeoff-165e6942b229"}),"An article on bias-variance trade-off")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://towardsdatascience.com/3-ways-to-improve-your-machine-learning-results-without-more-data-f2f0fe78976e"}),"An article on improving one","'","s model")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ds100.org/sp18/assets/lectures/lec17/17-bias-variance-regularization.pdf"}),"An article on regularization and bias and variance")))}d.isMDXComponent=!0},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=r,u=b["".concat(o,".").concat(m)]||b[m]||h[m]||i;return a?n.a.createElement(u,l(l({ref:t},c),{},{components:a})):n.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);