import { Post } from '../../connectors';

export const postModel = {
    getAllPosts: () => Post.find(),
    createPost: dataPostInput => {
        if (dataPostInput) {
            return Post.create(dataPostInput);
        }
        return false;
    }
}