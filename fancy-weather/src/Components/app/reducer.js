import { SetBg } from './action';

const initState = {
  bgUrl: 'https://images.unsplash.com/photo-1458926686483-d79b0d2559fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNTMzM30',
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SetBg: { return { ...state, bgUrl: action.payload.bgUrl }; }
    default: return state;
  }
};

export default appReducer;
