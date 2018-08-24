import { categoryModel } from '../../models/categoryModel';

export const resolver = {
    Query: {
        getAllCategories: () => categoryModel.getAllCategories(),
        getCategoryAndPosts: (root, { id }) => categoryModel.getCategoryAndPosts(id)
    },
    Mutation: {
        createCategory(root, { input: CategoryInput}) {
            return categoryModel.createCategory(CategoryInput);
        }
    }
}