const BASE_URL = "/api/puppies";

export function getAll() {
  return fetch("/api/puppies").then((res) => res.json());
}

export function create(puppy) {
  return fetch("/api/puppies", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(puppy),
  }).then((res) => res.json());
}


export function deleteOne(id) {
  return fetch(`/api/puppies/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function update(pup) {
  return fetch(`${BASE_URL}/${pup._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(pup),
  }).then((res) => res.json());
}