const getEmblem = require('./getEmblem')

const OG_UIDS = [
	'4818c3c8a06a1a47',
]

function playersinfo(req, res) {
	const response = {}

	let i = 0
	req.body.players?.forEach(player => {
		response[i] = {
			r: OG_UIDS.includes(player.uid) ? 42 : 0,
			e: getEmblem(player.uid)
		}
		i++
	})

	res.send(response)
}

module.exports = playersinfo
