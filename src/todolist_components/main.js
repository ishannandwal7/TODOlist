import React,{useState} from 'react';
import Footer from './footer';
import "./main.css";

const Main = () => {
    const [inp, setinp] = useState([]);
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
        document.getElementById("inpitem").focus();

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,165.3C672,149,768,75,864,64C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      

        
            <div className="container-fluid" id="center">
                <div className="op">

                <h1>todo list</h1>
                <div className="inpf">
                    <input type="text" id="inpitem" placeholder="Add item" autoFocus  onKeyDown={handleKeyDown} />
                    <button onClick={additem}>ADD ITEM</button>
                    {/* <button className="btn btn-primary">add</button> */}
                </div>
                <div className="itemlist ">
                    {inp.map((ele,index)=>{
                        return(
                            <div className="item_val" key={index}>
                            <div className="showitem-val">
                            <h3 className="txt">{ele} </h3>
                            </div>
                            <div className="btn btn-group">

                            <button className="btn " onClick={()=>{
                                // console.log(ele);
                                document.getElementById("inpitem").value=ele;
                                
                                const nlist=inp.filter((curelem,ind)=>{
                                    return ind!==index;
                                });
                                setinp(nlist);
                                document.getElementById("inpitem").focus();
                                
                            }}> <i title="EDIT ITEM" className="fa fa-edit"></i> </button>
                            <button className="btn" onClick={
                                ()=>{
                                    // console.log("running");
                                    const nlist=inp.filter((curelem,ind)=>{
                                        return ind!==index;
                                    });
                                    setinp(nlist);
                                }
                            }> <i title="DELETE ITEM" className="fa fa-trash"></i></button>
                            </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button className="btn btn-danger" onClick={clearall}>Clear</button>
                </div>
                </div>

                <div id="foot">
<Footer/>
</div>
            </div>
            
           
        </>
    )
}

export default Main
