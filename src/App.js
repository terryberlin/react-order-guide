import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Groups from "./components/groups";
import Orders from "./components/orders";
import PrepItems from "./components/prepItems";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    //state = {};

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/groups" component={Groups} />
            <Route path="/orders" component={Orders} />
            <Route path="/prepitems" component={PrepItems} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );

    // handleAdd = async () => {
    //   const obj = { title: "a", body: "b" };
    //   const { data: post } = await http.post(config.apiEndpoint, obj); //when using await decorate function with async
    //   const posts = [post, ...this.state.posts];
    //   this.setState({ posts });
    // };

    // handleUpdate = async post => {
    //   post.title = "UPDATED";
    //   await http.put(config.apiEndpoint + "/" + post.id, post);
    //   const posts = [...this.state.posts];
    //   const index = posts.indexOf(post);
    //   posts[index] = { ...post };
    //   this.setState({ posts });
    // };

    // handleDelete = async post => {
    //   const originalPosts = this.state.posts;

    //   const posts = this.state.posts.filter(p => p.id !== post.id);
    //   this.setState({ posts });

    //   try {
    //     await http.delete(config.apiEndpoint + "/" + post.id);
    //     //throw new Error("");
    //   } catch (ex) {
    //     if (ex.response && ex.response.status === 404)
    //       alert("This post has already been deleted.");
    //     this.setState({ posts: originalPosts });
    //   }
    // };

    // render() {
    //   return (
    //     <React.Fragment>
    //       <ToastContainer />
    //       <table className="table">
    //         <thead>
    //           <tr>
    //             <th>Group Code</th>
    //             <th>Group Name</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {this.state.posts.map(post => (
    //             <tr key={post.group_id}>
    //               <td>{post.group_id}</td>
    //               <td>{post.group_name}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </React.Fragment>
    //   );
    // }
  }
}
export default App;
