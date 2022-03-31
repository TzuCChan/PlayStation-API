import Playstation from "../models/playstation.js"

export const getPlaystations = (request, response) => {
  Playstation
    .find()
    .then(PSNs => response.json(PSNs))
}

export const getPlaystation = (request, response) => {
  let playStationId = request.params.id
  Playstation
    .findById(playStationId)
    .then(newPlayStation => response.json(newPlayStation))
}

export const createPlaystation = (request, response) => {
  let newPlayStation = request.body
  Playstation
    .create(newPlayStation)
    .then(newPlayStation => response.json(newPlayStation))
}

export const updatePlaystation = (request, response) => {
  let playStationId = request.params.id
  let newPlayStationData = request.body
  Playstation
    .findByIdAndUpdate(playStationId, newPlayStationData)
    .then(updatedPlayStation => response.json(updatedPlayStation))
}

export const deletePlaystation = (request, response)=> {
  let playStationId = request.params.id
  Playstation
     .findByIdAndRemove(playStationId)
     .then(()=> response.send("Deleted"))
}