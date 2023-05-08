import {getFilesFromDirectory} from "@/algorithims/get-content";
import {CloudBlob} from "@/services/kcs/blob";
import {getArticle} from "@/algorithims/get-article";

export default async function BuildIndex() {
    const files = await getFilesFromDirectory(undefined, true);
    const config = {
        blogDelimeter: "blog",
        bucketName: "research-next-articles",
        contributorsDelimeter: "contributors",
        indexExtention: ".json"
    }
    const storageIndex = {
        parsedArticles: "_kn.static.research.landingpage.blogs.cache.articles",
        files: "_kn.static.research.landingpage.blogs.cache.files",
        parsedArticlesDate:
            "_kn.static.research.landingpage.blogs.cache.articles.date",
    };
    await (await CloudBlob.createFromString(JSON.stringify({files, version: Math.random()}), storageIndex.files + config.indexExtention)).save(config.bucketName);
    const articles = [];
    for (const file of files) articles.push(await getArticle(file));
    await (await CloudBlob.createFromString(JSON.stringify({articles, version: Math.random()}), storageIndex.parsedArticles + config.indexExtention)).save(config.bucketName);
}