import React ,{Component } from 'react';
import ThreadList from '../Thread/ThreadList';
class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <ThreadList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;