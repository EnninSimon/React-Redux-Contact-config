const initialState = {
    users: [
        {
            name: "Ennin Simon",
            email: "simon@gmail.com",
            address: "Asamankese",
            phone_number: "22525888",
            type: "Single",
            id: "34629"
        },
        {
            name: "Adwoa Sega",
            email: "adwoa@gmail.com",
            address: "Suhum",
            phone_number: "225531",
            type: "Married",
            id: "3469494"
        },
    ]
}



const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return state;

        default:
            return state;
    }
};



export default contactsReducer;