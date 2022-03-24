import classes from "./CreationCard.module.css";
import { useState, useRef, useEffect } from "react";
import Backdrop from "./Backdrop";
import { func } from "prop-types";

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function CreationCard(props){

    // https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
    // const EditableField = () => {
    //     const [isEditing, setEditing] = useState(false);
    //     const toggleEditing = () => {
    //       setEditing(!isEditing);
    //     };
      
    //     const inputRef = useRef(null);
      
    //     useEffect(() => {
    //       if (isEditing) {
    //         inputRef.current.focus();
    //       }
    //     }, [isEditing]);
    // }

    let tempPackage = {sourceTitle: props.tempData.thisTitle, sourceNote: props.tempData.thisNote};

    const [ESD, setESD] = useState(false);
    function openESD(){
        closeAllProperties()
        setESD(!ESD);
    }

    const [EED, setEED] = useState(false);
    function openEED(){
        closeAllProperties()
        setEED(!EED);
    }
    const [EST, setEST] = useState(false);
    function openEST(){
        closeAllProperties()
        setEST(!EST);
    }
    const [EET, setEET] = useState(false);
    function openEET(){
        closeAllProperties()
        setEET(!EET);
    }
    const [category, setCategory] = useState(false);
    function openCategory(){
        closeAllProperties()
        setCategory(!category);
    }
    function closeAllProperties(){
        setESD(false);
        setEED(false);
        setEST(false);
        setEET(false);
        setCategory(false);
    }
    
    function handleESDChange(event){
        console.log(event.target.value); 
        // PROBLEM: Form Date Selection Cannot be tracked by onChange events
        // Need another way to implement this!!
    }

    const [title, setTitle] = useState('');
    function handleTitleChange(event){
        // setTitle(event.target.value);
        tempPackage.sourceTitle = event.target.value;
        props.onExpand(tempPackage);
    }
    const [note, setNote] = useState('');
    function handleNoteChange(event){
        // setNote(event.target.value);
        tempPackage.sourceNote = event.target.value
        props.onExpand(tempPackage);
    }

    function submitHandler(event){
        event.preventDefault();
        // Prevent Default from behavior of jumping out of page
        // but to let React handle the data & redirect
    }

    const [startDate, setStartDate] = useState(new Date()); // unfinished!

    // 在創建方塊開啟時偵測 ESC 按鍵，並回傳功能到 CreationInput 頁面做關閉
    function handleKeyPress(event){
        if(event.key === 'Escape'){
            console.log('ESC Detected! ');
            props.onESC();
          }
    }

    return(
        <div className={classes.card} onKeyDown={handleKeyPress} tabIndex="0">
            <form  onSubmit={submitHandler}>

                <input onChange={handleTitleChange} value={props.tempData.thisTitle} onClick={closeAllProperties} className={classes.title} name="title" autoFocus placeholder="Title"></input>
                <a href="https://youtu.be/dQw4w9WgXcQ"><img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></a>
                
                <textarea onChange={handleNoteChange} value={props.tempData.thisNote} onClick={closeAllProperties} rows="4" name="description" placeholder="Note"></textarea>
                
                <div className={classes.container}>
                    {ESD && <div>
                        <label htmlFor="esd">Estimated Start Date: </label>
                        <input type="date" id="esd" name="esd" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openESD} src={require("../dummy-data/icons/esd.png")}></img>

                    {EED && <div>
                        <label htmlFor="eed">Estimated End Date: </label>
                        <input type="date" id="eed" name="eed" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEED} src={require("../dummy-data/icons/asd.png")}></img>

                    {EST && <div>
                        <label htmlFor="est">Estimated Start Time:</label>
                        <input type="time" id="est" name="est" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEST} src={require("../dummy-data/icons/est.png")}></img>

                    {EET && <div>
                        <label htmlFor="eet">Estimated End Time:</label>
                        <input type="time" id="eet" name="eet" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEET} src={require("../dummy-data/icons/ast.png")}></img>

                    {category && <div>
                    <label for="category">Category</label>
                    <select name="category" id="category">
                        <option value="">(None)</option>
                        <option value="Academic">Academic</option>
                        <option value="Coding">Coding</option>
                        <option value="Home">Home</option>
                    </select>
                    </div>}
                    <img className={classes.icons} onClick={openCategory} src={require("../dummy-data/icons/category.png")}></img>



                </div>
                {(ESD||EED||EST||EET||category) ? null : <div className={classes.spacer}></div>}



            </form>
        </div>
    );
}

export default CreationCard;


/* 本頁面用到的補充資料：
 
<input type="date">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

<input type="time">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time

REACT DATEPICKER
https://reactdatepicker.com/
https://www.npmjs.com/package/react-datepicker

React Handle KeyDown Events with <div>
https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react

*/