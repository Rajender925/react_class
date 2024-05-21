import React from 'react';

function Table() {
    const tableStyle = {
        border: '1px solid black',
        borderCollapse: 'collapse' // camelCase for border-collapse
    };

    const cellStyle = {
        border: '1px solid black'
    };

    return (
        <center>
        <div>
            <h1>TABLE CREATION : </h1>
        <table style={tableStyle}>
            
                <tr>
                    <th style={cellStyle}>Roll Number</th>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Mobile Number</th>
                </tr>
            
            
                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>

                <tr>
                    <td style={cellStyle}>19j41a0409</td>
                    <td style={cellStyle}>Rajender</td>
                    <td style={cellStyle}>6303064263</td>
                </tr>
            
        </table>
        <div>
            <br></br>
        </div>
        </div>
        </center>
    );
}

export default Table;
