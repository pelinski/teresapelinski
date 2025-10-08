import React, { useState, useEffect, JSX } from 'react'
import { useLocation } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

interface Post {
	slug: string
	title: string
	date: string
	content: string
}

export const Now: React.FC<{ scrollHandler: (scrollTo: string) => () => void }> = ({ scrollHandler }): JSX.Element => {
	const [posts, setPosts] = useState<Post[]>([])
	useEffect(() => {
		let isMounted = true
		fetch('content/parsed/news/parsed-news.json')
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
	const location = useLocation()
	return (
		<>
			<span className='screen-title'>🗞️ Now</span>

			<div>
				{' '}
				{posts.map((post) => (
					<div className='news-post' key={post.slug}>
						<h2 className='news-date'>{new Date(post.date).toLocaleDateString()}</h2>
						<div className='news-content'>{ReactHtmlParser(post.content)}</div>
					</div>
				))}
			</div>
			{location.pathname === '/now' && (
				<div className='footer'>
					this /now page has been inspired by <a href='https://sive.rs/nowff'> derek sivers</a>
				</div>
			)}
		</>
	)
}
