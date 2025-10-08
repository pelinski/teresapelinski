import React, { useState, useEffect, JSX } from 'react'
import ReactHtmlParser from 'react-html-parser'

interface Post {
	slug: string
	title: string
	date: string
	tags: string[]
	excerpt: string
	content: string
}

export const Blog: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => {
	const [posts, setPosts] = useState<Post[]>([])
	const [currentPost, setCurrentPost] = useState<Post | null>(null)
	useEffect(() => {
		let isMounted = true
		fetch('content/parsed/blog/parsed-blogposts.json')
			.then((res) => res.json())
			.then((data) => {
				if (isMounted) {
					setPosts(data)
				}
			})
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<div>
			<span className='screen-title'>📝 Blog</span>
			{currentPost == null &&
				posts.map((post) => (
					<div className='blog-post' key={post.slug}>
						<h1 className='blog-title h-red'>{post.title}</h1>
						<h2 className='blog-date'>{new Date(post.date).toLocaleDateString()}</h2>
						<div className='blog-content'>{post.excerpt}</div>
						<a className='blog-readmore h-yellow' onClick={() => setCurrentPost(post)}>
							{' '}
							Read more...
						</a>
						<div className='blog-tags'>Tags: {post.tags.join(', ')}</div>
					</div>
				))}

			{currentPost != null && (
				<div className='blog-post'>
					<a className={'blog-readmore h-yellow'} onClick={() => setCurrentPost(null)}>
						{' '}
						{'<-- '}Back to all posts
					</a>
					<h1 className='blog-title h-red'>{currentPost.title}</h1>
					<h2 className='blog-date'>{new Date(currentPost.date).toLocaleDateString()}</h2>
					<div className='blog-content'>{ReactHtmlParser(currentPost.content)}</div>
					<div className='blog-tags'>Tags: {currentPost.tags.join(', ')}</div>
					<br />
					<a className='blog-readmore h-yellow' onClick={() => setCurrentPost(null)}>
						{' '}
						{'<-- '}Back to all posts
					</a>
				</div>
			)}
		</div>
	)
}
