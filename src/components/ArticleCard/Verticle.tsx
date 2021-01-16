import React from 'react'
import styled from '@emotion/styled'
import { Link as RouterLink } from 'react-router-dom'
import { SpaceNews, API } from 'src/models'
import { rhythm, scale } from 'src/utils'
import kebabCase from 'lodash.kebabcase'

interface ArticleCardProps {
    article: SpaceNews
    api: API
}

const Article = styled.article`
    border-bottom: 1px solid hsl(0, 0%, 90%);
    height: 350px;
    &:not(:first-of-type) {
        margin-top: ${rhythm(1)};
    }
`

const By = styled.p`
    font-weight: 300;
    color: hsl(0, 0%, 50%);
    font-size: ${scale(-1 / 5).fontSize};
    line-height: ${scale(-1 / 5).lineHeight};
    text-transform: capitalize;
    margin-bottom: ${rhythm(0.5)};
    &:before {
        content: 'By ';
    }
`

const CoverImg = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 150px;
    margin-bottom: ${rhythm(0.1)};
`
const Capture = styled.p`
    font-size: ${scale(-2 / 5).fontSize};
    line-height: ${scale(-2 / 5).lineHeight};
    color: hsl(0, 0%, 40%);
    text-transform: capitalize;
    margin-bottom: ${rhythm(0.5)};
    &:before {
        content: '(';
    }
    &::after {
        content: ')';
    }
`
const Link = styled(RouterLink)`
    text-decoration: none;
`
const Title = styled.h2`
    font-size: ${scale(1 / 5).fontSize};
    line-height: ${scale(1 / 5).lineHeight};

    margin-bottom: ${rhythm(0.5)};
`

export function Verticle(props: ArticleCardProps) {
    const { article } = props
    const slug = `/${props?.api}/${kebabCase(`${article.title}`)}-${article.id}`
    return (
        <Article>
            <Link to={slug}>
                <CoverImg src={article?.imageUrl} alt={article?.title} />
                <Capture>Picture: {article?.newsSite}</Capture>
            </Link>
            <Link to={slug}>
                <Title>{article?.title}</Title>
            </Link>
            <By>{article?.newsSite}</By>
        </Article>
    )
}

export default Verticle
