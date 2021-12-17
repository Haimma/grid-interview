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
            <td key={c.field}>
              {typeof  d[c.field] === 'string' ?  d[c.field] : <c.component data= {d[c.field]}/> }
            </td>
          )}
        </tr>)}
    </tbody>
  </table>
);

export default Grid;