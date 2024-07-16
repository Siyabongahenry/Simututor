export default function CVSection({name,children}){


    return(
        <section>
            <h2 className="p-2" style={{backgroundColor:"#015289",color:"white"}}>{name}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}
