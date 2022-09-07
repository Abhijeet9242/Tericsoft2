import "./Content.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Content = () => {
    
    const[item,setItem] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res=>{
            console.log(res)
            setItem(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    

    return(
        <>
        
            <div className="contentdiv">
                <div className="highlight">Highlights
                    <hr className="hr"></hr>
                </div>

                <div className="item">
                    {
                       item.map((item,id)=>(
                        <div className="imgdiv">
                             <div className="h3text">
                                <h3 className="bmxday">Day {item.id} of BMX</h3>
                                <p className="bmxrating">{item.id}</p>
                             </div>
                             <div className="btndiv">
                                <span>HEATS</span>
                                <span>MIXED</span>
                            </div>
                            <img src={item.url} className="img"/>
                           
                        </div>
                        
                       ))
                    }
                </div>
            </div>
           
        </>
    )
    }

export default Content