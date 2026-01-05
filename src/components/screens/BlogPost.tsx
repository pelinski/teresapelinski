import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

interface Post {
	slug: string
	title: string
	date: string
	tags: string[]
	excerpt: string
	content: string
}
export const BlogPost: React.FC<{ slug: string }> = ({ slug }) => {
	const [post, setPost] = useState<Post | null>(null)

	useEffect(() => {
		fetch('content/parsed/blog/parsed-blogposts.json')
			.then((res) => res.json())
			.then((posts: Post[]) => {
				setPost(posts.find((p) => p.slug === slug) ?? null)
			})
	}, [slug])

	if (!post) return <div>Post not found.</div>

	return (
		<div>
			<Link to='/blog' className='blog-readmore h-yellow'>
				← Back to all posts
			</Link>

			<h1 className='blog-title h-red'>{post.title}</h1>
			<h2 className='blog-date'>{new Date(post.date).toLocaleDateString()}</h2>

			<div className='blog-content'>{ReactHtmlParser(post.content)}</div>

			<span className='blog-tags h-green'>Tags: {post.tags.join(', ')}</span>
		</div>
	)
}
