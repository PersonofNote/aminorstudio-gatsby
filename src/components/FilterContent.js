import React from "react"

export default ( {props} ) => {
    return (
    <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={ onChange={handleInputChange}}/>
    )

}