export default function CVInnerSection({name,childred})
{
    return(
        <section>
            <h4>{name}</h4>
            <div>
                {childred}
            </div>
        </section>
    )
}