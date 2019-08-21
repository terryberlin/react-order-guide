import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import LocationsTable from "./locationsTable";
import Pagination from "./common/pagination";
import { getLocations } from "../services/locationsService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Locations extends Component {
  state = {
    locations: [],
    currentPage: 1,
    pageSize: 15,
    searchQuery: "",
    //selectedGenre: null,
    sortColumn: { path: "location_id", location: "asc" }
  };

  async componentDidMount() {
    const { data: locations } = await getLocations();
    this.setState({ locations });
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
      locations: allLocations
    } = this.state;

    let filtered = allLocations;
    if (searchQuery)
      filtered = allLocations.filter(m =>
        m.location_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.location]
    );

    const locations = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: locations };
  };

  render() {
    const { length: count } = this.state.locations;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    //    const { user } = this.props;

    if (count === 0) return <p>There are no locations in the database.</p>;

    const { totalCount, data: locations } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          <p>Showing {totalCount} location items.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <LocationsTable
            locations={locations}
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

export default Locations;
