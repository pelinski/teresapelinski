import React, { useState, useEffect, JSX } from 'react'
import { Link } from 'react-router-dom'

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
			{' '}
			<span className='screen-title'>📝 Blog</span>
			<div>
				<br />
				(a space created specifically for writing outside of the academic yoke) Subscribe to the{' '}
				<a href='/rss.xml' className='h-green' target='_blank' rel='noopener noreferrer'>
					📡 RSS Feed (beta)
				</a>{' '}
				to get notified of new posts!{' '}
			</div>
			{currentPost == null &&
				posts.map((post) => (
					<div className='blog-post' key={post.slug}>
						<h1 className='blog-title h-red'>{post.title} </h1>
						<h2 className='blog-date'>{new Date(post.date).toLocaleDateString()}</h2>
						<div className='blog-content'>{post.excerpt}</div>
						<span className='blog-tags h-green'>Tags: {post.tags.join(', ')}</span>
						<br />
						<Link to={`/blog/${post.slug}`} className='blog-readmore h-yellow'>
							{' '}
							Read more...
						</Link>
					</div>
				))}
			{/* {currentPost != null && (
				<>
					<a className={'blog-readmore h-yellow'} onClick={() => setCurrentPost(null)}>
						{' '}
						{'<-- '}Back to all posts
					</a>
					<div className='blog-post'>
						<h1 className='blog-title h-red'>{currentPost.title}</h1>
						<h2 className='blog-date'>{new Date(currentPost.date).toLocaleDateString()}</h2>
						<div className='blog-content'>{ReactHtmlParser(currentPost.content)}</div>
						<span className='blog-tags h-green'>Tags: {currentPost.tags.join(', ')}</span>
						<br />
					</div>
					<a className='blog-readmore h-yellow' onClick={() => setCurrentPost(null)}>
						{' '}
						{'<-- '}Back to all posts
					</a>
				</>
			)} */}
		</div>
	)
}
