import { Category } from '../../connectors';

export const categoryModel = {
    getAllCategories: () => Category.find(),
    
    createCategory: dataCategoryInput => {
        if (dataCategoryInput) {
            return Category.create(dataCategoryInput);
        }
        return false;
    }
}