import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Callout, NewCallOut } from "../components";


  const tags = {
    callout: {
      render:"Callout",
      attributes: {
        title: {
          type: String,
        },
        desc: {
          type: String,
        },
      },
    }
  };
  
  
  

  let content="abs";


  const Page = (isResponse) => {
    let doc="";
   
  
    console.log(isResponse.isResponse)
    if(isResponse.isResponse){
      doc = `
      {% callout title="RESPONSE" desc="abc" icon="note" %}
    
{
  "id": 10,
  "username": "theUsername",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}
    
      {% /callout %}
      `;
    }else{
      doc = `
      {% callout title="PUT " desc="/v2/user/theUsername" icon="note" %}
    
    
 curl -X 'PUT' \
  'https://petstore.swagger.io/v2/user/theUsername' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id":10,
  "username": "theUsername",
  "firstName": "John",
  "lastName": "James",
  "email": "john@email.com",
  "password": "12345",
  "phone": "12345",
  "userStatus": 1
}'
    
      {% /callout %}
      `;
    }
    const ast = Markdoc.parse(doc);
    const content = Markdoc.transform(ast, {tags} );
    return (
    <div>   
    {
      Markdoc.renderers.react(content, React, {
        components: {
          Callout:isResponse.isResponse? NewCallOut : Callout
        }})
    }
    </div>
 
    );
   };
   
   export default Page;