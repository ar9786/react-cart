import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Profile(props){

   // let [products,setproducts] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then(response => { 
           props.profileHandler(response.data);
          // setproducts(response.data);
        })
        .catch(error => { console.log(error); alert("Try Again"); })
    },[])

   

    

    return(
        <>
      {console.log(props)}
            {props.profileData[0] ?
            <div className="container">
                <div className="row">
                {props.profileData[0].map((product,i) =>
                    <div className="col-md-4" key={i}>
                        {product.title}
                    </div>
                )}           
                </div>
            </div>
            :null}
        </>
    )
}

export default Profile;