const navData = [
  { item: "Home", path: "/" },
  { item: "About", path: "/about" },
  {
    item: "Categories",
    path: "/categories",
    subCategories: [
      { item: "Subcategory 1", path: "/categories/subcategory1" },
      { item: "Subcategory 2", path: "/categories/subcategory2" },
      { item: "Subcategory 3", path: "/categories/subcategory3" },
    ],
  },
  { item: "Contact", path: "/contact" },
];

export default navData;
