module.exports = async ({ post }) => {
    return {
        text: `*${encodeURI(post.title)}*\n\n${post.link}`,
        parse_mode: 'markdown'
    }
}