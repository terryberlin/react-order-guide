import React, { Component } from "react";
//import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";

class LocationsTable extends Component {
  columns = [
    {
      path: "location_id",
      label: "ID",
      content: location => (
        <Link to={`/locations/${location._id}`}>{location.location_id}</Link>
      )
    },
    { path: "location_name", label: "Location" },
    { path: "date_shift", label: "Date Shift" }
  ];

  //   constructor() {
  //     super();
  //     const user = auth.getCurrentUser();
  //     if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  //   }

  render() {
    const { locations, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={locations}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default LocationsTable;
