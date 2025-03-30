import React, { useState } from 'react';

function KaraokeCalculator() {
  const [hoursNoStudent, setHoursNoStudent] = useState('');
  const [hoursStudent, setHoursStudent] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let hours = isStudent ? hoursStudent : hoursNoStudent;
    if (!hours) {
      alert('กรุณากรอกจำนวนชั่วโมง');
      setTotal(0);
      return;
    }

    const pricePerHour = isStudent ? 80 : 120;
    const calculatedTotal = hours * pricePerHour;
    setTotal(calculatedTotal);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <table width="400" border="2" bordercolor="#000000" cellpadding="3">
          <tbody>
          <table width="400" border="2" bordercolor="#000000" cellpadding="3" style={{ border: "1px solid black", marginTop: '3px', marginLeft: '3px' }}>
            <tr>
              <td colSpan="1" id="karaokae">ร้านคาราโอเกะ</td>
            </tr>
            </table>
            <tr>
              <td>
                <table width="400" border="1" bordercolor="#000000"><br />&nbsp;&nbsp;
                <input
                  type="radio"
                  name="c1"
                  id="nohave"
                  value="ไม่มีบัตร"
                  checked={!isStudent}
                  onChange={() => setIsStudent(false)}
                />
                &nbsp;ไม่มีบัตรนักศึกษา <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน &nbsp;
                <input
                  type="text"
                  size="2"
                  id="txtqty1"
                  value={hoursNoStudent}
                  onChange={(e) => setHoursNoStudent(e.target.value)}
                />{' '}
                &nbsp;ชั่วโมง <br />
                &nbsp;&nbsp;
                <input
                  type="radio"
                  name="c1"
                  id="have"
                  value="มีบัตร"
                  checked={isStudent}
                  onChange={() => setIsStudent(true)}
                />
                &nbsp;มีบัตรนักศึกษา <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน &nbsp;
                <input
                  type="text"
                  size="2"
                  id="txtqty2"
                  value={hoursStudent}
                  onChange={(e) => setHoursStudent(e.target.value)}
                />{' '}
                &nbsp;ชั่วโมง <br /><br />
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={calculateTotal}>คิดเงิน</button>
        <br />
        รวมเป็นเงินทั้งสิ้น = <input type="text" id="txtTotal" value={total} readOnly /> บาท
      </div>
    </div>
  );
}

export default KaraokeCalculator;
