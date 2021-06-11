import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from './Button'
import TableRow from './TableRow'

const Body = ({userData}) => {
  console.log(userData)

  const tableRowData = [];


  userData.map((item,index) => {
    tableRowData.push(    
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name.split(' ').slice(0, -1).join(' ')}</td>
      <td>{item.name.split(' ').slice(-1).join(' ')}</td>
      <td>{item.email}</td>
      <td><Button status="Active"/></td>
    </tr>)
  })

  return(
    <div>
      
  <Table responsive>
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>SURNAME</th>
        <th>EMAIL</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      {/* <TableRow  data={userData}/> */}
      {tableRowData}
    </tbody>
  </Table>
    </div>
  )
}

export default Body