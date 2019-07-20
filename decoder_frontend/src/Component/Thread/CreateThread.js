import React from 'react';
import baseurl from '../../BaseUrl';


export default class CreateThread extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            values: [],
            title:'',
            description:'', 
            user_id:'',
            auth:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.title=this.title.bind(this);
        this.description=this.description.bind(this);
      }
    
    getUser(){
        var user_id=localStorage.getItem('id');
        this.setState({user_id});
    }
      
    componentDidMount(){
        let auth =  localStorage.getItem('usertoken');
        this.setState({auth});
        this.getUser();
        this.createUI();  
    }
 
    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
               <input type="text" placeholder="Tags" value={el||''} onChange={this.handleChange.bind(this, i)} />
               <input type='button' className="btn pink lighten-1 z-depth-0" value='remove' onClick={this.removeClick.bind(this, i)}/>
               <div className="space1"></div>
            </div>          
        )
    }
   
    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }
     
    addClick(){
       this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
     
    removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
    }
    
    handleSubmit(event) {
        var newarray=this.state.values.slice();
        newarray.push(event.target.value);
        fetch('http://localhost:3001/api/thread/create', {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
            body:JSON.stringify({
                title:this.state.title,
                description:this.state.description,
                tags:newarray,
                username:this.state.user_id,
                token:this.state.auth
                })  
                }).then((response)=>response.json())
                  .then((responseJson)=>{
                      if(responseJson.type===true)
                      {
                        window.location.href = "/thread";
                      }
                    
                },function(responseJson){
            });
        event.preventDefault();
    }
    
    title(event){
        var title = event.target.value;
        this.setState({title});  
    }

    description(event){
        var description = event.target.value;
        this.setState({description});  
    }
       

render() {
    return (
        <div className="container">
             <form encType="multipart/form-data" id="form" method="POST" className="white col s6" >
           
                <h5 className="grey-text text-darken-3">New Thread</h5>
                <div class="column">
                <div className="input-field col s6">
                
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.title} /> 
                </div>
                <div className="input-field col s6">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" class="materialize-textarea" onChange={this.description}></textarea>
                    
                </div>
                <div className="input-field col s6">
                <div className="column">
                     <div className="input-field col s3">
                    
                    <input type="text" placeholder="Tags" className="" id="name" onChange={this.handleChange.bind(this,0)} /> 
                    </div>
                    <div className="input-field col s3">
                    {this.createUI()}
                    
                    <input type='button' className="btn pink lighten-1 z-depth-0" value='add more' onClick={this.addClick.bind(this)}/>
                    </div>
                </div>
                </div>
                <div className="input-field">
                <button onClick={this.handleSubmit} className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
                </div>
            </form>
       </div>
     
        );

       
    }
}

    

