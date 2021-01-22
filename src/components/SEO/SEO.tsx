import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import urljoin from 'url-join'

export interface SEOProps {
    og?: {
        url?: string
        image?: string
        title?: string
        description?: string
        sitename?: string
        type?: string
    }
    title?: string
    twitter?: {
        site?: string
        title?: string
        description?: string
        image?: string
    }
    article?: {
        published_time?: string
        modified_time?: string
        section?: string
    }
    image?: string
    description?: string
    last_updated_date?: string
    articleid?: string
}

export function SEO(props: SEOProps) {
    const location = useLocation()
    const title = props?.title
        ? `${props?.title} — The Space Post`
        : 'The Space Post'
    const description = props?.description || 'description'
    const image =
        props.image ||
        'https://spacenews.com/wp-content/uploads/2020/12/soyuz-oneweb-dec2020.jpg'

    const Article = (
        <Helmet>
            {props?.article?.published_time ? (
                <meta
                    property="article:published_time"
                    content={props.article.published_time}
                />
            ) : null}

            {props?.article?.modified_time ? (
                <meta
                    property="article:modified_time"
                    content={props.article.modified_time}
                />
            ) : null}

            <meta
                property="article:section"
                content={props?.article?.section}
            />
        </Helmet>
    )
    const OpenGraph = (
        <Helmet>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://spacepost.netlify.app/" />
            <meta property="og:title" content={props?.og?.title || title} />
            <meta
                property="og:description"
                content={props?.og?.description || description}
            />
            <meta property="og:image" content={props?.og?.image || image} />
        </Helmet>
    )
    const Twitter = (
        <Helmet>
            <meta property="twitter:card" content={'summary_large_image'} />
            <meta
                property="twitter:url"
                content="https://spacepost.netlify.app/"
            />
            <meta
                property="twitter:title"
                content={props?.twitter?.title || title}
            />
            <meta
                property="twitter:description"
                content={props?.twitter?.description || description}
            />
            <meta
                property="twitter:image"
                content={props?.twitter?.image || image}
            />
        </Helmet>
    )

    return (
        <>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <link
                    rel="canonical"
                    href={urljoin('http://localhost:3000', location?.pathname)}
                />
                {props?.article?.published_time ? (
                    <meta
                        property="article:published_time"
                        content={props.article.published_time}
                    />
                ) : null}

                {props?.article?.modified_time ? (
                    <meta
                        property="article:modified_time"
                        content={props.article.modified_time}
                    />
                ) : null}

                <meta
                    property="article:section"
                    content={props?.article?.section}
                />
            </Helmet>
            {OpenGraph}
            {Article}
            {Twitter}
        </>
    )
}

export default SEO
