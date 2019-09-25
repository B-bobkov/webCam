import React from 'react';
import milani from "../images/milani.jpg"
import Mascara from "../images/mascara.jpg"
import morphe from "../images/morphe-eyebrow.jpg"
import lipstick from "../images/lipstick.jpg"
import '../css/App.css';

class Products extends React.Component {
    componentDidMount(){
        var data={
        prod1:document.getElementById("prod1").getBoundingClientRect(),
        prod2:document.getElementById("prod2").getBoundingClientRect(),
        prod3:document.getElementById("prod3").getBoundingClientRect(),
        prod4:document.getElementById("prod4").getBoundingClientRect()
        }
        this.props.callback(data)
        // dend the reference to parent
    }
    constructor(props){
        super(props)
    }

    render() {
       
        return (
           
            <div>
            
             <div className="container-fluid " id="prod1">
                <div className="row products ">
                <img  className="product-img" alt="" height="55vh" src={milani}></img>
                    <div className="paragraphs">
                    <p>Prime Perfection Premire</p>
                    <p>Milani</p>
                    <p>$25.0</p>
                    </div>
               </div>
            </div>
            <div className="container-fluid " id="prod2">
                <div className="row products ">
                <img  className="product-img" alt="" height="55vh" src={morphe}></img>
                    <div className="paragraphs">
                    <p>Eyebrow Cream</p>
                    <p>Morphe</p>
                    <p>$15.45</p>
                    </div>
               </div>
            </div>
            
                       <div className="container-fluid ">
                <div className="row products " id="prod3">
                  <img  className="product-img" alt="" height="55vh" src={Mascara}/>
                    <div className="paragraphs">
                    <p>Volumizing Mascara</p>
                    <p>Sacha</p>
                    <p>$6.70</p>
                    </div>
               </div>
            </div>
           
            <div className="container-fluid " id="prod4">
                <div className="row products ">
               <img  className="product-img" alt="" height="55vh" src={lipstick}/>
                    <div className="paragraphs">
                    <p>Orgasm Satin Lipstick</p>
                    <p>Nars</p>
                    <p>$5.30</p>
                    </div>
               </div>
            </div>
           
           </div> 
          
          
        );
    }
}

export default Products;