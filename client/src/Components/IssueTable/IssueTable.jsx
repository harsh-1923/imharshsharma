import React from "react";
import "./IssueTable.css";

function IssueTable({ bugs }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="issue-header">Issue</th>
          <th className="status-header">Status</th>
        </tr>
      </thead>
      <tbody>
        {bugs.map((bug, index) => (
          <tr key={index}>
            <td className="issue-cell">{bug.bug}</td>
            <td className="status-cell">{bug.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssueTable;
