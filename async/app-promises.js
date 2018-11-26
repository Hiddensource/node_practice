const users = [{
    id: 1,
    name: "aman",
    schoolId: 101
}, {
    id: 2,
    name: "sapra",
    schoolId: 102
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 88
}, {
    id: 2,
    schoolId: 102,
    grade: 90
}, {
    id: 3,
    schoolId: 101,
    grade: 99
}];

const getGrades = (schoolId) => {
    return new Promise((resolve, _reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getuser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find the user with id: ${id}`);
        }
    });
};

const getStatus = (userId) => {
    let user;
    return getuser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grade) => {
        let avg = 0;

        if (grades.length > 0) {
    
            avg = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        return `${user.name} has a ${avg}% in class`;

    });
}
 
const getStatusAlt = async (userId) => {

    const user = await getuser(userId);
    
    const grades = await getGrades(user.schoolId);
    // console.log(grades);
    let avg = 0;

    if (grades.length > 0) {
        avg = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }
    return `${user.name} has a ${avg}% in class`;


};

getStatusAlt(1).then((name) => {
    console.log(name)
}).catch((e) => {
    console.log(e)
});

getuser(1)
    .then((_user1) => {

    })
    .catch((e) => {
        console.log(e)
    });

getGrades(101)
    .then((_grade) => {

    })
    .catch((e) => {
        console.log(`Error with schoolId: ${e}`)
    });

// getStatus(1)
//     .then((status) => {
//         console.log(status);
//     })
//     .catch((e) => {
//         console.log(e)
//     });