import PropTypes from 'prop-types';


function Button({children,type,version,isdisable}) {
  
  return (
<>
<button type={type} disabled={isdisable} className={`btn btn-${version} `} >{children} </button>
</>
  );
}

Button.defaultProps={
    type:"button",
    version:"primary",
    isdisable:false
}

Button.propTypes={
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    version:PropTypes.string,
    isdisable:PropTypes.bool,

}

export default Button;
