export default function({name,children}){
    const headStyle ={
        backgroundColor:"#282c34",
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