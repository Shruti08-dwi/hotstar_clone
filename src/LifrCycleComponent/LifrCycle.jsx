// import React, { Component , Fragment } from 'react'
// class LifeCycle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
          
//             count : 0 ,
//          };
//         // this.handleChange = this.handleChange.bind(this);
//        console.log("Constructor block executing ....");
//     }
//     static getDrivedStateFromProps(props,state){
//     console.log("get Derived state from props");
//     return null;
//     }
//     // handleChange(e){
//     //     console.log(e);
//     // }
//     componentDidMount(){
//         // best place for calling ajax call and network calls
//         let res= await window.fetch("https://api.github.com/users");
//         let data = await res.json();
//         console.log(data);
//         console.log("component did mount loads only once in a dom best place for calling ajax");
//     };

//     changeName(){
//         this.setState({count:this.state.count+1});
//         console.log(this.state.count);
//     }

//     shouldComponentUpdate(nextProps , nextState){
//         console.log("should update component");
//             return this.state.count !==nextState.name;
//         //  return true;
//     }

//     componentDidUpdate(prevProps , prevState , snapshot){
//         console.log("get snapshot before update");
//         return null;
//     }
//     render() { 
//         console.log("i am render method i will be loading everytime DOM updated")
//         return (<Fragment>
//             <h1>life cycle methods in react{this.state.count} </h1>
//             <button onClick={this.changeName}>update name</button>
//         </Fragment>  
//         );
//     }
// }
 
// export default LifeCycle;