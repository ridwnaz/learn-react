import CardProduct from './card/cardproduct';
import React,{Component} from 'react';

class ComponentMart extends Component {
    state = {
        order : 0,
        name : 'Ridwan'
    }

    handleCounterChange = (newValue) => {
        this.setState ({
            order: newValue
        })
    } 

    render() {
        return (
            <div>
                <div className='bg-birudark h-20'>
                    <h1 className='text-white text-4xl font-semibold text-center  font-mont pt-2'>wAn mart</h1>
                    <p className=' text-white text-center text-xs font-mont font-semibold'>Your Meals deal</p>
                    <div className=' bg-biru h-7 w-7 rounded-full float-right mr-20 relative bottom-10'>
                        <p className=' text-center pt-1.5 font-mont font-medium text-white text-xs'>{this.state.order}</p>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </div>
        )
    }

}

export default ComponentMart;