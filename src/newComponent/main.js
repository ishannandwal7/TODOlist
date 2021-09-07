import React,{useState} from 'react';
import "./main.css";

const Main = () => {
    const [inp, setinp] = useState(["ishan"]);
    //              ADD ITEMS
    const additem=()=>{
        let x=document.getElementById("inpitem").value;
        document.getElementById("inpitem").value="";
        setinp([...inp,x]);
        document.getElementById("inpitem").focus();


    }
    //                     CLEAR ALL ITEMS
    const clearall=()=>{
        setinp([]);
    }

    //                        DELETE ITEMS
    // const deleteitem=(ind)=>{
    //     // console.log("running");
    //     const nlist=inp.filter((curelem,index)=>{
    //         return index!==ind;
    //     });
    //     setinp(nlist);

    // }
    //                   EDIT ITEMS
    // const edititem=(cur_index,cur_val)=>{
    //         deleteitem(cur_index);
    //     document.getElementById("inpitem").value={cur_val};


    // }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
                additem();
        }
      }
    return (
        <>
            <div className="container" id="center">
                <div className="inpf">
                    <input type="text" id="inpitem" placeholder="Add item" autoFocus  onKeyDown={handleKeyDown} />
                    <button onClick={additem}>ADD ITEM</button>
                    {/* <button className="btn btn-primary">add</button> */}
                </div>
                <div className="itemlist">
                    {inp.map((ele,index)=>{
                        return(
                            <div className="item_val" key={index}>
                            <h3>{ele} </h3>
                            <button className="btn btn-info" onClick={()=>{
                                // console.log(ele);
                                document.getElementById("inpitem").value=ele;
                                
                                const nlist=inp.filter((curelem,ind)=>{
                                    return ind!==index;
                                });
                                setinp(nlist);
                                document.getElementById("inpitem").focus();
                                
                            }}>Edit</button>
                            <button className="btn btn-danger" onClick={
                                ()=>{
                                    // console.log("running");
                                    const nlist=inp.filter((curelem,ind)=>{
                                        return ind!==index;
                                    });
                                    setinp(nlist);
                                }
                            }>Delete</button>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button className="btn btn-danger" onClick={clearall}>Clear</button>
                </div>
               
            </div>
        </>
    )
}

export default Main
