import React from "react";
//import PropTypes from "prop-types";

function Bodysection({title, children}) {
    return (
        <div className="bodysection">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Bodysection