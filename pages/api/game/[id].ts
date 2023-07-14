import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import enablePublicAccess from '@cors'

const GameDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const db = new DB()
    const gameId = req.query.id as string

    const game = await db.getById(gameId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(game)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default GameDetail
