import React,{useState,useEffect} from 'react';

const Header3 = () => {
  const [kucingSaya, setKucingSaya] = useState(0);
  const [namaKucingSaya, setNamaKucingSaya] = useState("")

  useEffect(() => {
    if(kucingSaya === 1) {
      setNamaKucingSaya("KIKO")
    } else {
      setNamaKucingSaya("AIKO")
    }
  })
    return (
        <div className='p-60 pl-60'>
        <h5 className='text-xl font-semibold'>Nama Kucing Saya : {namaKucingSaya}</h5>
         <h1 className='text-xl font-semibold'>{kucingSaya} kucing peliharaan</h1>
         <br/>
          <button className='font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight'onClick={() => setKucingSaya((prev)=> prev + 1)}>Tambah Kucing</button>
         <button className='font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight relative left-5'onClick={()=> setKucingSaya((prev)=> prev - 1)}>Kurang Kucing</button>
        </div> 
    )
}

export default Header3;