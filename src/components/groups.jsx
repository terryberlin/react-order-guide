import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { getGroups } from "../services/groupsService";

class Groups extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await getGroups();
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
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post => (
                <tr key={post.group_id}>
                  <td>{post.group_id}</td>
                  <td>{post.group_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      </div>
    );
  }
}

export default Groups;
