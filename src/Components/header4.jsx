import foto from '../img/Creative team-cuate.png'
import {useRef} from 'react';


const Header4 = () => {
    const linkRef = useRef (null);
    const goto = (ref) => {
        window.scrollTo({
            top:ref.offsetTop,
            left:0,
            behavior:'smooth'
        })
    }  
    return (
        <div>
            <div className='flex justify-center item-center'>
            <img src={foto} className='w-60' onClick={()=> goto(linkRef.current)}/>
            </div>
            <h1 className='font-mont font-semibold text-center text-3xl'>Ini latihan HOOK</h1>
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
            <br />
            <a href="" className='font-xs font-mont font-semibold text-biru flex justify-center item-center' ref={linkRef}>Next Page</a>
        </div>
    )
}

export default Header4;
