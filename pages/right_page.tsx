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
  "id": "book_7g8h9i",
  "title": "A Great Book",
  "description": "This is a really great book",
  "price": 19.99,
  "cover_image_url": "https://example.com/images/a_great_book.jpg",
  "isbn": "978-3-16-148410-0",
  "author_id": "auth_1a2b3c",
  "genre_id": "genre_4d5e6f"
}

    
      {% /callout %}
      `;
    }else{
      doc = `
      {% callout title="PUT " desc="/v2/user/theUsername" icon="note" %}
    
    
 curl -X POST -H "Content-Type: application/json" -d \
  '{"title": "A Great Book", 
    "description": "This is a really great book", 
    "price": 19.99, 
    "cover_image_url": "https://example.com/images/a_great_book.jpg", 
    "isbn": "978-3-16-148410-0", 
    "author_id": "auth_1a2b3c", 
    "genre_id": "genre_4d5e6f"
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