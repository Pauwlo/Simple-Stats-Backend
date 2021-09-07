const sqlite3 = require('sqlite3').verbose()

module.exports = class Database {

	static instance

	constructor() {
		this.db = new sqlite3.Database('./database.db')
		this.createTables()
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new Database()
		}

		return this.instance
	}

	createTables() {
		this.db.run(`CREATE TABLE IF NOT EXISTS players (
			uid TEXT PRIMARY KEY,
			rank INTEGER,
			emblem TEXT)`)
	}

	getPlayers() {
		return new Promise((resolve, reject) => {
			const sql = `
				SELECT uid, rank, emblem
				FROM players`

			this.db.all(sql, (err, rows) => {
				err ? reject(err) : resolve(rows)
			})
		})
	}

}
