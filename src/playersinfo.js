const Database = require('./Database')

function playersinfo(req, res) {
	const response = {}
	let knownPlayers = []

	const db = Database.getInstance()
	db.getPlayers()
		.then(players => knownPlayers = players)
		.catch(console.error)
		.finally(() => {
			req.body.players?.forEach(player => {
				const index = player.playerIndex
				let emblem = process.env.DEFAULT_EMBLEM
				let rank = process.env.DEFAULT_RANK

				if (p = knownPlayers.find(p => p.uid === player.uid)) {
					emblem = p.emblem
					rank = p.rank
				}

				response[index] = {
					r: rank,
					e: emblem
				}
			})

			res.send(response)
		})
}

module.exports = playersinfo
