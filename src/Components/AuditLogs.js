import React from 'react'

export const AuditLogs = () => {
    return (
        <div className="container">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Action</th>
      <th scope="col">Performed By</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">28/7/21 19:00:48</th>
      <td>XML Recieved</td>
      <td>Otto</td>
      <td>Success</td>
    </tr>
    <tr>
      <th scope="row">28/7/21 18:55:37</th>
      <td>Checker Rejected</td>
      <td>Aaron</td>
      <td>Invalid Economics Name</td>
    </tr>
    <tr>
      <th scope="row">28/7/21 18:30:28</th>
      <td>Maker Approved</td>
      <td>Sid</td>
      <td>Success</td>
    </tr>
    <tr>
      <th scope="row">28/7/21 18:20:18</th>
      <td>XML Recieved</td>
      <td>Rahul</td>
      <td>Success</td>
    </tr>
  </tbody>
</table>    
        </div>
    )
}
