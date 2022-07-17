export const logger = store => next => action => {
    if (typeof action === "function"){
        action(store.dispatch, store.getState)
    } else {
        console.log('dispatch', store.getState())
        next(action)
        console.log('after dispatch', store.getState())
    }
}

// function notlogger (store, next, action) {
//     return function (next) {
//         return function (action) {
//             console.log("heloo")
//             next(action)
//             console.log("goodbye")
//         }
//     }
// }