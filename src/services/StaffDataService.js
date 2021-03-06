import http from "../http-common";

class StaffDataService {
  getAll(officeId) {
    return http.get(`/staff/${officeId}`);
  }

  get(id) {
    return http.get(`/staff/${id}`);
  }

  create(data) {
    return http.post("/staff", data);
  }

  update(id, data) {
    return http.put(`/staff/${id}`, data);
  }

  delete(id) {
    return http.delete(`/staff/${id}`);
  }
}

export default new StaffDataService();
