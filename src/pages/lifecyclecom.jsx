import { Component } from "react";
import LifeCycleComp from "../Components/lifecyclecomp/lifecyclecomp";
class LifeCycleCom extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent:false
        //     })
        // },15000)
    }

    render() {
        return(
            <div>
                <h1 className="text-center font-semibold font-mont text-xl pt-40">LifeCycleComponent</h1>
                <hr />
            {
                this.state.showComponent 
                ?
                <LifeCycleComp/>
                :null
            }
            </div>
        )
    }
}

export default LifeCycleCom;