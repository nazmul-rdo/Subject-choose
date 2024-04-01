import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
function App() {
  
  const [sub, setSub] = useState(
    [
      {
        name: "Engineering",
        value: "378263",
        copy: false
      },
      {
        name: "Accounting",
        value: "342",
        copy: false
      },
      {
        name: "Psychology",
        value: "234234",
        copy: false
      },
      {
        name: "English",
        value: "234234",
        copy: false
      },

    ]
  )



  const handleClient = (index) => {
    const updatedInfo = sub.map((singleInfo, i) => {
      if (i === index) {
        return {
          ...singleInfo,
          copy: !singleInfo.copy
        };
      }
      return singleInfo;
    });

    const sortedInfo = updatedInfo.sort((a, b) => a.copy - b.copy);
    setSub(sortedInfo);
  };



  return (
    <div className="App">
      <div>
        <h3>Subject List</h3>
      </div>
      <div className="subject-list">
        {
          sub?.map((singleInfo, index) => (
            <div key={index} className={singleInfo.copy ? 'discount-code discount-applied' : 'discount-code'} >

              {singleInfo.copy ? <div onClick={() => handleClient(index)} className="discount-copied">{singleInfo.name}!</div> :
                <CopyToClipboard
                  text={singleInfo.value}
                  onCopy={() => handleClient(index)}
                >
                   <div className="black-code">{singleInfo.name}</div>
                </CopyToClipboard>
              }
            </div>
          ))
        }

      </div>



    </div >
  );
}
export default App;