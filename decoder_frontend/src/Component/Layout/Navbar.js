import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
class  Navbar extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:'',
        }
    }

    componentDidMount()
    {
        var name=localStorage.getItem('username');
        this.setState({name});
    }

    render(){
        return (
            <nav>
                <div class="nav-wrapper grey darken-3">
                    <a href="#" class="brand-logo">Decoder</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <Link to='/'>
                            <li><a>{this.state.name}</a></li>
                         </Link>
                        </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;