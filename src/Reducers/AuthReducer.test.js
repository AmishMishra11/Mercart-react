import { authReducer } from "./AuthReducer";

describe("testing AuthReducer", () => {
  test("should get user details on login", () => {
    const initialState = {
      userDetails: [],
      isAuth: false,
    };

    const action = {
      type: "GET_USER_DETAILS",
      payload: {
        cart: [],
        createdAt: "2022-07-25T19:51:54+05:30",
        email: "test@gmail.com",
        firstName: "Guest",
        id: "2",
        lastName: "User",
        updatedAt: "2022-07-25T19:51:54+05:30",
        wishlist: [],
        _id: "6b5a8c12-a337-4e65-b56c-e86a012a759f",
      },
    };

    const finalState = {
      userDetails: [
        {
          cart: [],
          createdAt: "2022-07-25T19:51:54+05:30",
          email: "test@gmail.com",
          firstName: "Guest",
          id: "2",
          lastName: "User",
          updatedAt: "2022-07-25T19:51:54+05:30",
          wishlist: [],
          _id: "6b5a8c12-a337-4e65-b56c-e86a012a759f",
        },
      ],
      isAuth: true,
    };

    const reduceState = authReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should remove user details", () => {
    const initialState = {
      userDetails: [
        {
          cart: [],
          createdAt: "2022-07-25T19:51:54+05:30",
          email: "test@gmail.com",
          firstName: "Guest",
          id: "2",
          lastName: "User",
          updatedAt: "2022-07-25T19:51:54+05:30",
          wishlist: [],
          _id: "6b5a8c12-a337-4e65-b56c-e86a012a759f",
        },
      ],
      isAuth: true,
    };

    const action = {
      type: "USER_LOGOUT",
    };

    const finalState = {
      userDetails: [],
      isAuth: false,
    };

    const reduceState = authReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should return default value", () => {
    const initialState = {
      userDetails: [],
      isAuth: false,
    };

    const action = {
      type: "DEFAULT",
    };

    const finalState = {
      userDetails: [],
      isAuth: false,
    };

    const reduceState = authReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });
});
