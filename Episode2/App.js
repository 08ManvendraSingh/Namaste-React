import React from "react";
import ReactDOM from "react-dom/client";

const heading3=React.createElement('h2',{id:'heading'},"Hello World Program Using React");
console.log(heading3);
const root3=ReactDOM.createRoot(document.getElementById('root3'));
root3.render(heading3);


// nested elements
/**
<div>
    <div>
        <h2></h2>
    </div>
</div> 
*/

const heading4=React.createElement('div',{id:'parent4'},React.createElement('div',{id:'child4'},React.createElement('h2',{},'nested create element')));
const root4=ReactDOM.createRoot(document.getElementById('root4'));
root4.render(heading4);


/**
 * how to create nested siblings inside react
 * <div>
 *     <div>
 *          <h2></h2>    
 *          <h2></h2>    
 *     </div>
 * </div>
 * 
 * if you have to create sibling then you can pass it inside array
*/

const heading5=React.createElement('div',{id:'parent5'},
React.createElement('div',{id:'child5'},
[
    React.createElement('h2',{},'i am 1st child of child5'),
    React.createElement('h2',{},'i am 2nd child of child5'),
]
));

const root5=ReactDOM.createRoot(document.getElementById('root5'));
root5.render(heading5);


/**
 * how to create nested siblings inside react
 * <div>
 *     <div id='child1'>
 *          <h2></h2>    
 *          <h2></h2>    
 *     </div>
 *     <div id='child2'>
 *          <h2></h2>    
 *          <h2></h2>    
 *     </div>
 * </div>
*/

const heading6=React.createElement('div',{id:'parent6'},
[
React.createElement('div',{id:'child6'},
[
    React.createElement('h2',{},'i am 1st child of child6'),
    React.createElement('h2',{},'i am 2nd child of child6'),
]
),
React.createElement('div',{id:'child6.1'},
[
    React.createElement('h2',{},'i am 1st child of child6.1'),
    React.createElement('h2',{},'i am 2nd child of child6.1'),
]
)
]
);

const root6=ReactDOM.createRoot(document.getElementById('root6'));
root6.render(heading6);


// what will happen when we do render 
const heading7=React.createElement('h2',{id:'heading'},"when we will render something it will replaces the code writen in html file inside the root ");
console.log(heading7);
const root7=ReactDOM.createRoot(document.getElementById('root7'));
root7.render(heading7);