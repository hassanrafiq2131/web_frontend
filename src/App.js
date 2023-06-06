
import './App.css';
import Table from 'react-bootstrap/Table';
import React from 'react';
import axios from 'axios';
import useState from 'react';

import NavBar from './Components/NavBar';
import AddUser from './Components/AddPayrol'
import AllUsers from './Components/AllPayrol';
import PayrollManagement from './Components/PayrollManagement';
import EditUser from './Components/EditPayrol';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllPayrol from './Components/AllPayrol';
import AddPayrol from './Components/AddPayrol';
import EditPayrol from './Components/EditPayrol';


function App (){
  return (
    <BrowserRouter>
      <NavBar data-testid="navbarid"/>
      <Routes>
      <Route path = '/all' element = {<AllPayrol/>} />
      {/* <Route path = '/' element = {<PayrollManagement/>} /> */}
      <Route path = '/add' element = {<AddPayrol/>} />
      <Route path = '/edit/:id' element = {<EditPayrol/>}/>
      </Routes>
      

    </BrowserRouter>
  );
}


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state={ 
//       users: [], 

//       name:" ",
//       id: 0,
//       salary: 0


//     }
//     this.addEmployee = this.addEmployee.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//    refreshPage() {
//     window.location.reload(false);
//   }
//   componentDidMount() {
//     axios.get(`http://localhost:3001/users`)
//       .then(res => {
//         const user = res.data;
//         this.setState({ users : user});
//       })
// }
// addEmployee(){
//   console.log(this.state.name , this.state.id, this.state.salary)

//   const user = {
//      name: this.state.name,
//      id: this.state.id,
//      salary: this.state.salary


//   }


//   axios.post(`http://localhost:3001/new`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   console.log("Clicked")
//   window.location.reload(false);
// }
//  handleClick (e) {
//   this.addEmployee();
//   refreshPage()
 
   
//  };


// render(){
//   return (
//   <div>
//     <div>
//       <NavBar/>
//     </div>
//     <h1>
//       Payroll Management
//     </h1>
//     <input class= "name" id = "name" type = "text" placeholder='Enter Name'  onChange={(e) => {this.setState({name:e.target.value})}}>

//     </input>
//     <input id = "id" type = "number" placeholder='Enter Id'  onChange={(e) => {this.setState({id:e.target.value})}}>

//     </input>
//     <input id= "salary" type = "text" placeholder='Enter Salary' onChange={(e) => {this.setState({salary:e.target.value})}}>
 
//     </input>
//     <button id = "btn" onClick=  {this.addEmployee}>
//       Add Employee
//     </button>
//     <Table striped bordered hover>
//       <thead>
//         <tr class= "tr">
//           <th>Id</th>
//           <th>Name</th>
//           <th>Salary</th>
//         </tr>
//       </thead>
//       <tbody class = "tbody">
//       {this.state.users.map(user =>
//                     <tr key = "{user.id}">
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.salary}</td>
//                     </tr>
//                 )}

        
      
//       </tbody>
//     </Table>
//   </div>
 

//   )
// }
// }



export default App;

