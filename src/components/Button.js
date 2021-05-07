import React from 'react'
// transition-colors duration-300 m-3 text-purple-700 border-purple-700 border-2 px-5 py-3 rounded-lg font-semibold focus:outline-none focus:ring focus:ring-purple-400 hover:bg-purple-700 hover:bg-opacity-25 active:bg-purple-900
function Button(props) {
    var classes;
    if(!props.outline)
    {
        classes=`m-3
        text-${props.color}-200
        bg-${props.color}-700
        px-5 py-3 rounded-lg
        font-semibold
        focus:outline-none focus:ring focus:ring-${props.color}-400
        hover:shadow-lg
        active:bg-${props.color}-900`;
        if(props.color==="yellow")
            classes=`m-3 text-yellow-100 bg-yellow-500 px-5 py-3 rounded-lg font-semibold focus:outline-none focus:ring focus:ring-yellow-400 hover:shadow-lg active:bg-yellow-600`
    }
    else{
        classes=`transition-colors duration-300 m-3
        text-${props.color}-700 border-${props.color}-700 border-2 px-5 py-3
        rounded-lg font-semibold
        focus:outline-none focus:ring focus:ring-${props.color}-400
        hover:bg-${props.color}-700 hover:bg-opacity-25 active:bg-purple-900`
        if(props.color==="yellow")
        classes=`transition-colors duration-300 m-3 text-yellow-500 border-yellow-500 border-2 px-5 py-3 rounded-lg font-semibold focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-yellow-500 hover:bg-opacity-25 active:bg-yellow-900`
    }
    return (
        <button className={classes}>
            {props.children}
        </button>
    )
}

export default Button
