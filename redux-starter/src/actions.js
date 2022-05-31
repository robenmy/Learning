import * as actions from './actionTypes'



export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
      description: 'Bug1'
    }
  }
)

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
      id: id
    }
  }
)


// export function bugAdded(description)
// {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//           description: 'Bug1'
//         }
//       }
// }