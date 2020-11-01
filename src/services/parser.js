module.exports = async ({ post }) => {
    const parsed = {
        text: `*${post.title}*\n\n${post.link}`,
        parse_mode: 'markdown'
    }

    return (post && post.title && post.link) ? parsed : undefined 
}