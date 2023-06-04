import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "void",
    data: null,
    error: null,
};

// export function fetchLogin(params) {
//     return async (dispatch, getState) => {
//         const status = selectUser(getState()).status;
//         if (status === "pending" || status === "updating") {
//             return;
//         }
//         dispatch(fetching());
//         try {
//             const response = await fetch(
//                 "http.//localhost:3001/api/v1/user/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ params }),
//                 }
//             );
//             const jwt = await response.json();
//             dispatch(resolved(jwt));
//         } catch (error) {
//             dispatch(rejected(error));
//         }
//     };
// }

// export function logout(dispatch) {
//     dispatch(eraseData());
// }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetching: (draft) => {
            if (draft.status === "void") {
                draft.status = "pending";
                return;
            }
            if (draft.status === "rejected") {
                draft.error = null;
                draft.status = "pending";
                return;
            }
            if (draft.status === "resolved") {
                draft.status = "updating";
                return;
            }
            return;
        },
        resolved: (draft, action) => {
            if (draft.status === "pending" || draft.status === "updating") {
                if (action.payload.message === "User successfully logged in") {
                    draft.status = "resolved";
                    return;
                }
                draft.data = action.payload.body;
                draft.status = "resolved";
                return;
            }
            return;
        },
        rejected: (draft, action) => {
            if (draft.status === "pending" || draft.status === "updating") {
                draft.error = action.payload;
                draft.data = null;
                draft.status = "rejected";
                return;
            }
            return;
        },

        eraseData: (draft, action) => {
            draft.status = "void";
            draft.data = null;
            draft.error = null;
            return;
        },
    },
});

export const { fetching, resolved, rejected, eraseData } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
