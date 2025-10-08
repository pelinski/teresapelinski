// scripts/parsePosts.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_POSTS_DIR = path.join(process.cwd(), 'content/blog')
const BLOG_OUTPUT_DIR = path.join(process.cwd(), 'public/content/parsed/blog')
const NEWS_POSTS_DIR = path.join(process.cwd(), 'content/news')
const NEWS_OUTPUT_DIR = path.join(process.cwd(), 'public/content/parsed/news')

const BLOG_OUTPUT_FILE = path.join(BLOG_OUTPUT_DIR, 'parsed-blogposts.json')
const BLOG_METADATA_FILE = path.join(BLOG_OUTPUT_DIR, 'blogposts-metadata.json')
const NEWS_OUTPUT_FILE = path.join(NEWS_OUTPUT_DIR, 'parsed-news.json')
const NEWS_METADATA_FILE = path.join(NEWS_OUTPUT_DIR, 'news-metadata.json')

// Configure marked options
marked.setOptions({
	gfm: true,
	breaks: true,
})

// Parse a single post file
function parsePost(filePath) {
	const fileContent = fs.readFileSync(filePath, 'utf-8')
	const { data, content } = matter(fileContent)
	const htmlContent = marked(content)
	const filename = path.basename(filePath)
	const slug = data.slug || filename.replace('.md', '')
	const stats = fs.statSync(filePath)

	return {
		slug,
		title: data.title || 'Untitled',
		date: data.date || new Date().toISOString().split('T')[0],
		tags: data.tags || [],
		excerpt: data.excerpt || '',
		content: htmlContent,
		lastModified: stats.mtime.getTime(),
		...Object.keys(data).reduce((acc, key) => {
			if (!['slug', 'title', 'date', 'tags', 'excerpt', 'featured', 'order'].includes(key)) {
				acc[key] = data[key]
			}
			return acc
		}, {}),
	}
}

// Load existing posts from JSON
function loadExistingPosts(output_file) {
	if (fs.existsSync(output_file)) {
		return JSON.parse(fs.readFileSync(output_file, 'utf-8'))
	}
	return []
}

// Save posts to JSON files
function savePosts(posts, output_dir, output_file, metadata_file) {
	if (!fs.existsSync(output_dir)) {
		fs.mkdirSync(output_dir, { recursive: true })
	}

	const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

	fs.writeFileSync(output_file, JSON.stringify(sorted, null, 2))

	const metadata = sorted.map(({ content, ...meta }) => meta)
	fs.writeFileSync(metadata_file, JSON.stringify(metadata, null, 2))
}

// Update posts array with a single post
function updatePosts(posts, newPost) {
	const index = posts.findIndex((p) => p.slug === newPost.slug)
	if (index >= 0) {
		posts[index] = newPost
	} else {
		posts.push(newPost)
	}
	return posts
}

// Remove post from array
function removePost(posts, slug) {
	return posts.filter((p) => p.slug !== slug)
}

// Parse all posts initially
function parseAllPosts(output_dir, input_dir, output_file, metadata_file) {
	if (!fs.existsSync(output_dir)) {
		fs.mkdirSync(output_dir, { recursive: true })
	}

	if (!fs.existsSync(input_dir)) {
		console.log(`📁 Creating posts directory at ${input_dir}`)
		fs.mkdirSync(input_dir, { recursive: true })
		savePosts([], output_dir, output_file, metadata_file)
		return []
	}

	const existingPosts = loadExistingPosts(output_file)
	const files = fs.readdirSync(input_dir).filter((file) => file.endsWith('.md'))

	let parsedCount = 0
	let skippedCount = 0

	const posts = files.map((filename) => {
		const filePath = path.join(input_dir, filename)
		const slug = filename.replace('.md', '')
		const stats = fs.statSync(filePath)
		const fileModified = stats.mtime.getTime()

		// Check if we have an existing post and it hasn't been modified
		const existingPost = existingPosts.find((p) => p.slug === slug)
		if (existingPost && existingPost.lastModified >= fileModified) {
			skippedCount++
			return existingPost
		}

		// Parse the post since it's new or modified
		parsedCount++
		return parsePost(filePath)
	})

	savePosts(posts, output_dir, output_file, metadata_file)
	console.log(`✅ Parsed ${parsedCount} posts, skipped ${skippedCount} unchanged`)
	return posts
}

// Main function
function main() {
	// One-time parse for build
	parseAllPosts(BLOG_OUTPUT_DIR, BLOG_POSTS_DIR, BLOG_OUTPUT_FILE, BLOG_METADATA_FILE)
	console.log('✨ Done parsing blog posts.')
	parseAllPosts(NEWS_OUTPUT_DIR, NEWS_POSTS_DIR, NEWS_OUTPUT_FILE, NEWS_METADATA_FILE)
	console.log('✨ Done parsing news posts.')
}

main()
