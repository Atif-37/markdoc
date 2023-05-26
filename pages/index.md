# Swagger Petstore - OpenAPI 3.0

This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:

- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)



### PUT
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
