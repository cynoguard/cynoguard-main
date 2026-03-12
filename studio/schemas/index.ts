// schemas/index.ts — registers all schemas with Sanity Studio
import post from "./post";
import author from "./author";
import category from "./category";

export const schemaTypes = [post, author, category];