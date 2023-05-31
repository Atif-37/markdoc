import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
let data = [
  {
    heading: "Book",
    collapsed: false,
    data: [
      {
        title: "Book Title 1",
        selected: true,
        links: [
          {
            href: "/books/child1",
            children: "Book Child 1",
          },
          {
            href: "/books/child2",
            children: "Book Child 2",
          },
        ],
      },
      {
        title: "Book Title 2",
        selected: false,

        links: [
          {
            href: "/books/child1",
            children: "Book Child 1",
          },
          {
            href: "/books/child2",
            children: "Book Child 2",
          },
        ],
      },
    ],
  },

  {
    heading: "Author",
    collapsed: true,
    data: [
      {
        title: "Author Title 1",
        selected: false,
        links: [
          {
            href: "/author/child1",
            children: "Author Child 1",
          },
          {
            href: "/author/child2",
            children: "Author Child 2",
          },
        ],
      },
      {
        title: "Author Title 2",
        selected: false,
        links: [
          {
            href: "/author/child1",
            children: "Author Child 3",
          },
          {
            href: "/author/child2",
            children: "Author Child 4",
          },
        ],
      },
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  let [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    console.log("ss");
  }, []);

  return (
    <nav className="sidenav">
      {items.map((item, index) => (
        <div key={item.heading}>
          <span
            onClick={(event) => {
              console.log("index");

              items[index].collapsed = !items[index].collapsed;
              let data = items;
              setItems((items) => [...data]);
              // setItems(items);
            }}
          >
            {item.heading}
          </span>

          {item.collapsed ? (
            <></>
          ) : (
            item.data.map((data, child) => (
              <div key={data.title}>
                <h5
                  onClick={(event) => {
                    items[index].data[child].selected =
                      !items[index].data[child].selected;
                    for (const i of item.data) {
                    }

                    for (let i = 0; i < item.data.length; i++) {
                      console.log(i + "sdasd");
                      if (i != child) {
                        items[index].data[i].selected = false;
                      }
                    }
                    let data = items;
                    setItems((items) => [...data]);
                    // setItems(items);
                  }}
                >
                  {data.title}
                </h5>

                <ul className="flex column">
                  {items[index].data[child].selected ? (
                    data.links.map((link) => {
                      const active = router.pathname === link.href;
                      return (
                        <li key={link.href} className={active ? "active" : ""}>
                          <Link {...link} />
                        </li>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            ))
          )}
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
