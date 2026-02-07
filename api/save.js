// api/save.js
const { Octokit } = require("@octokit/rest");

module.exports = async (req, res) => {
    // Đảm bảo luôn trả về JSON để tránh lỗi "Unexpected token A"
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Chỉ chấp nhận POST' });
    }

    const { content, password } = req.body;

    // Kiểm tra mật khẩu
    if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Sai mật khẩu Admin!' });
    }

    // Kiểm tra Token
    if (!process.env.GITHUB_TOKEN) {
        return res.status(500).json({ message: 'Lỗi: Thiếu GITHUB_TOKEN trên Vercel' });
    }

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    try {
        const OWNER = 'ugphone839';
        const REPO = 'Executors';
        const PATH = 'script.js';

        // 1. Lấy SHA của file hiện tại
        const { data: fileData } = await octokit.repos.getContent({
            owner: OWNER,
            repo: REPO,
            path: PATH,
        });

        // 2. Ghi đè nội dung mới
        await octokit.repos.createOrUpdateFileContents({
            owner: OWNER,
            repo: REPO,
            path: PATH,
            message: 'Cập nhật từ Web Admin Panel',
            content: Buffer.from(content).toString('base64'),
            sha: fileData.sha,
        });

        return res.status(200).json({ message: 'Thành công! Đợi 1-2 phút để web cập nhật.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Lỗi GitHub API: ' + error.message });
    }
};
