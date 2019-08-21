import React, { Component } from "react";
//import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";

class OrdersTable extends Component {
  columns = [
    {
      path: "purchase_item",
      label: "Item",
      content: order => (
        <Link to={`/orders/${order.purchase_item}`}>{order.purchase_item}</Link>
      )
    },
    { path: "purchase_item_description", label: "Description" },
    { path: "build", label: "Build" }
  ];

  //   constructor() {
  //     super();
  //     const user = auth.getCurrentUser();
  //     if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  //   }

  render() {
    const { orders, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={orders}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default OrdersTable;
