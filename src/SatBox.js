import React, { useState } from 'react';

function SatBox () {
    const [satScore, setSatScore] = useState("")

    return (
        <input type = "text" name = "name" onChange = {(e) => setSatScore(e.target.value)} value = {satScore}/>
    )
}

export default SatBox;