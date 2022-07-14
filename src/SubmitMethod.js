
import React, {useState} from 'react';

function SubmitMethod() {

    //Collect College Name -- Feed into final method/obtain values from file somewhere

    const [dropDownDisplay, setDropDownDisplay] = useState("None");

    return (
        <form>
            <label>
                SAT Score
                <input type="text" name="name" />
            </label>
            <label>
                GPA
                <input type="text" name="name" />
            </label>
            <label>
                Select The School you want to Chance
                <select value = {dropDownDisplay} onChange = {(e) => setDropDownDisplay(e.target.text)}> 
                    <option value = "Florida">Florida</option>
                    <option value = "North Carolina">North Carolina</option>
                    <option value = "Duke">Duke</option>
                    <option value = "Carnegie Mellon">Carnegie Mellon</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
            
        </form>
       

    )
  }
  
  export default SubmitMethod;
  