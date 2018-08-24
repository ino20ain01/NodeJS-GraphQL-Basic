import { Category } from '../../connectors';

export const categoryModel = {
    getAllCategories: () => Category.find(),
    getCategoryAndPosts: id => {
        if (id) {
            return Category.findOne({ id }).populate('posts');
        }
        return false;
    },
    createCategory: dataCategoryInput => {
        if (dataCategoryInput) {
            return Category.create(dataCategoryInput);
        }
        return false;
    }
}