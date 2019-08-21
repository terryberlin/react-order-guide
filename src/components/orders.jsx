import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import OrdersTable from "./ordersTable";
import Pagination from "./common/pagination";
import { getOrders } from "../services/ordersService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Orders extends Component {
  state = {
    orders: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    //selectedGenre: null,
    sortColumn: { path: "purchase_item", order: "asc" }
  };

  async componentDidMount() {
    const { data: orders } = await getOrders();
    this.setState({ orders });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      orders: allOrders
    } = this.state;

    let filtered = allOrders;
    if (searchQuery)
      filtered = allOrders.filter(m =>
        m.purchase_item.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const orders = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: orders };
  };

  render() {
    const { length: count } = this.state.orders;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    //    const { user } = this.props;

    if (count === 0) return <p>Building orders...</p>;

    const { totalCount, data: orders } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          <p>Showing {totalCount} order items.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <OrdersTable
            orders={orders}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Orders;
