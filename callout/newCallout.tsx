import { parseJSON } from "jquery";
import * as React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from 'react';
import { inspect } from 'util' // or directly
// or 
var util = require('util')
export function NewCallOut({ title, desc, children }) {

  const [domLoaded, setDomLoaded] = useState(false);
  const [ style, setStyle ] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/one-light')
    .then(mod => setStyle(mod.default));
    setDomLoaded(true);
  })
  let doc = `{ "id": 10,
  "username": 'theUsername',
  "firstName": 'John',
  "lastName": 'James',
  "email": 'john@email.com',
  "password": '12345',
  "phone": '12345',
  "status":true,
  "userStatus": 1 }`

  return (
   domLoaded?(    <div className="newCallOut">
   <div className="newCallOut">
     
     {/* <strong>{title}</strong> */}
     <span>{title}</span>

     <style jsx>
       {`
         .newCallOut {
           display: flex;
           flex-direction: row;
           padding: 12px 16px;
           background: #e3e8ee;
           color: #4f566b;
           border-radius: 15px 15px 0px 0px;
         }
         .newCallOut :global(p) {
           margin: 0;
         }
       `}
     </style>
   </div>

   <div className="newCallOut">
     <div><SyntaxHighlighter
             language="autohotkey"
             style={style}
             wrapLongLines
             customStyle={{
                //  backgroundColor: "#4f566b",
                 opacity: "1",
                 
                 // marginTop: "-2rem",
             }}
             codeTagProps={{
                 style: {
                     color: "#4f566b",
                 },
             }}>
              {doc}
           {/* { JSON.stringify(children, censor(children[0].props.children))} */}
          {/* { util.inspect(JSON.parse(children.props.children.toString().replaceAll([", ,"], '')))}, */}
          
         </SyntaxHighlighter></div>
   


     <style jsx>
       {`
         .newCallOut {
           display: flex;
           color: white;
           flex-direction: column;
           padding: 12px 16px;
           background: #fafafa;
           border-radius: 0px 0px 15px 15px;
         }
         .newCallOut :global(p) {
           margin: 0;
         }
       `}
     </style>
   </div>
 </div>) : <div></div>

  );

  function censor(censor) {
    var i = 0;
    
    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
        return '[Circular]'; 
      
      if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      
      ++i; // so we know we aren't using the original object anymore
      
      return value;  
    }
  }
}
