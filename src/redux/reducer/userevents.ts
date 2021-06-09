import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface IUser {
  id: string;
  email: string;
  password: string;
}

interface UserState {
  byIDs: Record<IUser['id'], IUser>;
}

const initialState: UserState = {
  byIDs: {},
};

const logIn = 'users/login';

interface loginAction extends Action<typeof logIn> {
  payload: IUser;
}

const validateLogin: ThunkAction<
  Promise<void>,
  undefined,
  undefined,
  loginAction
> = async (dispatch, getState) => {
  try {
    const user: Omit<IUser, 'id'> = {
      email: 'John',
      password: 'stringify',
    };
    const response = await fetch(
      'https://sprite-app-default-rtdb.firebaseio.com/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }
    );
  } catch (e) {
    // 
  }
};

const UserReducer = (state: UserState = initialState, action: loginAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { UserReducer };
