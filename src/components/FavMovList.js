import Row from 'react-bootstrap/Row';
import FavMov from './FavMov';



export default function FavMovList (props){
    const setNewArr = (Arr) => {
        props.setNewArr(Arr)
     }
     const setDELETEDArr = (Arr) => {
        props.setDELETEDArr(Arr)
     }
     
    return (
        <div style={{backgroundColor: 'gray'}}>
        <Row xs={1} md={3} className="g-4">
       {  props.fetchRes.map((element)=>{
             return( element,
               
       <FavMov setNewArr={setNewArr} setDELETEDArr={setDELETEDArr} key={element.id} movie={element} />
    
       )
         })}
         </Row>
   </div>
    )
}