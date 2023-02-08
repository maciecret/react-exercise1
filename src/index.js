//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers } from "./services/users";

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());
