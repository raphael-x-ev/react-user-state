import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const UserTableRow = (props) => {
  return (
    <tr key={props.index}>
      <td>{props.tableData.id}</td>
      <td>{props.tableData.name.split(" ").slice(0, -1).join(" ")}</td>
      <td>{props.tableData.name.split(" ").slice(-1).join(" ")}</td>
      <td>{props.tableData.email}</td>
      <td>
        <Button status="Active" />
      </td>
    </tr>
  );
};

UserTableRow.propTypes = {
  index: PropTypes.number,
  tableData: PropTypes.object,
};

export default UserTableRow;
