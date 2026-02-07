// api/save.js
import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Method Not Allowed' });
    }

    const { content, password } = req.body;

    // Thay password123 bằng mật khẩu bạn muốn (cài trong Environment Variables của Vercel thì tốt hơn)
    const CORRECT_PASSWORD = process.env.ADMIN_PASSWORD || "password123"; 

    if (password !== CORRECT_PASSWORD) {
        return res.status(401).send({ message: 'Sai mật khẩu!' });
    }

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN // Cần cài biến môi trường GITHUB_TOKEN trên Vercel
    });

    const OWNER = 'ugphone839'; // Thay bằng user github của bạn
    const REPO = 'Executors';
    const PATH = 'script.js';

    try {
        // 1. Lấy SHA
        const { data: fileData } = await octokit.repos.getContent({
            owner: OWNER, repo: REPO, path: PATH,
        });

        // 2. Update
        await octokit.repos.createOrUpdateFileContents({
            owner: OWNER,
            repo: REPO,
            path: PATH,
            message: 'Web Admin Update',
            content: Buffer.from(content).toString('base64'),
            sha: fileData.sha,
        });

        res.status(200).send({ message: 'Đã lưu & Đang Deploy lại...' });
    } catch (error) {
        res.status(500).send({ message: 'Lỗi: ' + error.message });
    }
}
