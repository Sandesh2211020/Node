const users =[
    {
        id: 1,
        name: "Sandesh",
    },{
        id: 2,
        name: "Aayos",
    },
    {
        id: 3,
        name: "talu",
    }
]

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        let result = users.find((user) => user.id === id);~
        if (result) {
            resolve(result);
        }
        reject("User not found");
    });
};

const updateName = (id, name) => {
    return new Promise((resolve, reject) => {
        users.forEach((user, index) => {
            if (user.id === id) {
                users[index] = {
                    id: id,
                    name: name,
                };
            }
        });
        resolve(users);
    });
};

// getUserById(1)
// .then((result) => {
// return updateName(result.id, "Sita");
// })
// .then((result) => {
// return getUserById(100);
// })
// .then((result) => {
// console.log(`User with id ${result.id} is ${result.name}`);
// })
// .catch((error) => {
// console.log("Error: ", error);
// });

// updateName(2, "Sita")
// .then((result) => {
// console.log("updated users: ", result);
// })
// .catch((error) => {
// console.log("Error: ", error);
// });

let asyncUpdate = async () => {
    try {
        let user = await getUserById(1);
        let result = await updateName(user.id, "Sita");
        let updatedUser = await getUserById(1);
        console.log("result", result);
        console.log("updatedUser", updatedUser);
    } catch (err) {
        console.log("Error: ", err);
    }
};
asyncUpdate();