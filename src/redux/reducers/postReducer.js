
import {SAVEPOST,EDITPOST,DELETEPOST,DELETEALLPOSTS } from '../actions/types'
const INITIAL_STATE = {data:[
      {
        "title": "How are you doing today?",
        "content": "Today is a Wednesday, and it's starting to rain outside."
      },
      {
        "title": "Tuesday's Post",
        "content": "Today is Tuesday."
      },
      {
        "title": "This post is going to have a longer title. I hope it still looks good!",
        "content": "Does it?"
      },
      {
        "title": "What even is Unmasked?",
        "content": "This post is going to have a longer body. Hmm, I wonder if it will wrap well within the Text display?"
      },
      {
        "title": "Yet another post",
        "content": "I'm running out of things to say"
      },
      {
        "title": "Ok this is the last one",
        "content": "Nice job reading the posts in from this json file."
      }
    ]}

  const postReducer = (state = INITIAL_STATE, action) => {
    const {payload} = action;
    switch (action.type) {
      case SAVEPOST:
        state.data.unshift(payload)
          return {
              ...state,
          }
          break;
          case DELETEALLPOSTS:
            return {
              ...state,
              data:[]
            }
            break;
            case DELETEPOST:
              return {
                ...state,
                data: state.data.filter((item, index) => index !== payload)
              }
              break;
              case EDITPOST:
                state.data[payload.index] = {title:payload.title,content:payload.content}
                return {
                  ...state,
                }
                break;   
            
      default:
        return state
    }
  };
 export default postReducer 