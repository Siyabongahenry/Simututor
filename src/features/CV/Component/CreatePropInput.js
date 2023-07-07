export default function CreatePropInput({labelName,name,value,placeholder,onChange=f=>f})
{
    return(
            <>
                <label className="form-label">{labelName}</label>
                <input name={name} value={value} onChange={onChange}  className="form-control" placeholder={placeholder}/>
            </>
    )
}