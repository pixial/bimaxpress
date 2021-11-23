import React, { useState } from 'react';
import '../stylesheets/ExistingRecords.css';
import { Checkbox, Popover } from 'antd';
import axios from 'axios';

function ExistingRecords() {
  const [pdData, SetpdData] = useState([]);

  axios
    .get('http://localhost:5000/personalDetails/')
    .then((response) =>
      setTimeout(function () {
        SetpdData(response.data);
      }, 1000)
    )
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className='ExistingRecordMain'>
      <div className='ExistingRecCustom'>
        <span className='material-icons SearchSMIcon'>search</span>
        <input type='text' className='ExistingRecSearch' />

        {/* IPA Selection */}
        <Popover
          placement='bottomLeft'
          content={
            <>
              <Checkbox>Health India Insurance</Checkbox>
              <br />
              <Checkbox>Reliance General Insurance</Checkbox>
              <br />
              <Checkbox>Future General Insurance</Checkbox>
              <br />
              <Checkbox>Medsave Health Insurance</Checkbox>
              <br />
              <Checkbox>Bajaj Allianz Insurance</Checkbox>
            </>
          }
          trigger='click'
          className='CustomResultPopOver'
        >
          <button className='CustomRecordBtn'>
            Insurance TPA{' '}
            <span className='material-icons smIcon'>arrow_drop_down</span>
          </button>
        </Popover>

        {/* Date Selection */}
        <Popover
          placement='bottomLeft'
          content={
            <>
              <Checkbox>Last Day</Checkbox>
              <br />
              <Checkbox>15 Days</Checkbox>
              <br />
              <Checkbox>Last Month</Checkbox>
              <br />
              <Checkbox>Last Quarter</Checkbox>
              <br />
              <Checkbox>Last Year</Checkbox>
            </>
          }
          trigger='click'
        >
          <button className='CustomRecordBtn'>
            Date Range{' '}
            <span className='material-icons smIcon'>arrow_drop_down</span>
          </button>
        </Popover>
        {/* <div className='statsDiv'>
          <span className='stats'>Result: {`3`}</span>
          <br />
        </div> */}

        <div className='CustomRecordDeleteDiv'>
          {/* <button className='deleteBtn'>
            <span
              className='material-icons'
              style={{ position: 'relative', top: '5px' }}
            >
              delete
            </span>
            Delete
          </button> */}
        </div>
      </div>
      <div className='RecordsTabel'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr className='bg-dark'>
              <th scope='col' width='10%'>
                Patient Name
              </th>
              <th scope='col' width='5%'>
                Gender
              </th>
              <th scope='col' width='10%'>
                Contact Number
              </th>
              <th scope='col' width='10%'>
                Policy Number
              </th>
              <th scope='col' width='10%'>
                Insurance TPA
              </th>
              <th scope='col' width='5%' style={{ fontSize: '10px' }}>
                Do You Have family physician
              </th>
              <th scope='col' width='10%'>
                Registration date
              </th>
              <th scope='col' width='2%'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pdData.map((currentpdData) => (
              <tr>
                <td>{currentpdData.name}</td>
                <td>{currentpdData.gender}</td>
                <td>{currentpdData.selfNumber}</td>
                <td>{currentpdData.PolicyNum}</td>
                <td>{currentpdData.TPAcompany}</td>
                <td>{currentpdData.previousHealthInsurance}</td>
                <td>{currentpdData.createdAt.toString().slice(0, 10)}</td>
                <td>
                  <button className='tableRowDeleteBtn'>
                    <span className='material-icons'>delete</span>
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Ishan Indraniya</td>
              <td>Male</td>
              <td>8349326329</td>
              <td>83493263</td>
              <td>Bajaj Alzer</td>
              <td>Yes</td>
              <td>2 Nov 2021</td>
              <td>
                <button className='tableRowDeleteBtn'>
                  <span className='material-icons'>delete</span>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ExistingRecords;
