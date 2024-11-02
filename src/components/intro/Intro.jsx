import "./intro.css";
import Me from "/images/me_copy.png"
import { useContext } from "react";
import { ThemeContext } from '../../context';


const Intro = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Md Asaduzzaman</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">Problem Solver</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta magnam voluptatibus earum quos exercitationem quaerat repudiandae ut eum maiores tempore optio fuga fugit adipisci aspernatur, placeat magni quia iusto repellat.
                    </p>
                </div>
                <svg width="800px" height="800px"  viewBox="0 0 24 24" fill="none" style={{stroke: darkMode ? "white" : "#000000"}}  className="i-scroll" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11L12 14L9 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    );
};

export default Intro;