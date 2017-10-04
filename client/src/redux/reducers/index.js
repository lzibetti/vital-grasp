let defaultState = {
    contacts: [],
    resources: []
    // future code to make the app more robust when refreshing the browser
    // singleResource: {}
}

let mainReducer = function (state = defaultState, action) {
    // let newContacts = [...state.contacts];
    switch (action.type) {
        case "SET_CONTACTS":
            return {
                ...state,
                contacts: action.data
            }
            case "SET_RESOURCES":
            return {
                ...state,
                resources: action.data
            }                
    // future code to make the app more robust when refreshing the browser  
            // case "SET_RESOURCE":
            // return {
            //     ...state,
            //     singleResource: action.data
            // }                
        default:
            return {
                ...state
            }    
    }
}

export default mainReducer;