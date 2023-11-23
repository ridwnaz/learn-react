import { Component } from "react";
import React, {useState,useEffect} from "react";

const useStateDua = () => {
    const [lokasi,setLokasi] = useState("Bandung");
    const [lokasiKedua,setLokasiKedua] = useState("Cibaduyut")
    useEffect(()=>{
        console.log("Isi:", lokasi)
    },[lokasi,lokasiKedua])

    useEffect(() => {
        console.log("Saya juga ingin ke :" ,lokasiKedua)
    },[])
    return(
        <>
        <div>
            
            <h1 
            className=" text-center text-xl font-mont font-semibold pt-10"
            >Saya ingin ke: {lokasi}</h1>

            <button 
            className='font-mont text-white text-xs font-semibold
             bg-biru rounded p-2 relative left-32 hover:bg-birulight'
             onClick={() => setLokasi("Dago")}>Lokasi Ke 1</button>

            <button 
            className='font-mont text-white text-xs font-semibold
             bg-biru rounded p-2 relative left-56 hover:bg-birulight'
             onClick={() => setLokasi("Paskal")}>Lokasi ke 2</button>

        </div>
        <div>
            <h1
            className=" text-center text-xl font-mont font-semibold pt-10"
            >Lokasi kedua yang ingin saya kunjungi : {lokasiKedua}</h1>

            <button 
            className='bg-biru rounded p-2 relative text-white 
            font-mont text-xs font-semibold left-32 hover:bg-birulight'
             onClick={()=> setLokasiKedua("Cihampelas")}>Lokasi ke 1</button>
        </div>
        </>

    )
}

export default useStateDua;