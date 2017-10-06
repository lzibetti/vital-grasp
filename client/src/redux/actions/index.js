import axios from "axios";
// future dev will be boil to a single set of functions using variables for the url
// Resource functions to manipulate the resources collection
    // future code to make the app more robust when refreshing the browser  
// export function getResource(id) {
//     return (dispatch) => {
//         axios.get("http://localhost:8080/resources/")
//             .then((response) => {
//                 // console.log(response)
//                 dispatch(setResource(response.data.data))
//             }).catch((error) => {
//                 throw error
//             })
//     }
// }
// export function setResource(data) {
//     return {
//         type: "SET_RESOURCE",
//         data
//     }
// }

export function getResources() {
    return (dispatch) => {
        axios.get("/resources/")
            .then((response) => {
                dispatch(setResources(response.data.data))
            }).catch((error) => {
                throw error
            })
    }
}
export function postResources(data) {
    return (dispatch) => {
        axios.post("/resources/", data)
            .then((response) => {
                dispatch(getResources())
            }).catch((error) => {
                throw error
            })
    }
}
export function editResources(id, data) {
    return (dispatch) => {
        axios.put(`/resources/${id}`)
            .then((response) => {
                dispatch(getResources)
            }).catch((error) => {
                throw error
            })
    }
}
export function deleteResources(id) {
    return (dispatch) => {
        axios.delete(`/resources/${id}`)
            .then((response) => {
                dispatch(getResources)
            }).catch((error) => {
                throw error
            })
    }
}
export function setResources(data) {
    return {
        type: "SET_RESOURCES",
        data
    }
}

// Contact functions to manipulate the contacts collection
export function getContacts() {
    return (dispatch) => {
        axios.get("/contacts/")
            .then((response) => {
                dispatch(setContacts(response))
            }).catch((error) => {
                throw error
            })
    }
}
export function postContacts(data) {
    return (dispatch) => {
        axios.post("/contacts/", data)
            .then((response) => {
                dispatch(getContacts)
            }).catch((error) => {
                throw error
            })
    }
}
export function editContacts(id, data) {
    return (dispatch) => {
        axios.put(`/contacts/${id}`)
            .then((response) => {
                dispatch(getContacts)
            }).catch((error) => {
                throw error
            })
    }
}
export function deleteContacts(id) {
    return (dispatch) => {
        axios.delete(`/contacts/${id}`)
            .then((response) => {
                dispatch(getContacts)
            }).catch((error) => {
                throw error
            })
    }
}
export function setContacts(data) {
    return {
        type: "SET_CONTACTS",
        data
    }
}
