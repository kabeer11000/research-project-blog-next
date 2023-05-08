import FormData from "form-data";
import {Blob} from "buffer";
import https from "https";
export class CloudBlob {
    name: undefined | string;
    formData: FormData;
    id: string;
    blob: Blob;
    configuration = {
        protocols: ["https:", "http:"],
        host: "kabeers-papers-pdf2image.000webhostapp.com",
        path: "/kabeer-chats-storage/upload.php"
    }

    constructor(name: string) {
        this.name = name;
        this.formData = new FormData();
        this.id = Math.random().toString();
    }

    async merge(file: (Buffer | string)) {
        if (typeof file === "string") {
            const fs = await import("fs");
            const path = await import("path");
            this.formData.append("file", fs.createReadStream(file), path.basename?.(file));
            this.blob = new Blob([Buffer.from(fs.readFileSync(file))])
        }
        if (file instanceof Buffer) {
            this.formData.append("file", file, this.name);
        }
    }

    static async createFromString(content: string, name: string) {
        const blob = new CloudBlob(name);
        const fileBlob = new Blob([content], {
            type: 'text/plain',
            encoding: 'utf-8',
            name,
        });
        fileBlob.lastModifiedDate = new Date();
        fileBlob.name = name;
        await blob.merge(Buffer.from(await fileBlob.arrayBuffer()));
        return blob;
    }

    async toBlob() {
        if (this.blob) return this.blob;
    }

    async save(bucket: string, token?: string) {
        const request = https.request({
            method: 'post',
            protocol: this.configuration.protocols[0],
            host: this.configuration.host,
            path: this.configuration.path + `?branch=${bucket}&token=${token}`,
            headers: this.formData.getHeaders(),
        });

        this.formData.pipe(request);
        return await new Promise<{ file: { url: string }, u: boolean, served_from_cache?: boolean, errors?: Array<string> }>((resolve, reject) => {
            request.on('response', (res) => {
                console.log('KCS: Saving Blob, ID: ', this.id);
                let body = "";
                res.on("data", (chunk) => {
                    body += chunk.toString()
                });
                res.on("end", () => resolve(JSON.parse(body)));
                res.on("error", reject);
            });
        });
    }
}