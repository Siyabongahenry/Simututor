export default function CVInnerSection({name,children})
{
    return(
        <section>
            <h4 style={{fontSize:"16px",fontWeight:"bold"}}>{name}</h4>
            <div>
                {children}
            </div>
        </section>
    )
}