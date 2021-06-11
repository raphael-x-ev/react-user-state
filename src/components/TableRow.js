import React from 'react'
import Button from './Button'

const TableRow = ({userData}) => {
  console.log(userData)

  const tableRowData = [];


  // tableRowData1.map((item,index) => {
  //   tableRowData.push(    
    // <tr key={index}>
    //   <td>{item.id}</td>
    //   <td>{item.name.split(' ').slice(0, -1).join(' ')}</td>
    //   <td>{item.name.split(' ').slice(-1).join(' ')}</td>
    //   <td>{item.email}</td>
    //   <td><Button status="Active"/></td>
    // </tr>)
  // })
  return(
    <div>
    <tr key={1}>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td><Button status="Active"/></td>
    </tr>)
    </div>
  )
}

export default TableRow