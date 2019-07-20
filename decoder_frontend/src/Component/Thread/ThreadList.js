import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  Navbar from './../Layout/Navbar';
import baseurl from '../../BaseUrl';
import Moment from 'react-moment';
class ThreadList extends Component{
  constructor(props) {
    super(props);
    this.state = { 
        values: [],
        title:'',
        description:'', 
        user_id:'',
        data:[],
        name:'',
        data1:[],
    }
    this.search=this.search.bind(this);
  }

  getUser()
  {
    var name=localStorage.getItem('username');
    this.setState({name});
  }
  
  
  getData (auth,user_id) {
    return fetch('http://localhost:3001/api/thread/get_thread_one?token='+auth+'&user_id='+user_id, {
           method: 'GET',
           
          })
         .then(res => res.json())
         .then(
           (result) => {
             this.setState({
               data: result.data
             });
           },
           (error) => {
             this.setState({
               error
             });
           }
         )
  }

  search(event){
    return fetch('http://localhost:3001/api/thread/search?term='+event.target.value, {
           method: 'GET',
          })
         .then(res => res.json())
         .then(
           (result) => {
             console.log("ccd",result);
             this.setState({
              data1: result.data
             });
           },
           (error) => {
             this.setState({
               error
             });
           }
         )
  }
  
  componentDidMount(){
      let auth =  localStorage.getItem('usertoken');
      let user_id=localStorage.getItem('id');
      console.log("hy",user_id);
      this.getData(auth,user_id); 
      this.getUser();
      //this.getUser1();
  }
  
render(){
  if(this.state.data1.length >0)
  {
    return (
      <div className="">
        <Navbar />
          <div className="thread-list section col s12">
            <div class="col-md-12">
            <div class="left col-md-6">
            <a href="#" class="brand-logo">Thread</a>
            </div>
            <div class="input-group col-md-6 search-radius right">
            
                              <input type="text" class=" right search-query form-control  search-radius" placeholder="Search" onChange={this.search} />
                              
                             
                                 
                            
                          </div>
            </div>
          {this.state.data1.map((item, index) => (  
              <div class="row">
                <div class="col s12 ">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                    <div class="card-action">
                      {item.tags.map((item1,i)=>(
                        <span href="#" className="space">{item1}</span>
                      ))}
                         <Moment className="right">{item.createdAt}</Moment>
                      {/* <p href="#" className="right ">{item.createdAt}</p> */}
                      <p href="#" className="right rg1">{this.state.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              <div className="right">
                <Link to='/create'>
                  <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                </Link>
              </div>
          </div>
        </div>
      )
  }else{
  return (
    <div className="">
      <Navbar />
        <div className="thread-list section col s12">
          <div class="col-md-12">
          <div class="left col-md-6">
          <a href="#" class="brand-logo">Thread</a>
          </div>
          <div class="input-field col-md-6 search-radius right">
   
                            <input type="text" class="" placeholder="Search" onChange={this.search} />
                           
                           
                               
                          
                        </div>
          </div>
        {this.state.data.map((item, index) => (  
            <div class="row">
              <div class="col s12 ">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <div class="card-action">
                    {item.tags.map((item1,i)=>(
                      <span href="#" className="space">{item1}</span>
                    ))}
                     <Moment className="right">{item.createdAt}</Moment>
                      {/* <p href="#" className="right ">{item.createdAt}</p> */}
                      <p href="#" className="right rg1">{this.state.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
            <div className="right">
              <Link to='/create'>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
              </Link>
            </div>
        </div>
      </div>
    )
  }
  }
}

export default ThreadList;