import React, { useEffect, useState } from "react";
// import styles from '@/styles/Nifty.module.css'
import axios from "axios";

function Nifty() {
    const [data,setData]=useState([])
    async function FetchData(stockName){
        let url="https://stock-data-api.oxoutsidethebox.repl.co/stocks/"
        if (stockName=="BSE" || stockName=="NSE"){
            url="https://stock-data-api.oxoutsidethebox.repl.co/index/"
        }
        let response=await axios.get(`${url}${stockName}`)
        setData(response.data.data)
        //    setData({"data":response.data});
      }
    useEffect(() => {
            console.log("Hello")
            FetchData("BSE");
        }
     , []);
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/index/BSE').then((response) => {
    //         setData(response.data.data)
    //     });
    //  }, []);
    const handleChange= async (e)=>{
        // console.log(e.target.value)
        FetchData(e.target.value);
        // console.log(data);
    }
    return (
        <>
        <select id ='selectedStock' defaultValue="BSE" name = 'selectedStock' className="border-2 p-2 border-black rounded-lg font-bold mt-5 ml-5" onChange={(e)=>{handleChange(e)}}>
            <option  value='NSE'>NSE</option>
            <option value='BSE'>BSE</option>
            <option value='Eicher'>Eicher</option>
            <option value='AshokLeyland'>Ashok Leyland</option>
        </select>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-600"></hr>
            <div>
                <h1 className="text-lime-600 text-lg font-bold ml-5 ">YES BANK</h1>
                <div className='grid grid-cols-2  '>
                    <div>
                        <p>{}  </p>
                        <span className="ml-5">5 </span>
                    </div>
                    <div className='grid justify-center border-2 p-2 mr-2'>
                        <div>
                            <p>Day Range</p>
                            <span>10</span>
                            <input className='' type="range" min={6} max={5} value={5} disabled ></input>
                            <span>{5}</span>
                        </div>
                        <div>
                            <p>Day Range</p>
                            <span>{5}</span>
                            <input type="range" min={5} max={5} value={5} disabled ></input>
                            <span>{5}</span>
                        </div>
                        <div>
                            <p>Day Range</p>
                            <span>{5}</span>
                            <input type="range" min={5} max={5} value={5} disabled ></input>
                            <span>{5}</span>
                        </div>
                    </div>
                    <div></div>
                    {/* <div>
                        {
                            data.map((item)=>{
                                return(
                                    <>
                                        <p>{item.Date} - {5} - {8}</p>
                                    </>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Nifty