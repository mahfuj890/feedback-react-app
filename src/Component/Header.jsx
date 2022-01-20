
import PropTypes from 'prop-types';

function Header({title,bgColor,textColor}) {
  return (
      <header style={{background:bgColor,color:textColor}}>
          <div className="container">
              <h2>{title}</h2>
          </div>
      </header>
  )
}

//Default Props
Header.defaultProps ={
    title:"Feedback UI",
    bgColor:"rgba(0,0,0,0.4)",
    textColor:"#ff6a95"
}
Header.propTypes={
    title:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}
export default Header;
