
export const InitialState = {
  avatar: '',
  favorites: [],
  appointments: []
}

export function UserReducer(state: any, action:any) {
  switch(action.type) {
    case 'setAvatar':
      return {
       ...state,
        avatar: action.payload.avatar
      }
      break;
      default:
        return state;
  }
}