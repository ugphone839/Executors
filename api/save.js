// api/save.js
import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    const { content, password } = req.body;

    // 1. Bảo mật đơn giản (Thay 'password123' bằng pass bạn muốn)
    if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).send({ message: 'Sai mật khẩu!' });
    }

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN // Token lấy từ biến môi trường Vercel
    });

    const OWNER = 'ugphone839';
    const REPO = 'Executors';
    const PATH = 'script.js';

    try {
        // 2. Lấy SHA của file hiện tại
        const { data: fileData } = await octokit.repos.getContent({
            owner: OWNER,
            repo: REPO,
            path: PATH,
        });

        // 3. Update file lên GitHub
        // Lưu ý: Content gửi lên phải là toàn bộ nội dung file script.js mới
        await octokit.repos.createOrUpdateFileContents({
            owner: OWNER,
            repo: REPO,
            path: PATH,
            message: 'Update from Web Admin Panel',
            content: Buffer.from(content).toString('base64'),
            sha: fileData.sha,
        });

        res.status(200).send({ message: 'Thành công! Web đang được Rebuild...' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Lỗi GitHub API: ' + error.message });
    }
}
