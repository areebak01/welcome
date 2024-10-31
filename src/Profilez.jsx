
function Profilez(props){
    return(
        <>
        <h1 class = {props.designation}> {props.name}</h1>
        <p>{props.detail}</p>
        </>
    );

}

export default Profilez