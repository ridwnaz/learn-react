import image from '../../img/istockphoto-510626514-612x612.jpg'
import React,{Component} from 'react';

class CardProduct extends Component {
    state = {
        order : 0,
        name : 'Ridwan'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        console.log('plus:', this)
        this.setState ({
         order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        }) 

    }

    handleMinus = () => {
        console.log('minus:',this)
        if(this.state.order > 0) {
            this.setState ({
                order: this.state.order - 1
            })
        }
    }
    render() {
        return (
            <div>
                <div className='flex items-center justify-center pt-12'>
                    <div className='bg-white shadow-md rounded-lg px-5 py-16'>
                    <div className='relative bottom-7'>
                        <img src={image} className=' h-36 w-60 rounded' />
                    </div>
                    <div className='relative bottom-5'>
                        <h1 className='font-mont font-semibold w-60 break-words text-lg'> LargeHottang's with Sausage and Mozarella </h1>
                        <p className='font-mont font-semibold text-birulight'>32.000 - 64.000</p>
                        <p className='font-mont text-gray-500 w-60 break-words text-xs pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Commodi molestias quas assumenda provident ius...</p>
                    </div>
                    <div className='flex inline-block'>
                        <button className='bg-biru p-2 px-4 text-center rounded-md text-xl font-mont text-white font-semibold hover:bg-birulight' onClick={this.handlePlus}>+</button>
                        <div className='bg-gray-200 p-2 px-16 text-center rounded font-mont font-medium relative left-1'><p>{this.state.order}</p></div>
                        <button className='bg-biru p-2 px-5 text-center rounded-md text-xl font-mont text-white font-semibold relative left-2 hover:bg-birulight' onClick={this.handleMinus}>-</button>
                    </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default CardProduct;