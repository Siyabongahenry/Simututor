export default function({name,children}){
    const headStyle ={
        backgroundColor:"#015289",
        color:"White",
        padding:"0.2em"
    }
    return(
        <section>
            <h2 style={headStyle}>{name}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}