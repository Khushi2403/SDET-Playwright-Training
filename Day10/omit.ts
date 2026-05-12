interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<User, "email" | "password">

const preview: UserPreview = {
    name: "Khushi",
    id: "xyz"
}
console.log(preview.name);
console.log(preview.id);
//console.log(preview.password);

