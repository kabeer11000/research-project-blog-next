// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {articles} = await (await fetch('https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/research-next-articles/d62112cbb4c43e808738bc335b3cd53c.json')).json();
    res.status(200).json({
        v: '1.0-alpha',
        blogs: articles.map(({item}) => item)
    })
}
