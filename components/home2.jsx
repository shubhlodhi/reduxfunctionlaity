import avatar from "./../images/avataaars.svg"
import "./port.css"
function Home2(){
    return (
        <>
          <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                  {/* Masthead Avatar Image */}
                  <img
                    className="masthead-avatar mb-5"
                    src={avatar}
                    alt="..."
                  />
                  {/* Masthead Heading */}
                  <h1 className="masthead-heading text-uppercase mb-0">
                    Shubh Lodhi
                  </h1>
                  {/* Icon Divider */}
                  <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {/* Masthead Subheading */}
                  <p className="masthead-subheading font-weight-light mb-0">
                    Software Developer - Full Stack - Intern
                  </p>
                </div>
              </header>
        </>
    )
}
export default Home2