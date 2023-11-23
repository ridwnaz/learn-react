import Logo from '../img/image-1-m.svg'
import vector from '../img/image-2-m.svg'

const ComponentSSO = () => {
    return(
        <div>
            <div className='px-3 py-10 md:px-72'>
                <img src={Logo} className=''/>
            </div>
            
            <div className='hidden md:flex float-right mr-10 mt-10'>
                <img src={vector} className='w-98'/>
            </div> 
            
            <div className='px-8 md:px-72'>
                <h1 className='font-mont font-bold text-3xl md:text-3xl'>Login SSO</h1>
                 <p className='font-mont text-sm pt-5 w-48 break-words md:text-sm'>
                    Satu Login Untuk Semua Aplikasi Dinas Pendidikan Provinsi JawaBarat
                </p>
            </div>
            
            <div className='px-8 pt-8 md:px-72'>
                <form>
                    <div>
                        <label className='font-mont font-semibold text-sm'>Username/NIK/NIP/NISN</label>
                        <br/>
                        <input id='' name='' type='text' placeholder='Text Placeholder' className='bg-gray-25 p-2 w-72 border-2 border-gray-300 rounded-md'/>
                    </div>
                    
                    <div className='pt-7'>
                        <label className='font-mont font-semibold text-sm '>Password</label>
                        <br/>
                        <input id='' name='' type='password' placeholder='Text Placeholder' className='bg-gray-25 p-2 w-72 border-2 border-gray-300 rounded-md '/>
                    </div>
                    
                    <div className='py-10'>
                        <button className='font-mont text-white font-semibold text-xs bg-biru p-2 w-72 rounded-md hover:bg-birulight'>Login</button>
                        <br/>
                        <a href='#' className='font-mont text-xs relative top-10'>Lupa Password ?</a>
                    </div>
                </form>
                
                </div>
                <div className='pt-20'>
                    <div className='bg-birudark h-20 mx-auto'>
                        <div className='py-5'>
                            <p className='text-xs text-white font-mont text-center md:'>©2023 Dinas Pendidikan JawaBarat. All Rights Reserved.</p>
                            <p className='text-white font-mont text-center md:'>Single Sign On</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ComponentSSO;