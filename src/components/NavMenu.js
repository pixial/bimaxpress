import { useState } from 'react';
import '../stylesheets/NavMenu.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function NavMenu() {
  const [currentSel, SetCurrentSelect] = useState('Create Record');
  return (
    <>
      <div className='navMenuMain'>
        <div className='LogoImageDiv'>
          <button className='noStyle' style={{ textAlign: 'center' }}>
            <img src='./BimaXpresslogo.png' alt='' className='LogoImg' />
          </button>
        </div>

        <div className='optionsList'>
          <Link to='/' id='CreateRecord'>
            <div
              className={`optionDiv ${
                currentSel === 'Create Record' ? 'optionDivSelected' : null
              }`}
              id='Create Record'
              onClick={(e) => SetCurrentSelect(e.target.id)}
            >
              <button className='noStyle' id='Create Record'>
                <span className='material-icons navSMIcon' id='Create Record'>
                  add_circle
                </span>
                <span className='navMenuText' id='Create Record'>
                  Create Record
                </span>
              </button>
            </div>
          </Link>
          <Link to='/existingrecords' id='Existing Records'>
            <div
              className={`optionDiv ${
                currentSel === 'Existing Records' ? 'optionDivSelected' : null
              }`}
              id='Existing Records'
              onClick={(e) => SetCurrentSelect(e.target.id)}
            >
              <button className='noStyle' id='ExistingRecords'>
                <span
                  className='material-icons navSMIcon'
                  id='Existing Records'
                >
                  task
                </span>
                <span className='navMenuText' id='Existing Records'>
                  Existing Records
                </span>
              </button>
            </div>
          </Link>

          <div className='optionDiv'>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <span>Option 1</span>
                  </Menu.Item>
                  <Menu.Item>
                    <span>Option 2</span>
                  </Menu.Item>
                  <Menu.Item>
                    <span>Option 3</span>
                  </Menu.Item>
                  <Menu.Item>
                    <span>Option 4</span>
                  </Menu.Item>
                </Menu>
              }
            >
              <button className='noStyle' onClick={(e) => e.preventDefault()}>
                <span className='material-icons navSMIcon'>mail</span>
                <span className='navMenuText'>
                  Mail
                  {
                    <DownOutlined
                      style={{ marginLeft: '8px', fontSize: '14px' }}
                    />
                  }
                </span>
              </button>
            </Dropdown>
          </div>

          <div className='optionDiv'>
            <button className='noStyle'>
              <span className='material-icons navSMIcon'>bedroom_child</span>
              <span className='navMenuText'>Hospital</span>
            </button>
          </div>

          <div className='optionDiv'>
            <button className='noStyle'>
              <span className='material-icons navSMIcon'>bar_chart</span>

              <span className='navMenuText'>Analytics</span>
            </button>
          </div>

          <div className='optionDiv'>
            <button className='noStyle'>
              <span className='material-icons navSMIcon'>medication</span>

              <span className='navMenuText'>Doctor</span>
            </button>
          </div>

          <div className='optionDiv'>
            <button className='noStyle'>
              <span className='material-icons navSMIcon'>business</span>
              <span className='navMenuText'>
                Empanelled <span style={{ marginLeft: '37px' }}>Companies</span>{' '}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='header'>
        <span className='Username'>{currentSel}</span>
        <div className='headerProfile'>
          <span className='material-icons smIcon'>link</span>
          <span className='material-icons smIcon'>notifications</span>
          <img src='./userProfileIcon.jpg' alt='' className='userImage' />
          <span className='userName'>Ishan Indraniya</span>
          <span className='accountType'>Staff</span>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
