const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owner/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owner`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/owner/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newOwner) {
    return fetch(`${remoteURL}/owner`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOwner)
    }).then(data => data.json())
  },
  update(editedOwner) {
    return fetch(`${remoteURL}/owner/${editedOwner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedOwner)
    }).then(data => data.json());
  }
}