import PropType from 'prop-types'

function Students(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.IsStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropType.string,
    age: PropType.number,
    IsStudent: PropType.bool,
}

Students.defaultProps = {
    name: "Unknown",
    age: 0,
    IsStudent: false
}
export default Students