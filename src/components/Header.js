import propTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        console.log("header click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Hello" onClick={onClick}/>
            
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Task Tracker'
// }

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
