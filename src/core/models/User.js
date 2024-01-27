const { randomUUID } = require("node:crypto");

class UserPassenger {
  static toDatabase(data) {
    return {
      // _id: randomUUID(),
      name: data.name,
      role: data.role || "PASSENGER",
    };
  }

  static fromDatabase({ _id, name, role, createdAt, updatedAt }) {
    return {
      id: _id,
      name,
      role,
      createdAt,
      updatedAt,
    };
  }
}

class UserCompany {
  static toDatabase(data) {
    return {
      // _id: randomUUID(),
      name: data.name,
      role: data.role,
      busCompanyId: data.busCompanyId,
    };
  }

  static fromDatabase({ _id, name, role, busCompanyId, createdAt, updatedAt }) {
    return {
      id: _id,
      name,
      role,
      busCompanyId,
      createdAt,
      updatedAt,
    };
  }
}

module.exports = { UserPassenger };
