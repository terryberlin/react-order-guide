import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { getLocations } from "../services/locationsService";

class Locations extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await getLocations();
    this.setState({ posts });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <ToastContainer />
          <table className="table">
            <thead>
              <tr>
                <th>Group Code</th>
                <th>Group Name</th>
                <th>Date Shift</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post => (
                <tr key={post.group_id}>
                  <td>{post.location_id}</td>
                  <td>{post.location_name}</td>
                  <td>{post.date_shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      </div>
    );
  }
}

export default Locations;
