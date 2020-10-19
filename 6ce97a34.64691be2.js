(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(85)),l={title:"Multi-Layered Perceptron"},i={unversionedId:"sec-b/b-9-mlp",id:"sec-b/b-9-mlp",isDocsHomePage:!1,title:"Multi-Layered Perceptron",description:"Authors: Shuheng Ma, Anqi Lou, Mauricio Morales",source:"@site/docs\\sec-b\\b-9-mlp.md",slug:"/sec-b/b-9-mlp",permalink:"/APM-2020/docs/sec-b/b-9-mlp",version:"current",lastUpdatedAt:1602806789,sidebar:"docs",previous:{title:"Neural Networks",permalink:"/APM-2020/docs/sec-b/b-8-nn"},next:{title:"Data Preprocessing",permalink:"/APM-2020/docs/sec-b/b-10-dp"}},c=[{value:"Introduction:",id:"introduction",children:[]},{value:"Forward/Backward",id:"forwardbackward",children:[{value:"Google Playground Tensorflow",id:"google-playground-tensorflow",children:[]}]},{value:"Model complexity for MLP",id:"model-complexity-for-mlp",children:[]},{value:"Deep Learning",id:"deep-learning",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Authors: Shuheng Ma, Anqi Lou, Mauricio Morales"),Object(o.b)("h2",{id:"introduction"},"Introduction:"),Object(o.b)("p",null,"The lecture is about the forward/backward process, key parameters including # hidden layers, # epoches, activation function, learning rate(SDG), momentum of MLP and deep learning."),Object(o.b)("h2",{id:"forwardbackward"},"Forward/Backward"),Object(o.b)("p",null,"We start with a brief review of the forward and backward pass of the MLP."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The forward process is the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We apply the activation function through all the layers to the input x and get the output y_hat"))),Object(o.b)("li",{parentName:"ul"},"The backward Pass process is the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"After we obtain the y_hat from the forward process, we use the target point to subtract the predicted y_hat, we will obtain the error, then apply the error to SGD to update the weight")))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/ymgaKqG.png",alt:null}))),Object(o.b)("p",null,"The backward pass will stop until we find the location in the graph below that the validation set has it's lowest loss."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/sRwQmBF.png",alt:null}))),Object(o.b)("h3",{id:"google-playground-tensorflow"},"Google Playground Tensorflow"),Object(o.b)("p",null,"From the lecture, we have discussed of how to decrease the loss via adjust parameters in the playground:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add hidden layer, epoch"),Object(o.b)("li",{parentName:"ul"},"Change activation, regularization"),Object(o.b)("li",{parentName:"ul"},"Transform data from it's original shape to x^2, sin(x)...")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/hXKtWmP.png",alt:null}))),Object(o.b)("h2",{id:"model-complexity-for-mlp"},"Model complexity for MLP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The effective number of parameters of an MLP increase with amount of training"),Object(o.b)("li",{parentName:"ul"},"Ex. The MLP has 50 weights, then max DF = 50, we start with DF with a small number, then increases the DF with # of epochs till 50.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/bRTQarg.png",alt:null}))),Object(o.b)("h2",{id:"deep-learning"},"Deep Learning"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deep learning is a subset of machine learning in artificial intelligence that has networks capable of learning unsupervised from data that is unstructured or unlabeled. Also known as deep neural learning or deep neural network."),Object(o.b)("li",{parentName:"ul"},'The figure below shows how deep learning utilize a very "deep"(a lot neurons) to improve it\'s accuracy')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/RYdia83.png",alt:null}))),Object(o.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Google Playground Tensorflow:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://playground.tensorflow.org/"}),"https://playground.tensorflow.org/")))),Object(o.b)("li",{parentName:"ul"},"Deep Learning:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.iro.umontreal.ca/~bengioy/talks/mlss-austin.pdf"}),"http://www.iro.umontreal.ca/~bengioy/talks/mlss-austin.pdf")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.cs.toronto.edu/~ranzato/publications/taigman_cvpr14.pdf"}),"https://www.cs.toronto.edu/~ranzato/publications/taigman_cvpr14.pdf"))))))}p.isMDXComponent=!0},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);