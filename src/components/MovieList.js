// Map the data that you have from the API.
// It returns and renders a Movie component.
import Movie from './Movie'
import Row from 'react-bootstrap/Row';

export default function MovieList(props) {
    
    
    return (
        <div>
             <Row xs={1} md={3} className="g-4">
            {  props.fetchRes.map((element)=>{
                  return( element,
                    
            <Movie key={element.id} movie={element} />
         
            )
              })}
              </Row>
        </div>
    )
}

// .data.results