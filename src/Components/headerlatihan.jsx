import foto from '../img/Creative team-cuate.png'

import React,{useState,useEffect} from "react";
import { useRef } from "react";

const HeaderLatihan = () => {
    const [hewanSaya, setHewanSaya] = useState(0);
    const [namaHewan, setNamaHewan] = useState();

    useEffect(() => {
        if(hewanSaya === 1){
            setNamaHewan("KIKO")
        } else {
            setNamaHewan("CIPUNG")
        }
    })

    const linkRef = useRef(null)
    const goto = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left:0,
            behavior:'smooth'
        })
    }
    return (
        <div>
            <div className='flex justify-center item-center'>
                <img src={foto} className='w-60' onClick={() => goto(linkRef.current)}/>
            </div>
            <h1 className='font-mont font-semibold text-center text-3xl'>LATIHAN useRef HOOK</h1>
            <br/>
            <div className='h-screen flex items-center justify-between'>
            <p className='w-96 break-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptatem soluta nobis rem aliquid modi harum 
               nostrum assumenda ducimus tempore repellat officia doloribus, odit cumque alias quidem ab magnam provident! Eveniet 
               incidunt alias, aut a qui laudantium ex fugiat repudiandae molestiae quasi ratione, est sunt maxime. Excepturi tenetur
               voluptatem saepe nihil ab harum sint maxime officiis neque alias asperiores omnis quod, pariatur, consequuntur, impedit
               ex fuga? Reprehenderit nulla repellendus, soluta explicabo doloremque aspernatur enim! Tenetur deleniti dolor blanditiis
               enim fugiat architecto cumque provident magnam quam pariatur.
               Asperiores placeat unde accusantium, aut ad ipsa ullam pariatur repellendus? Nam sunt a eos.
            </p>
            <br/>
            <p className='w-96 break-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptatem soluta nobis rem aliquid modi harum 
               nostrum assumenda ducimus tempore repellat officia doloribus, odit cumque alias quidem ab magnam provident! Eveniet 
               incidunt alias, aut a qui laudantium ex fugiat repudiandae molestiae quasi ratione, est sunt maxime. Excepturi tenetur
               voluptatem saepe nihil ab harum sint maxime officiis neque alias asperiores omnis quod, pariatur, consequuntur, impedit
               ex fuga? Reprehenderit nulla repellendus, soluta explicabo doloremque aspernatur enim! Tenetur deleniti dolor blanditiis
               enim fugiat architecto cumque provident magnam quam pariatur.
               Asperiores placeat unde accusantium, aut ad ipsa ullam pariatur repellendus? Nam sunt a eos.
            </p>
            <br/>
            <p className='w-96 break-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptatem soluta nobis rem aliquid modi harum 
               nostrum assumenda ducimus tempore repellat officia doloribus, odit cumque alias quidem ab magnam provident! Eveniet 
               incidunt alias, aut a qui laudantium ex fugiat repudiandae molestiae quasi ratione, est sunt maxime. Excepturi tenetur
               voluptatem saepe nihil ab harum sint maxime officiis neque alias asperiores omnis quod, pariatur, consequuntur, impedit
               ex fuga? Reprehenderit nulla repellendus, soluta explicabo doloremque aspernatur enim! Tenetur deleniti dolor blanditiis
               enim fugiat architecto cumque provident magnam quam pariatur.
               Asperiores placeat unde accusantium, aut ad ipsa ullam pariatur repellendus? Nam sunt a eos.
            </p>
            </div>
            <div className='p-60 pl-60'>
                <h1 className="text-4xl font-semibold font-mont">LATIHAN useState useEffect :</h1>
                <br/>
                <h5 className='text-xl font-semibold font-mont'>Nama Hewan Saya : {namaHewan}</h5>
                <h1 className='text-xl font-semibold font-mont'> Jumlah Hewan Saya : {hewanSaya} </h1>
                <br/>
                <button className='font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight' onClick={() => setHewanSaya((prev) => prev + 1)}>Tambah Kucing</button>
                <button className='font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight relative left-5' onClick={() => setHewanSaya((prev) => prev - 1)}>Kurang Kucing</button>
                <br/>
                <a href="" className='font-xs font-mont font-semibold text-biru py-80 flex justify-center item-center ' ref={linkRef}>Next Page</a>
            </div>
        </div>
    )
}

export default HeaderLatihan;