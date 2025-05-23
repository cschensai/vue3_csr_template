import services from "../utils/http";

// get list
const getList = () =>
  services({
    url: "/api/getList",
    method: "get"
  });


export {
  getList,
};
