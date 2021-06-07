import {SAVEPOST,DELETEALLPOSTS} from './types'
export const savePost = (data) => {
    return {type: SAVEPOST,
     payload: { data }
    }
};

export const deleteAllPosts = () => {
  
    return {type: DELETEALLPOSTS}
};