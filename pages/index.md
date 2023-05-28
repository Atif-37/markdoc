# Swagger Petstore - OpenAPI 3.0

This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:

- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)



### PUT

---

#### /user/{username}



### Summary:

​
Update user

---

{% callOutCollaps%}
PUT is a request method supported by HTTP used by the World Wide Web. The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified and if the URI does not point to an existing resource, then the server can create the resource with that URI.

This can only be done by the logged in user.
{% /callOutCollaps %}



## Parameters

| Name     | Located in | Description                  | Required | Schema |
| -------- | ---------- | ---------------------------- | -------- | ------ |
| username | path       | name that need to be deleted | Yes      | string |

#



## Responses

| Code    | Description          |
| ------- | -------------------- |
| default | successful operation |

#



## What is Markdoc?

# {% $markdoc.frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.

## How is Markdoc different?

Markdoc uses a fully declarative approach to composition and flow control, where other solutions (/docs/overview).

## Next steps

- [Install Markdoc]
- [Explore the syntax]

---

## What is Swagger?
### API Development for Everyone

Simplify API development for users, teams, and enterprises with the Swagger open source and professional tool-set. Find out how Swagger can help you design and document your APIs at scale.




# Create a New Book


#### POST /v1/books

This endpoint is designed to add a new book to the catalog, effectively expanding the scope of the store's offerings. When adding a book, the system creates associations with an author and a genre, as well as details like title, brief description, price, cover image, and an ISBN.


&nbsp;

## Parameters

---

**title** 
 
This refers to the name of the book, and should ideally capture the essence of the book's content, intriguing potential readers.


---

**description**

This is a summary of the book's content, providing potential buyers a glimpse into the story or information contained within.

---

**price**

This is the cost at which the book is available for sale.

---

**cover_image_url**

This is the URL where the cover image of the book is hosted.

---

**isbn**

This is the unique identifier assigned to each edition of the book.

---

**author_id**

This identifier connects the book to its author.

---

**Genre_id**

This identifier allows the book to be categorized by its genre.

&nbsp;

## Returns

After successfully creating a new book, the response will be a `Book` Object representing the book. This object will contain all the attributes of the book, including its unique ID, title, description, price, cover image URL, ISBN, author ID, and genre ID.