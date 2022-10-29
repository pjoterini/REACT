
import Button from './Button'


const Header = ({ title }) => {
const onClick = () => {
    console.log("clikc")
}

  return (
     <header className="header">
     <h1>{title}</h1>
     <Button color='green' text='hello' onClick={onClick}/>
    
    
 </header>
  )
}

Header.defaultProps = {
    title: "Task TrAcker",
}

// const headingStyle ={
//     color: "red", 
//     backgroundColor: "black"
// }

export default Header