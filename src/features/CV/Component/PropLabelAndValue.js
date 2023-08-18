export default function PropLabelAndValue({labelName,value}){
    const styles = {
        float:"left",
        padding:"0",
        margin:"0",
        lineHeight:"2",
        width:"90mm",

    }
    return(
        <div style={{overflow:"auto"}}>
            <p style={{width:"80mm",...styles}}>{labelName}</p>
            <p style={{...styles}}>:&nbsp;{value}</p>
        </div>
    )
}