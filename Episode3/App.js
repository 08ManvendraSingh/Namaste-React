import React from "react";
import ReactDOM from "react-dom/client";

// how to create an element using jsx
const heading=<h2 className="heading">It is an jsx syntax</h2>
console.log(heading);
// it is convert into react.createElement.

// how to wirte in multiple line in jsx
// we can write inside ()
const heading2=(<h2>Mult line code 
    in jsx </h2>);

// functional component
const HeadingComponent=()=>{
    return <h1>this is functional component</h1>
}

// How to render component inside the other component;
const Title=()=>{
    return (
        <div>
            <HeadingComponent/>
            <h2>This is the title component</h2>
        </div>
    )
}

// How to write any js code indie jsx
const total=1222;

const CurlyBracket=()=>{
    return (
        <div>
            <h2>How to use any piece of js code {total}</h2>
        </div>
    )
}

// How to put react element inside react component
const heading3=(<h3>Mult line code 
    in jsx </h3>);

const Rcomp=()=>{
    return (
        <div>
            <h2>How to use any piece of js code {heading3}</h2>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent/>);
// root.render(<HeadingComponent></HeadingComponent>);
// root.render(HeadingComponent());
// root.render(<Title/>);
// root.render(<CurlyBracket/>);
root.render(<Rcomp/>);