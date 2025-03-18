// import "./port.css"
import "./counter.css"
import minus from "./../images/minus.png"
import plus from "./../images/plus.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "./redux.js"
import { useNavigate } from "react-router-dom"

function Counter(){
    const [datauser , setdatauser] = useState({
        name:"",
        counter:0,
        id:Math.floor(Math.random() * 100)
    })
    const dispatch = useDispatch()
    const navi = useNavigate()
    
    function savedata(e){
        const news = {...datauser}
        news[e.target.name] = e.target.value
        setdatauser(news)
        console.log("update vaue :" , news)
    }
    function incerement(){
        const newuser = {...datauser}
        setdatauser(prevState => ({
            ...prevState,   
            counter: prevState.counter + 1  
        }));
        console.log("shub" , newuser.counter)
    }
    function handleSubmit() {
        if (!datauser.name.trim()) {
            alert("Please enter a name!");
            return;
        }

        
        const userData = {
            id: datauser.id,
            name: datauser.name,
            counter: datauser.counter
        };

        console.log("Dispatching user:", userData); // 🛠 Debugging log
        dispatch(addUser(userData)); 
        
      
        setdatauser({ name: "", counter: 0, id: Math.floor(Math.random() * 1000) });
        navi("/userdata")
    }
    return(
        <>
<div className="main">
    <div className="input">
        <div className="input-container">
        <input onChange={(e)=>{savedata(e)}} name="name" type="text" placeholder="write the UserName" />
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="counter">
        <img src={minus} alt="" />
        <h2 className="numbers">{datauser && datauser.counter}</h2>
      <img  className="plus" onClick={incerement} src={plus} alt="" />
     
        </div>
       

    </div>
</div>


        </>
    )
}
export default Counter