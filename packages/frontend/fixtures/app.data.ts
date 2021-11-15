/**
 * App data
 */
const appData = {
  footerData: {
    // Each nav item should have a label and children
    // Each child should have a route name, and an optional label
    nav: [
      {
        label: "nav.explore",
        children: [
          {
            route: "home",
            label: "Instance Name",
          },
          {
            route: "about",
          },
          {
            route: "communities",
          },
          {
            route: "contact",
          },
        ],
      },
      {
        label: "nav.categories",
        children: [
          {
            route: "privacy",
          },
          {
            route: "terms",
          },
          {
            route: "accessibility",
          },
          {
            route: "admin",
          },
        ],
      },
    ],
  },
};

export default appData;
