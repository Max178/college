import './App.css';
import React, {useState} from "react";
import Schools from "./schools.json";

var SATVal = 0
var GPAScore = 0
var ECScore = 0
var SummerScore = 0
var ServiceScore = 0

export default function App() {

  //Define States i.e. the values of the numbers
  const [satScore, setSatScore] = useState("")
  const [gpaAverage, setGpaAverage] = useState("")
  const [schoolSelection, setSchoolSelection] = useState("North Carolina")
  const [extraCurricular, setExtraCurricular] = useState("0")
  const [summerHours, setSummerHours] = useState("0")
  const [communityServiceHours, setCommunityServiceHours] = useState("0")

  //Define Score Values


  //Score Calculating Functions
  function calculateECValue(e) {
    setExtraCurricular(e)
    const pd = parseInt(e)
    console.log(pd)
    if (pd) {
      if (pd > 3) {
        ECScore = 5
      }
      if (pd <= 3 && pd > 2) {
        ECScore = 4
      }
      if (pd > 0 && pd < 2) {
        ECScore = 2
      }
    }
    console.log(ECScore)
  }

  function calculateSummerScore(e) {
    setSummerHours(e)
    const pd = parseInt(e)
    console.log(pd)
    if (pd) {
      if (pd > 3) {
        SummerScore = 5
      }
      if (pd <= 3 && pd > 2) {
        SummerScore = 4
      }
      if (pd > 0) {
        SummerScore = 2
      }
    }
  }

  function calculateServiceScore(e) {
    setCommunityServiceHours(e)
    const pd = parseInt(e)
    console.log(pd)
    if (pd) {
      if (pd > 3) {
        ServiceScore = 5
      }
      if (pd <= 3 && pd > 2) {
        ServiceScore = 4
      }
      if (pd > 0) {
        ServiceScore = 2
      }
    }
    console.log(ServiceScore)
  }

  


  const [finalText, setFinalText] = useState("Not Applicable Account")

  const SchoolNameArr = Schools.map((schools) => {return (schools.name)})

  function schoolChange (e, sat, gpa) {
    console.log(ECScore)
    const iSat = parseInt(sat)
    const iGPA = parseInt(gpa)
    const iECs = parseInt(extraCurricular)
    const iSh = parseInt(summerHours)
    const iCS = parseInt(communityServiceHours)
    if (iSat && iGPA && iECs && iSh && iCS && SchoolNameArr.includes(e)) {
      var dr = ServiceScore + SummerScore + ECScore
      setFinalText("We Estimate your score to be " + dr.toString())
      console.log(SchoolNameArr.indexOf(e))
    }
    else {
      setFinalText("Not Availibe School. Please Enter All Valid INformation")
    }
    setSchoolSelection(e)
  }

  const School = Schools.map(
    (schools)=>{
      return (
        <tr>
          <td>{schools.name}</td>
          <td>{schools.satLower}</td>
          <td>{schools.satUpper}</td>
          <td>{schools.actLower}</td>
          <td>{schools.actUpper}</td>
        </tr>
      )
    }
  )

  return(
    <>
    <p>Please Enter Your SAT Score</p>
    <input type = "text" name = "name" onChange = {(e) => setSatScore(e.target.value)} value = {satScore}/>
    <p>Please Enter Your GPA</p>
    <input type = "text" name = "name" onChange = {(e) => setGpaAverage(e.target.value)} value = {gpaAverage}/>
    <p>Please Enter Your EC Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateECValue(e.target.value)} value = {extraCurricular}/>
    <p>Please Enter Your communityServiceHours Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateServiceScore(e.target.value)} value = {communityServiceHours}/>
    <p>Please Enter Your Summer Experience Hours</p>
    <input type = "text" name = "name" onChange = {(e) => calculateSummerScore(e.target.value)} value = {summerHours}/>
    
    <p>Please Enter The College you want</p>
    <input type = "text" name = "name" onChange = {(e) => schoolChange(e.target.value, satScore, gpaAverage)} value = {schoolSelection}/>
    
    
    <p>{finalText}</p>
    <p>{SchoolNameArr.includes("")}</p>
    <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>School</th>
                    <th>SAT Lower</th>
                    <th>SAT Upper</th>
                    <th>ACT Lower</th>
                    <th>ACT Upper</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {School}
                    
                </tbody>
            </table>
             
        </div>
    </>
    
  )
}






//<div>
  //Schools && Schools.map( school => {
    //return(
      //<div key={school.name}>
      
      //</div>
//</div>