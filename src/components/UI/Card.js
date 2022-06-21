import "./Card.css"

function Card(props){
    const classes = 'card ' + props.className
    
    //because we added className as an attribute to the Card component, for it to be recognized as an
    //html attribute, we need to pass that prop of className inside of className attribute inside the div
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card