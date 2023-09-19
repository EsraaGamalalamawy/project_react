function Code(props){
    const {name,price}=props;
    return(
        <div>
            <h2> Name : {name}</h2>
            <h2> Price : {price}</h2>
        </div>
    )
}

export default Code;