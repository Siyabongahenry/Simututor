export default function CVInnerSection({name,children})
{
    return(
        <section>
            <h4>{name}</h4>
            <div>
                {children}
            </div>
        </section>
    )
}