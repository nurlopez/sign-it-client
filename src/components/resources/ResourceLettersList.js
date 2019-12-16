import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import ResourceList from "./ResourceList";







export default class ResourceLettersList extends Component {

render() {
  return (
    <div>
      <h1>Resources</h1>
      <ResourceList />
      
     
      
    </div>
  );
}
}






// export default class ResourceLettersList extends Component {
  // state = {
  //   listOfResources: []
  // };
    

  // getAllResources = () => {
    
  //   const baseURL = process.env.REACT_APP_SERVER_URL;

  //   axios
  //     .get(`${baseURL}/resources`)
  //     .then(response => {
  //       const listOfResources = response.data;
  //       // console.log("anything?", response.data); // returns all
  //       this.setState({
  //         listOfResources
  //       });
  //       // console.log("state", listOfResources); // returns all
  //     })
  //     .catch(err => console.log(err));
  // };

  // componentDidMount() {
  //   this.getAllResources();
  // }
  // render() {
    // const allResources = this.state.listOfResources.map(resource => {
    //     return (
    //     <Link
    //       to={`/resources/${resource.category}/${resource.meaning}`}
    //       key={resource.meaning}
    //       className="resource"
    //     >
    //       {""}
    //       {resource.category}
    //     </Link>
    //   );
    // });
//     return (
//       <div>
//       <ResourceList />
//         {/* {allResources}
//         {""} */}
//       </div>
//     );
//   }
// }
