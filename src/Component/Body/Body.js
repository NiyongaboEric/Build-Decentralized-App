import React, { Component } from 'react';
import './Body.css';
import { Jumbotron} from 'react-bootstrap';

class Body extends Component{
render () {
    return (
        <Jumbotron bsClass="jumbotron">
            <div className='container'>
                <h1>No Middle Man</h1>
                <p>Trust me, you can send and receive money without any third party
                            our currency is symbol is <strong><span className='highlight'> AFR</span></strong>
                </p>               
            </div> 
        </Jumbotron>
        );
    }
}
export default Body;










// {/* <div className='container'>
// <h1>No Middle Man</h1>
// <p>Trust me, you can send and receive money without any third party
//             our currency is symbol is <strong><span className='highlight'> AFR</span></strong>
// </p>               
// </div> */}





// Trust me, you can send and receive money without any third part
// third party <strong>our currency is AFR</strong>            
/* <div >
<div className='container'>
     <div className='row'>
         <div className='col-sm-6 btn-holder'>
            <img  src='./Block_AI.png' alt="Blockchain" className='img-responsive'/>
         </div>
         <div className="col-sm-6">
             <h1>Hello Cruel World</h1>
             <p>
             Lorem Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a 
             galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap
             into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.
             </p>
             <a href='#' className='btn btn-primary'>Subscribe</a>
         </div>
     </div>

</div>
</div> */