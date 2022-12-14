const conn = require('./connection')

async function getAllPokesDb(db = conn) {
  return await db('pokehumans')
}

async function getDexEntryDb(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

async function insertPokeHumanDb(newData, db = conn) {
  return await db('pokehumans').insert(newData)
}

async function getUserTeam(userId, db = conn) {
  return await db('teams')
    .join('pokehumans', 'teams.pokehumans_id', 'pokehumans.id')
    .where('user_id', userId)
    .select('*', 'teams.id AS id')
}

async function insertUsersTeam(userId, pokehumansId, db = conn) {
  const data = { user_id: userId, pokehumans_id: pokehumansId }
  return await db('teams').select().insert(data)
}

async function removeUserTeamDb(id, db = conn) {
  return await db('teams').del().where('id', id)
}
module.exports = {
  insertPokeHumanDb,
  getAllPokesDb,
  getDexEntryDb,
  getUserTeam,
  insertUsersTeam,
  removeUserTeamDb,
}
