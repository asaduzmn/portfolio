import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src="https://images.pexels.com/photos/3917727/pexels-photo-3917727.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus about me end.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consequatur nobis et rem quam doloremque, vitae reiciendis, laudantium ut facere ab ipsa. Cumque eligendi, voluptatibus sapiente quas explicabo praesentium corrupti.
                </p>
                <div className="a-award">
                    <img 
                        src="https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" 
                        className="a-award-img" 
                    />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Internation award</h4>
                        <p className="a-award-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta fugiat ipsam cupiditate iusto nemo fuga incidunt, itaque autem explicabo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;