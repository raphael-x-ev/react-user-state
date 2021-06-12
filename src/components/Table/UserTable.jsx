import PropTypes from "prop-types";
import React from "react";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";

const UserTable = (props) => {
  const tableRowData = [];

  props.userData.map((tableData, index) => {
    tableRowData.push(<UserTableRow key={index} tableData={tableData} />);
  });
  return (
    <div>
      <Table responsive="lg" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>EMAIL</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>{tableRowData}</tbody>
      </Table>
    </div>
  );
};

UserTable.propTypes = {
  userData: PropTypes.array,
};

export default UserTable;
