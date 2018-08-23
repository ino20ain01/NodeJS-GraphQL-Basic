import { categoryModel } from '../../models/categoryModel';

export const resolvers = {
    Query: {
        getAllCategories: () => categoryModel.getAllCategories()
    },
    Mutation: {
        createCategory(root, { input: CategoryInput}) {
            return categoryModel.createCategory(CategoryInput);
        }
    }
}