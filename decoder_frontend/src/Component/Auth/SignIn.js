import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import baseurl from '../../BaseUrl';
export default class SignIn extends Component{
    constructor(props) {
        super(props)
        this.state={
            email:'',
            password:'',
            
        }
        this.email=this.email.bind(this);
        this.password=this.password.bind(this);
    }

   login = () =>{
    const { email }  = this.state ;
    const {  password }  = this.state ;
    fetch(baseurl.login, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            email:email,
            password:password,
          })  
        }).then((response)=>response.json())
          .then((responseJson)=>{
              console.log("cc",responseJson);
                localStorage.setItem("id",responseJson.data._id);
                localStorage.setItem("usertoken",responseJson.token);
                localStorage.setItem("username",responseJson.data.name);
                window.location.href = "/thread";
        },function(responseJson){
    });
}

   email(event){
        var email = event.target.value;
        var result=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        {
        if (result.test(email))
        {
         console.log ("valid");
        }else {
         console.log ("invalid");}
        }
        this.setState({email});  
    } 

    password(event){
        var password=event.target.value;
        this.setState({password});
    }

   render(){
       return(
        <div className="container">
          <div class="row">
            <div class="card-panel light-blue lighten-5 col s12 m12">
                <div class="">
                    {/* <form  id="form" method="POST"> */}
                        <h5 className="grey-text text-darken-3 center bold">Login</h5>
                        <div className="input-field col s12 center">
                            <div className="row">
                                <div className="input-field col s2"></div>
                                    <div className="input-field col s1">
                                        <label htmlFor="email">Email </label>
                                    </div>
                                    <div className="input-field col s5">
                                        <input type="email" id="email" name="email" onChange={this.email} /> 
                                    </div>
                            </div>
                        </div>
                        <div className="input-field col s12 center">
                            <div className="row">
                                <div className="input-field col s2"></div>
                                    <div className="input-field col s1">
                                        <label htmlFor="password">Password </label>
                                    </div>
                                    <div className="input-field col s5">
                                        <input type="password" id="password" name="password" onChange={this.password} /> 
                                    </div>
                                </div>
                            </div>

                        <div className="input-field col s12">
                            <div className="row">
                                <div className="input-field col s3"></div>
                                    <div className="input-field col s3">
                                        <button onClick={this.login.bind(this)} className="btn pink lighten-1 z-depth-0">LOGIN</button>
                                    </div>
                            
                            <div className="input-field col s3 rg">
                                <Link to='/register'>
                                    <button className="btn pink lighten-1 z-depth-0">REGISTER</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
    </div>
</div>
       )
   }
}