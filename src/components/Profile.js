import React,{useState,useEffect} from 'react'
import ShareButton from './ShareButton';
import Loading from './Loading';
const Profile = () => {
const [data,setData] = useState([]);
const [loading , setLoading] = useState(true);

const getUsers = async() =>{
    try {
       setLoading(true)
        const response = await fetch('https://api.github.com/users');
        setLoading(false)
       const jsonData = await response.json();
       setData(jsonData);
    } catch (error) {
        setLoading(false)
        console.log("my error is "+ error);
    }
}

useEffect(() => {
   getUsers();
}, [])

if(loading){
  return(
      <Loading/>
  )
}


    return (
        <>
        <div className="section">
      {
          data.map((val)=>{
            const { avatar_url, id, login, type ,url} = val

            return(
                <div key={id}  className="container">
                <div   className="card">
               <div className="jox">
                   <div className="fox">
                       <img src={ avatar_url } alt="not" />
                   </div>

                    <div className="sox">
                       <hr style={{border:'0.5px solid red'}} />
                        <h2 style={{color:'hotpink',textTransform:'capitalize'}}>github users</h2>
                        <h3>Name: <span style={{color:'brown',textTransform:'capitalize'}}>{ login }</span></h3>
                        <h3>Type: <span  style={{color:'brown',textTransform:'capitalize'}}>{ type }</span></h3>
                        <a style={{display:'block'}}  href=""><span style={{color:'hotpink'}}>Details:</span>{url}</a>
                        <ShareButton/>
                    </div>
                  
                    </div>

               </div>
              
               </div> 
            )
          })
      }
          
             
           
           </div>
        </>
    )
}

export default Profile
