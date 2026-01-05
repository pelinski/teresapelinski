// generated with claude + chatgpt

const fs = require('fs')
const path = require('path')

const parsedPostsPath = path.join(process.cwd(), 'public/content/parsed/blog/parsed-blogposts.json')
const posts = require(parsedPostsPath)
const rssItems = posts
	.map(
		(post) => `
  <item>
    <title>${post.title}</title>
    <link>https://teresapelinski.com/blog</link>
    <guid>https://teresapelinski.com/blog/${post.slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>

    <content:encoded><![CDATA[
      ${post.content}
    ]]></content:encoded>
  </item>
`
	)
	.join('')

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" 
xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Your Blog</title>
    <link>https://teresapelinski.com/blog</link>
    <description>a space created specifically to write outside the academic yoke</description>
    <language>en</language>
    <atom:link href="https://teresapelinski.com/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rssFeed)
console.log('RSS feed generated!')
