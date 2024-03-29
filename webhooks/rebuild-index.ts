import {getFilesFromDirectory} from "@/algorithims/get-content";
import {CloudBlob} from "@/services/kcs/blob";
import {getArticle} from "@/algorithims/get-article";

export default async function BuildIndex() {
    // const files = await getFilesFromDirectory(undefined, false);
    const files = [
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md",
            "sha": "0e6ba5627b5debc1bbd01cdbc3ac98f29583b083",
            "size": 1005,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/0e6ba5627b5debc1bbd01cdbc3ac98f29583b083",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/0e6ba5627b5debc1bbd01cdbc3ac98f29583b083",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/revokeabble-jwts-with-pop-and-counters/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md",
            "sha": "f79ccde811212625fd91e18a19b3c8e0d157767a",
            "size": 965,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/f79ccde811212625fd91e18a19b3c8e0d157767a",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/f79ccde811212625fd91e18a19b3c8e0d157767a",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/ulster/object-aware-SLAM-based-on-efficient-quadric-initialization/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md",
            "sha": "d53f97ea4f5d380b56c8970da6c99cc41cc132e4",
            "size": 814,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/d53f97ea4f5d380b56c8970da6c99cc41cc132e4",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/d53f97ea4f5d380b56c8970da6c99cc41cc132e4",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md",
            "sha": "86de203a6c1cd59859bc51b77eba150810b3d7d4",
            "size": 855,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/86de203a6c1cd59859bc51b77eba150810b3d7d4",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/86de203a6c1cd59859bc51b77eba150810b3d7d4",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/chats/paper/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md",
            "sha": "97255d65e6b01b306c4a583b440a1512f32d606e",
            "size": 43,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/97255d65e6b01b306c4a583b440a1512f32d606e",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/97255d65e6b01b306c4a583b440a1512f32d606e",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/exclusive/face-name-matching-effect/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md",
            "sha": "caa227da5e6923486629bf21cb918ef3f3c9fa04",
            "size": 1392,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/caa227da5e6923486629bf21cb918ef3f3c9fa04",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/caa227da5e6923486629bf21cb918ef3f3c9fa04",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/service-login/alpha/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md",
            "sha": "ffb30acda79245c6d6230239133d20d488202b31",
            "size": 983,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/ffb30acda79245c6d6230239133d20d488202b31",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/ffb30acda79245c6d6230239133d20d488202b31",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/running-powerful-ide-in-the-browser/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md",
            "sha": "64cd015192f2acedb1b701aadd57a062af5bd6ff",
            "size": 899,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/64cd015192f2acedb1b701aadd57a062af5bd6ff",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/64cd015192f2acedb1b701aadd57a062af5bd6ff",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/retrieval/tf-idf-and-how-the-bm25-algorithim-works/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md",
            "sha": "81419e86403b6438e07ca5ae8dfa49d58116365d",
            "size": 19013,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/81419e86403b6438e07ca5ae8dfa49d58116365d",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/81419e86403b6438e07ca5ae8dfa49d58116365d",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/noise-control/user-implemented-aftermarket-anc-algorithms/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md",
            "sha": "3a776dc3642772c19ff1106050364ae440311b72",
            "size": 981,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/3a776dc3642772c19ff1106050364ae440311b72",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/3a776dc3642772c19ff1106050364ae440311b72",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google-ai/2022/04/pathways-language-model-palm/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md",
            "sha": "b369893d6a098e4c16ffac31b5bbb0c5ec43a0a7",
            "size": 1288,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/b369893d6a098e4c16ffac31b5bbb0c5ec43a0a7",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/b369893d6a098e4c16ffac31b5bbb0c5ec43a0a7",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/google/dremel-interactive-analysis-of-web-scale-datasets/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md",
            "sha": "38d1f38cb5212e9b3617a104c45889ddb5ce13f1",
            "size": 2867,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/38d1f38cb5212e9b3617a104c45889ddb5ce13f1",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/38d1f38cb5212e9b3617a104c45889ddb5ce13f1",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/cs/bin-2-text-ascii85-in-javascript/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md",
            "sha": "12ad4916c6c2e5499010eafb749fbfe61ce8b40d",
            "size": 22004,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/12ad4916c6c2e5499010eafb749fbfe61ce8b40d",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/12ad4916c6c2e5499010eafb749fbfe61ce8b40d",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/shepard-tones/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md",
            "sha": "5bb5f7af686fa928b92d5d692fdbdf45d2dc3488",
            "size": 856,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/5bb5f7af686fa928b92d5d692fdbdf45d2dc3488",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/5bb5f7af686fa928b92d5d692fdbdf45d2dc3488",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/identity/kabeeridp/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md",
            "sha": "9223ea8809d15a4873a5c1da036625034c3472e6",
            "size": 6242,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/9223ea8809d15a4873a5c1da036625034c3472e6",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/9223ea8809d15a4873a5c1da036625034c3472e6",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/lukas-lalinsky/how-does-chromaprint-work/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md",
            "sha": "11be834ba9d91c9862dc6a60b17302cd779ccee4",
            "size": 4601,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/11be834ba9d91c9862dc6a60b17302cd779ccee4",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/11be834ba9d91c9862dc6a60b17302cd779ccee4",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/creating-the-yebr-platform/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md",
            "sha": "33a9d0b09ec35e7982f1390f6ce2c42bbd6ff065",
            "size": 9218,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/33a9d0b09ec35e7982f1390f6ce2c42bbd6ff065",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/33a9d0b09ec35e7982f1390f6ce2c42bbd6ff065",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/drafts/writing-a-scheduler/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md",
            "sha": "b887b3220b0a4bb7024c9358bfd914f1f0d9c04d",
            "size": 17614,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/b887b3220b0a4bb7024c9358bfd914f1f0d9c04d",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/b887b3220b0a4bb7024c9358bfd914f1f0d9c04d",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/legal/fingerprinting/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md",
            "sha": "1d2411fee9f86c32c01dece1e8ee608f7e1911cd",
            "size": 862,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/1d2411fee9f86c32c01dece1e8ee608f7e1911cd",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/1d2411fee9f86c32c01dece1e8ee608f7e1911cd",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/clustering/using-ai-to-cluster-news-headlines-in-realtime/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md",
            "sha": "c0d147186e6c2d1b917ad9e3921aa0955219fa44",
            "size": 2173,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/c0d147186e6c2d1b917ad9e3921aa0955219fa44",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/c0d147186e6c2d1b917ad9e3921aa0955219fa44",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/generate/gpt-2-next-word-prediction/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md",
            "sha": "f9a81ade41ae35f6021fd0dbb606deb39814e0aa",
            "size": 1020,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/f9a81ade41ae35f6021fd0dbb606deb39814e0aa",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/f9a81ade41ae35f6021fd0dbb606deb39814e0aa",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/text/topic-modeling/neural-topic-modeling-with-continual-lifelong-learning/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md",
            "sha": "96807d455425460acfa281b36414d3adba00fc2a",
            "size": 13676,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/96807d455425460acfa281b36414d3adba00fc2a",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/96807d455425460acfa281b36414d3adba00fc2a",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/using-machine-learning-to-animate-svgs-in-teach-me-to-dance/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md",
            "sha": "cd8e916d8c0ae6aa448560ef3b687d33ff2c2323",
            "size": 5071,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/cd8e916d8c0ae6aa448560ef3b687d33ff2c2323",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/cd8e916d8c0ae6aa448560ef3b687d33ff2c2323",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/yebr/creating-an-audio-based-indexing-system-in-yebr/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md",
            "sha": "5bf692cd16a723a5cd8938a554720c5c2342ac67",
            "size": 3210,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/5bf692cd16a723a5cd8938a554720c5c2342ac67",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/5bf692cd16a723a5cd8938a554720c5c2342ac67",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/contributors/michel-fortin/markdown-and-xss/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md",
            "sha": "2943e85db1656ebf66d2514d0129efecfce54e45",
            "size": 21419,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/2943e85db1656ebf66d2514d0129efecfce54e45",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/2943e85db1656ebf66d2514d0129efecfce54e45",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/networking/attack-mitigation/lucid-cnn-based-ai-to-detect-and-intercept-ddos-attack/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md",
            "sha": "e882cfdcfb3850d297ee091cca619538053fc33c",
            "size": 3298,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/e882cfdcfb3850d297ee091cca619538053fc33c",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/e882cfdcfb3850d297ee091cca619538053fc33c",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/audio/synthesis/lfo-ocilator-and-other-parameters-in-synths/markdown.md"
            }
        },
        {
            "name": "markdown.md",
            "path": "law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md",
            "sha": "08383057072eede243d724788c18ffd793b7920e",
            "size": 991,
            "url": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md?ref=redirector-content",
            "html_url": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md",
            "git_url": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/08383057072eede243d724788c18ffd793b7920e",
            "download_url": "https://raw.githubusercontent.com/kabeer11000/docs-hosted/redirector-content/law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md?ref=redirector-content",
                "git": "https://api.github.com/repos/kabeer11000/docs-hosted/git/blobs/08383057072eede243d724788c18ffd793b7920e",
                "html": "https://github.com/kabeer11000/docs-hosted/blob/redirector-content/law.research.kabeersnetwork.tk/blog/games/reflection-paper-on-scrabble-ai/markdown.md"
            }
        }
    ]
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