const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/practices/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/cues/?_expand=builder&_expand=wrap&_expand=style`).then(result => result.json())
  }
}
