import React,{PureComponent} from 'react';
import './Header.css';
import { RiMoonLine,RiMoonFill} from "react-icons/ri";
class Header extends PureComponent{
    render(){
        const {colorMode,darkModeEvent}=this.props;
        return(
            <div className={"Header "+colorMode}>
                <div className="headerContainer">
                    <p className="title">Where in the world?</p>
                    <div className="buttonContainer" onClick={darkModeEvent.bind(this,colorMode)}>
                      {
                      colorMode==='dark'
                      ?<button aria-label="dark moode button" className="darkmode-button darkButton"><RiMoonFill/></button>
                      :<button aria-label="dark moode button" className="darkmode-button"><RiMoonLine/></button>
                      }
                    <p>Dark Mode</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;