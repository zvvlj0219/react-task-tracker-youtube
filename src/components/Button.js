import Prototypes from 'prop-types'

const Button = ({color,text,onClick}) =>{
  return (
    <button 
      style={{backgroundColor:color}} 
      className='btn'
      onClick={onClick}
    >{text}</button>
  )
}

Button.defaultProps = {
  color:'steelblue'
}

Button.prototypes = {
  text:Prototypes.string,
  color:Prototypes.string,
  onClick:Prototypes.func
}

export default Button;