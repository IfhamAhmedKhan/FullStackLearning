import PropTypes from 'prop-types'

function UserGreetings(props){
    const welcomeMessage = <h2 className="WelcomeMSG">Hello welcome {props.username}</h2>
    const loginPrompt = <h2 className="error">Please login {props.username}</h2>
        
    return(
        props.isLoggedIn ? welcomeMessage: loginPrompt
        
    );
}

UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreetings