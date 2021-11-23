import moment from 'moment';
import { React, useState } from 'react';
import '../stylesheets/CreateRecord.css';
import { Select, Input, Radio, DatePicker, message } from 'antd';
const CreateRecord = (props) => {
  const { Option } = Select;
  const [TPAerror, setTPAerror] = useState(false);
  const [formpart, setFormPart] = useState('first');

  const [PDFormData, SetPDFromData] = useState({
    TPAcompany: null,
    name: '',
    gender: 'Male',
    dob: '01/01/2000',
    occupation: '',
    selfNumber: '',
    relativeContaclNum: '',
    InsureCardNum: '',
    PolicyNum: '',
    EmployeeID: '',
    previousHealthInsurance: 'No',
    familyPhysician: 'No',
    streetAddress: '',
    city: null,
    State: null,
    PostalCode: '',
  });

  function TPANextHandler(e) {
    e.preventDefault();
    if (PDFormData.TPAcompany === null) {
      setTPAerror(true);
    } else {
      setFormPart('second');
    }
  }
  // console.log(PDFormData);
  function submitHandle(event) {
    event.preventDefault();
    if (PDFormData.name.length < 3) {
      message.error('Too short Name');
    } else if (PDFormData.dob === '') {
      message.error("Date of Birth can't be null");
    } else if (PDFormData.occupation.length < 2) {
      message.error('Too short Occupation');
    } else if (PDFormData.selfNumber.length !== 10) {
      message.error('Contact Number Must be 10 digits');
    } else if (
      PDFormData.relativeContaclNum.length !== 0 &&
      PDFormData.relativeContaclNum.length !== 10
    ) {
      message.error('Relative Contact Number Must be 10 digits');
    } else if (PDFormData.InsureCardNum.length !== 8) {
      message.error('Insured Card Number must be 8 digits');
    } else if (PDFormData.PolicyNum.length !== 8) {
      message.error('Policy Number must be 8 digits');
    } else if (PDFormData.EmployeeID.length !== 10) {
      message.error('Employee ID must be 10 digits');
    } else if (PDFormData.streetAddress.length < 2) {
      message.error('Too short Address');
    } else if (PDFormData.city === null) {
      message.error("City can't remain null");
    } else if (PDFormData.State === null) {
      message.error("State can't remain null");
    } else if (PDFormData.PostalCode.length !== 6) {
      message.error('Postal Code must be 6 digits');
    } else {
      message.success('Data Has been Added');
      props.OnNewData(PDFormData);
      // window.open('/', '_self');
    }
  }
  return (
    <div className='CreateRecord'>
      <div className='statusDiv'>
        <div className='track'>
          <span
            className={`trackNumber ${
              formpart === 'first' || formpart === 'second'
                ? 'activetrack'
                : null
            }`}
          >
            1
          </span>

          {formpart === 'first' && (
            <span
              className={`trackName ${
                formpart === 'first' ? 'activetrack' : null
              }`}
            >
              Details of TPA
            </span>
          )}
        </div>

        <span
          className='seprationTrack'
          style={{ color: formpart === 'second' ? 'white' : null }}
        >
          ----------
        </span>
        <div className='track '>
          <span
            className={`trackNumber ${
              formpart === 'second' ? 'activetrack' : null
            }`}
          >
            2
          </span>
          {formpart === 'second' && (
            <span
              className={`trackName ${
                formpart === 'second' ? 'activetrack' : null
              }`}
            >
              Patient Details
            </span>
          )}
        </div>
      </div>
      <form onSubmit={submitHandle}>
        {/* TPA First Part*/}
        {formpart === 'first' && (
          <div className='tpaDropdownDiv'>
            <span>Insurance Company</span>
            <br />
            <Select
              showSearch
              placeholder='Select a insurance company'
              optionFilterProp='children'
              className='tpaSelect'
              value={PDFormData.TPAcompany}
              onSelect={(val) => {
                SetPDFromData({ ...PDFormData, TPAcompany: val });
                setTPAerror(false);
              }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='Health India Insurance'>
                Health India Insurance
              </Option>
              <Option value='Reliance General Insurance'>
                Reliance General Insurance
              </Option>
              <Option value='Future General Insurance'>
                Future General Insurance
              </Option>
              <Option value='Medsave Health Insurance'>
                Medisave Health Insurance
              </Option>
              <Option value='Bajaj Allianz Insurance'>
                Bajaj Allianz Insurance
              </Option>
            </Select>
            <br />
            {TPAerror && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                * TPA Can't be blank
              </span>
            )}
            <button className='createRecBtns' onClick={TPANextHandler}>
              Next{' '}
              <span className='material-icons smIcon'>arrow_forward_ios</span>
            </button>
          </div>
        )}

        {/* Patient Details Second Part*/}
        {formpart === 'second' && (
          <div className='patientDetailsMainDiv'>
            <div className='LeftDetails'>
              <br />
              <span className='PDlabel'>Patient Name</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Name'
                  required
                  value={PDFormData.name}
                  onChange={(e) => {
                    SetPDFromData({ ...PDFormData, name: e.target.value });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Gender</span>
              <div className='PDinputField'>
                <Radio.Group
                  options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                    { label: 'Other', value: 'Other' },
                  ]}
                  value={PDFormData.gender}
                  onChange={(e) => {
                    SetPDFromData({ ...PDFormData, gender: e.target.value });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Date of birth</span>
              <div className='PDinputField'>
                <DatePicker
                  style={{ width: '100%' }}
                  defaultValue={moment('01/01/2000', 'DD/MM/YYYY')}
                  onChange={(date, dateString) => {
                    SetPDFromData({ ...PDFormData, dob: dateString });
                  }}
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </div>
              <br />
              <span className='PDlabel'>Occupation</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Occupation'
                  required
                  value={PDFormData.occupation}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      occupation: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Contact Number</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Contact Number'
                  required
                  type='number'
                  value={PDFormData.selfNumber}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      selfNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Relative Contact Number</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Relative Contact Number'
                  type='number'
                  value={PDFormData.relativeContaclNum}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      relativeContaclNum: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Insured Card Number</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Insured Card Number'
                  required
                  value={PDFormData.InsureCardNum}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      InsureCardNum: e.target.value,
                    });
                  }}
                  type='number'
                />
              </div>
            </div>
            <div className='RightDetails'>
              <br />
              <span className='PDlabel'>Policy Number</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Policy Number'
                  required
                  type='number'
                  value={PDFormData.PolicyNum}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      PolicyNum: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <span className='PDlabel'>Employee ID</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Employee ID'
                  required
                  type='number'
                  value={PDFormData.EmployeeID}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      EmployeeID: e.target.value,
                    });
                  }}
                />
              </div>
              <br />

              <span className='PDlabel'>
                Do you have any previous health insurance ?
              </span>
              <div className='PDinputField'>
                <Radio.Group
                  options={[
                    { label: 'Yes', value: 'Yes' },
                    { label: 'No', value: 'No' },
                  ]}
                  value={PDFormData.previousHealthInsurance}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      previousHealthInsurance: e.target.value,
                    });
                  }}
                />
              </div>
              <br />

              <span className='PDlabel'>
                Do you have any Family Physician ?
              </span>
              <div className='PDinputField'>
                <Radio.Group
                  options={[
                    { label: 'Yes', value: 'Yes' },
                    { label: 'No', value: 'No' },
                  ]}
                  value={PDFormData.familyPhysician}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      familyPhysician: e.target.value,
                    });
                  }}
                />
              </div>
              <br />

              <span className='PDlabel'>Street Address</span>
              <div className='PDinputField'>
                <Input
                  placeholder='Enter Occupation'
                  required
                  value={PDFormData.streetAddress}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      streetAddress: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                  <span className='PDlabel'>City</span>
                  <br />
                  <Select
                    showSearch
                    placeholder='Select City'
                    className='PDSelect'
                    value={PDFormData.city}
                    onSelect={(val) => {
                      SetPDFromData({ ...PDFormData, city: val });
                    }}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value='Ujjain'>Ujjain</Option>
                    <Option value='Indore'>Indore</Option>
                    <Option value='Bhopal'>Bhopal</Option>
                  </Select>
                </div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                  <span className='PDlabel'>State</span>
                  <br />
                  <Select
                    showSearch
                    placeholder='Select State'
                    className='PDSelect'
                    value={PDFormData.State}
                    onSelect={(val) => {
                      SetPDFromData({ ...PDFormData, State: val });
                    }}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value='MP'>MP</Option>
                    <Option value='UP'>UP</Option>
                    <Option value='CG'>CG</Option>
                  </Select>
                </div>
              </div>

              <br />
              <span className='PDlabel'>Postal Code</span>
              <div className='PDinputField'>
                <Input
                  required
                  placeholder='Enter Insured Card Number'
                  type='number'
                  value={PDFormData.PostalCode}
                  onChange={(e) => {
                    SetPDFromData({
                      ...PDFormData,
                      PostalCode: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <button className='submitBtn' type='submit'>
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default CreateRecord;
