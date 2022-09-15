import React from "react";
import PropTypes from "prop-types"

function Bodysection({title}) {
    return (
        <div className="bodysection">
            <h2>{title}</h2>
            {children}
        </div>
    )
}