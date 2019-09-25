import Webcam from "react-webcam";
import React from 'react';

class Webcamera extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
        //reference to camera 
    };
    render() {
        if(window.screen.width<=576){
        const videoConstraints = {
            //constraints for camera
            width: {
                exact: 1280
            },
            height: {
                exact: 720
            },
            facingMode: "user"
        };

        return (
             // note style prop is the only way of styling video element
             <div className="row p-0 m-0">
             <Webcam
                 style={{  margin: "10px 15px 5px 15px", background: "white" }}
                 audio={false}
                 height={(window.screen.height) - (window.screen.height * 17 / 100)}
                 width={(window.screen.width * (10.35)/ 12)}
                 ref={this.setRef}
                 screenshotFormat="image/jpeg"
                 videoConstraints={videoConstraints}
             />
             </div>
        );
    }

    else{
        const videoConstraints = {
            //constraints for camera
            width: window.screen.width -(window.screen.width*7/100),
            height:(window.screen.height)-(window.screen.height*25/100),
            facingMode: "user"
        };

        return (
             // note style prop is the only way of styling Webcam component 
            
                <Webcam
                    style={{  margin: "7px 15px 5px 3.5vw" }}
                    audio={false}
                    height={(window.screen.height)-(window.screen.height*25/100)}
                    width={(window.screen.width) -(window.screen.width*7/100)}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
      
        );
    }
    }
}

export default Webcamera;