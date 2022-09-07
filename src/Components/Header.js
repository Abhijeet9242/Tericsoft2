import "./Header.css"
import React,{Component} from "react"

class Header extends Component{
    render()
    {
        return(
            <>
                         <div className="header-cont">
                             <div className="header-list">
                                 <div>BMX</div>
                                 <div>Mountain</div>
                                 <div>Road</div>
                                 <div>Track</div>
                             </div>
                             <div className="straightline"></div>
            
                         </div>
                     </>
        )
    }
}

// const Header = () => {
//     return (
//         <>
//             <div className="header-cont">
//                 <div className="header-list">
//                     <div>BMX</div>
//                     <div>Mountain</div>
//                     <div>Road</div>
//                     <div>Track</div>
//                 </div>
//                 <div className="straightline"></div>

//             </div>
//         </>
//     )
// }

export default Header