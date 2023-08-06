import Item from "./Item";

const Items= ({items,incHours,decHours})=>{
   

    return(
        <div>
            <div className="row">
                {
                    items.map((item)=>
                        <div className="col-12 col-md-6 col-lg-4 p-2">
                            <Item item={item} incHours={incHours} decHours={decHours}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Items;