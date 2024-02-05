// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const {articles} = await (await fetch('https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/research-next-articles/d62112cbb4c43e808738bc335b3cd53c.json')).json();
    // res.status(200).json({
    //     v: '1.0-alpha',
    //     blogs: articles.map(({item}) => item)
    // })
    const {files} = await (await fetch('https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/research-next-articles/'+ process.env.ARTICLE_INDEX ?? '4087a1848888069fc91774942b1f8849' +'.json')).json();
    res.status(200).send(JSON.stringify({
        v: '1.0-alpha',
        blogs: files.filter(x => !!x)
    }, null, 2))
}
