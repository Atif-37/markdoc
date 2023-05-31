import { parseJSON } from "jquery";
import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import svgs from "../assets/1.svg";
import externalLinkIcon from "../assets/icon-external-link.svg";
import Image from "next/image";
import dropdownIcon from "../assets/2.svg";
// or
var util = require("util");
export function Callout({ title, desc, children }) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [style, setStyle] = useState({});
  const [sOption, setsOption] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/dracula").then(
      (mod) => setStyle(mod.default)
    );
    setDomLoaded(true);
    // setsOption('Node')
  });

  let doc = `curl -X 'PUT' \
  'https://petstore.swagger.io/v2/pet' \  
  -H 'accept: application/json' \ 
  -H 'Content-Type: application/json' \ 
  -d '{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}`;
  console.log(sOption.toString());
  if (sOption == "Java") {
    doc = `Stripe.apiKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";

Map<String, String> metadataParams = new HashMap<>();
metadataParams.put("order_id", "6735");

Map<String, Object> params = new HashMap<>();
params.put("metadata", metadataParams);

Customer customer = Customer.create(params);`;
  }
  function handleChange(event) {
    setsOption(event.target.value.toString());
  }
  return domLoaded ? (
    <div className="callout">
      <div className="callout">
        {/* <strong>{title}</strong> */}
        <div className="containerHeader">
          <div className="titleWrapper">
            <span className="titleColor">{title}</span>
            <span className="titleDescription">{desc}</span>
          </div>
          <div className="iconsWrapper">
            <ul>
              <li>
                <select
                  title="asd"
                  name="select"
                  id="select"
                  onChange={handleChange}
                >
                  <option value="Curl">Curl</option>
                  <option value="Java">Java</option>
                </select>
                <Image src={dropdownIcon} alt="" width={15}></Image>
              </li>
              <li>
                {/* icon color #a4cdfe */}
                <a href="#">
                  <Image src={externalLinkIcon} alt="" width={15}></Image>
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={svgs} alt="" width={15}></Image>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <style jsx>
          {`
            .callout {
              display: flex;
              flex-direction: row;
              padding: 12px 16px;
              background: #3c4257;
              color: white;
              border-radius: 8px 8px 0px 0px;
            }
            .callout :global(p) {
              margin: 0;
            }
          `}
        </style>
      </div>

      <div className="callout">
        <div>
          <SyntaxHighlighter
            language="js"
            style={style}
            wrapLongLines
            customStyle={{
              //  backgroundColor: "#4f566b",
              opacity: "1",

              // marginTop: "-2rem",
            }}
            codeTagProps={{
              style: {
                color: "#F5FBFF",
              },
            }}
          >
            {/* { JSON.stringify(children, censor(children[0].props.children))} */}
            {/* { util.inspect(children.props.children.toString().replaceAll([", ,"], ''))}, */}
            {doc}
          </SyntaxHighlighter>
        </div>

        {/* 
     <SyntaxHighlighter language="javascript" showInlineLineNumbers = {true} showLineNumbers = {true} >
       { JSON.stringify(children, censor(children))},
       
       
     </SyntaxHighlighter> */}
        {/* <SyntaxHighlighter language="javascript" style={docco}>
   {children}
 </SyntaxHighlighter> */}

        <style jsx>
          {`
            .callout {
              display: flex;
              color: white;
              flex-direction: column;
              padding: 12px 16px;
              background: #282a36;
              border-radius: 0px 0px 8px 8px;
            }
            .callout :global(p) {
              margin: 0;
            }
          `}
        </style>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
