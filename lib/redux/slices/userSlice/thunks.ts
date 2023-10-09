/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk"
import { allUsers } from "./allUsers"
import { selectUser } from "./selectors"
import { UserSliceState } from "./userSlice"
import type { ReduxThunkAction } from "@/lib/redux"

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getUsers = createAppAsyncThunk("user/allUsers", async () => {
  const response = await allUsers()

  // The value we return becomes the `fulfilled` action payload
  return response.data
})

/*
export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 1) {
      dispatch(counterSlice.actions.incrementByAmount(amount))
    }
  }

*/
