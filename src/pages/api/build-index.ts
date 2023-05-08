// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import BuildIndex from "../../../webhooks/rebuild-index";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await BuildIndex();
  res.status(200).json({ u: "Index Built" })
}
