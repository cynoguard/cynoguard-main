// schemas/category.ts
const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. "Bot Defense", "Threat Intel", "Case Studies", "Product"',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
  ],
};

export default category;