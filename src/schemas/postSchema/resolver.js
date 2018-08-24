import { postModel } from '../../models/postModel';

export const resolver = {
    Query: {
        getAllPosts: () => postModel.getAllPosts(),
    },
    Mutation: {
        createPost: (root, { input: PostInput }) => {
            return postModel.createPost(PostInput);
        }
    }
}