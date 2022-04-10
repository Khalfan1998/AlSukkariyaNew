import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "khalfan.ikns@gmail.com",
    password: bcrypt.hashSync("admin123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
