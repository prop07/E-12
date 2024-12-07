type timestamp = {
    created?: number;
    modified?: number;
};

interface user extends timestamp {
    email: string;
    password: string;
}

// type user = timestamp extends u;

type customer = {
    name: string;
    email: string;
    password: string;
    created: number;
    modified: number;
}

type users = {
    [key: string]: user,
}

const users: users = {
    user1: {
        email: "1Z4oE@example.com",
        password: "1234",
    },
    user2: {
        email: "aZ4oE@example.com",
        password: "1234",
    },
};
