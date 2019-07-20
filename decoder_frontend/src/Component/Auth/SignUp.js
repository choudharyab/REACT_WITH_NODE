import React ,{Component} from 'react';
import baseurl from '../../BaseUrl';
export default class SignOut extends Component{
    constructor(props) {
        super(props)
        this.state={
            email:'',
            password:'',
            name:''
            
        }
        this.email=this.email.bind(this);
        this.password=this.password.bind(this);
        this.name=this.name.bind(this);
    }

    
   
   register = () =>{
    const { email }  = this.state ;
    const {  password }  = this.state ;
    const {name} =this.state;
    fetch(baseurl.register, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            email:email,
            password:password,
            name:name
          })  
        }).then((response)=>response.json())
          .then((responseJson)=>{
              if(responseJson.type==true)
              {
                window.location.href = "/login";
              }
                
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

    name(event){
    var name=event.target.value;
        this.setState({name});
    }

    
   render(){
       return(
           <div className="container">
           <div class="row">
             <div class="card-panel light-blue lighten-5 col s12 m12">
                 <div class="">
                    
                         <h5 className="grey-text text-darken-3 center bold">REGISTER</h5>
                         <div className="input-field col s12 center">
                             <div className="row">
                                 <div className="input-field col s2"></div>
                                     <div className="input-field col s1">
                                         <label htmlFor="email">Email </label>
                                     </div>
                                     <div className="input-field col s5">
                                         <input type="email" id="email1" onChange={this.email} /> 
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
                                         <input type="password" id="password1" onChange={this.password} /> 
                                     </div>
                                 </div>
                             </div>
                             <div className="input-field col s12 center">
                             <div className="row">
                                 <div className="input-field col s2"></div>
                                     <div className="input-field col s1">
                                         <label htmlFor="password">Name </label>
                                     </div>
                                     <div className="input-field col s5">
                                         <input type="text" id="name" onChange={this.name} /> 
                                     </div>
                                 </div>
                             </div>
 
                         <div className="input-field col s12">
                             <div className="row">
                                 <div className="input-field col s5"></div>
                                     <div className="input-field col s4">
                                         <button onClick={this.register.bind(this)} className="btn pink lighten-1 z-depth-0">REGISTER</button>
                                     </div>
                             
                            
                         </div>
                     </div>
               
             </div>
         </div>
     </div>
 </div>
       )
   }
}