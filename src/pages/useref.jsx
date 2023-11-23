import React,{useState, useEffect,useRef} from "react";

function UseRef () {

    const HeadingRef = useRef();
    const inputRef = useRef();
    const[lokasi,setLokasi] = useState("Bandung");

    useEffect(() =>{
        console.log("isi:" ,lokasi)
        console.log("input:" ,useRef)
        console.log("heading" , HeadingRef.current)
        HeadingRef.current.innerHTML='Saya ingin ke Dago mau Rolling'
    },[lokasi])
    return(
        <>
        <h1 
        ref={HeadingRef}
        className="text-center text-xl font-mont font-semibold pt-10"
        >Saya ingin ke {lokasi}</h1>
        <hr/>

        <div className="flex justify-center text-center py-5">
        <input ref={inputRef}/>
        <button 
        className=" relative left-1 font-mont text-white text-xs font-semibold
         bg-biru rounded p-2 hover:bg-birulight"
         onClick={()=> inputRef.current.fokus}>fokus</button>
        </div>
        </>
    )
}

export default UseRef;  