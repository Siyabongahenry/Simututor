export default function PropLabelAndValue({labelName,value}){
    return(
        <div style={{overflow:"auto"}}>
            <p style={{width:"80mm",float:"left"}}>{labelName}</p>
            <p style={{float:"left"}}>:&nbsp;{value}</p>
        </div>
    )
}