import React from "react";
import { useParams } from "react-router-dom";
import CoursDetails from "../CoursDetails";



function PageCoursIndividuelle(props) {
    const titre = useParams().titre
    const listProf = props.listCours.filter((prof) => prof.titre === titre)

    console.log(listProf)
    return(
        <div>
            <CoursDetails titre={titre} listProf={listProf}/>
        </div>
    )
       
       
    
}

export default PageCoursIndividuelle;