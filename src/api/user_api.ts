import instance from "./instance";

export default {
  getAll() {
    return instance.get("/users");
  },
};
