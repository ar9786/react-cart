import React,{useEffect,useState} from 'react';
import {Button,Table} from 'react-bootstrap/';
function Contact(props){

    let [data,setData] = useState({name:"arvind",age:"20"});
    let [user,setUser] = useState([{name:"arvind",age:"20"},{name:"jyoti",age:"24"},{name:"sonika",age:"27"},{name:"subhangi",age:"28"}]);
    useEffect(()=>{
       // console.log("Hello from hook")
    },[])
   // let data = "Contact Data";

    const test =(e)=> {
        setData({name:e.target.value})
    }

    return(
        <>
        <h1>Contact Component</h1>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
        <h3>{props.data.age}</h3>
        <input type="text" onChange={test} />
        <button onClick={()=>setData({name:"rahul",age:"31"})}>Update state</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {user.map((item,i)=>
                    <tr key={i}>
                        <td>{++i}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                )}
                </tbody>
            </Table>        
        </>
    )
}

export default Contact;