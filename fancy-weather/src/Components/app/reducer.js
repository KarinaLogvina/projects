import { SetBg } from './action'

const initState = {
  bgUrl: 'https://images.unsplash.com/photo-1468997149652-0f17a97129c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNTMzM30'
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SetBg: { return { ...state, bgUrl: action.payload.bgUrl }; }
    default: return state;
  }
}

export default appReducer;