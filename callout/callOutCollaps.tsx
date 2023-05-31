import { parseJSON } from "jquery";
import * as React from "react";
import { useEffect, useState } from 'react';
// or 
var util = require('util')
export function CallOutCollaps({ title, children }) {

  const [domLoaded, setDomLoaded] = useState(false);
  const [style, setStyle] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/coy')
      .then(mod => setStyle(mod.default));
    setDomLoaded(true);
  })


  return (
    domLoaded ? (<div >


      <div className="callOutCollaps">
        <div>
          <details open><summary className="collapsContent des_style">Description</summary>
            <p>
              <span >{children}</span>
            </p>
          </details>
        </div>



        <style jsx>
          {`
         .callOutCollaps {
           display: flex;
           color: balck;
           align-items:center;
           flex-direction: row;
           padding: 0px 16px;
           background: #ffffff;
           border-radius: 0px 0px 15px 15px;
           padding: 0px;
         }
         .callOutCollaps :global(p) {
           margin: 0;
         }
         .collapsContent {
          padding: 10px 0px;
          font-weight:700;

        }
        

       `}
        </style>
      </div>
    </div>) : <div></div>

  );


}
