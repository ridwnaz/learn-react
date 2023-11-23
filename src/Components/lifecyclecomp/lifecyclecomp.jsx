import { Component } from "react";

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 1
        }
        console.log("constructor")
    }
    static getDrivedStateFromProps(props,state) {
        console.log("getDrivedStateFromProps")
        return null;
    }

    componentDidMount () {
        console.log("componentDidMount")
        // setTimeout(() => {
        //     this.setState ({
        //         count: 2
        //     })
        // }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentUpdate")
        // console.log("nextProps:", nextProps);
        console.log("nextState", nextState);
        console.log("this state :", this.state);
        console.groupEnd();
        if(nextState.count >= 5) {
            return false;
        }
        return true ;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    changeCount = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    render() {
         console.log("render")
        return(
            <div>
                <div className="flex justify-center items-center pt-20">
                <button className='bg-biru p-2 px-4 text-center rounded-md font-mont text-white font-semibold hover:bg-birulight' onClick={this.changeCount}>Button Component {this.state.count}</button>
                </div>
            </div>
        )
    }
}

export default LifeCycleComp;