import React, { Component } from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((conf) => <td key={conf.title}>{conf.title}</td>)}
      </tr>
    </thead>
    <tbody>
      {data.map(d =>
        <tr>
          {config.map(c =>
            <td key={d[c.field]}>
              {!c.component ?  d[c.field] : <c.component data={d[c.field]}/> }
            </td>
          )}
        </tr>)}
    </tbody>
  </table>
);

export default Grid;