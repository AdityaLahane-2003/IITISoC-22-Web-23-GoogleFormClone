import React from 'react'
import form_image from "./form2.png";


import {FiStar, FiSettings} from "react-icons/fi" 
import {AiOutlineEye} from 'react-icons/ai' 
import { IconButton} from '@material-ui/core'
// import avatarimage from "./2.png" 
import {IoMdFolderOpen} from "react-icons/io" 
 

import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'; 
import Avatar from '@material-ui/core/Avatar'; 
import {useStateValue} from "./StateProvider";  
import {useHistory} from "react-router-dom";
// import {navigates} from "react-router-dom";
import "./Formheader.css"
function Formheader()
{  
    const history = useHistory();
    const [{doc_name}, dispatch] = useStateValue();
    function navigates (){
        history.push("/response")
    }
    return(
        <div className="form_header"> 
            <div className="form_header_left"> 
                <img src={form_image} style={{height:"45px", width:"40px"}}/>
                <input type="text" placeholder ="Untitled form" className="form_name" value={doc_name}></input>      
                <IoMdFolderOpen className="form_header_icon" style={{ marginRight:"10px"}}>  </IoMdFolderOpen>
                <FiStar className="form_header_icon" style={{marginRight:"10px"}}/>
                <span style={{fontsize:"12px", fontweight:"600"}}>All changes are saved in Drive</span>
                     </div>
                     <div className ="from_header_right">
 
                        <IconButton>
                            <ColorLensIcon size="small" className="form_header_icon"/>
                        </IconButton>
                        <IconButton onClick={navigates} >
                         <AiOutlineEye className="form_header_icon" />
                         </IconButton>
                        <IconButton>
                         <FiSettings className="form_header_icon" />
                         </IconButton> 
                         <Button variant='contained' color='primary' href='#contained-buttons'>Send</Button>
                        <IconButton>
                         <MoreVertIcon className="form_header_icon" />
                         </IconButton>
                        <IconButton>
                         <Avatar style={{height:"30px", width:"30px"}}/>
                         </IconButton>


                    </div>
          
         </div>
    )
}

export default Formheader