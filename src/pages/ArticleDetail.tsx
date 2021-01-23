import React from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Container, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { TitleDecoration, SEO, ArticleCardSkeleton } from 'src/components'
import { getIdFromSlug, scale, rhythm } from 'src/utils'
import { format } from 'date-fns'
import { useFetchSpaceNewsAPI } from 'src/hooks'
import { API } from 'src/models'
import { ArticleCard } from 'src/components'
const categoryFont = scale(0 / 5)

const Category = styled.a`
    text-decoration: none;
    color: blue;
    font-weight: 600;
    font-size: ${categoryFont.fontSize};
    line-height: ${categoryFont.lineHeight};
    text-transform: capitalize;
`

const CoverImg = styled.img`
    object-fit: cover;
    object-position: center center;
    height: 400px;
    width: 100%;
`

const SectionInfo = styled.section`
    margin-bottom: ${rhythm(2)};
`

const SectionContent = styled.section`
    margin-bottom: ${rhythm(3)};
`

const Writer = styled.p`
    font-size: ${scale(-1 / 5).fontSize};
    line-height: ${scale(-1 / 5).fontSize};
    margin-bottom: ${rhythm(0.5)};
`
const PublishedAt = styled.p`
    font-size: ${scale(-1 / 5).fontSize};
    line-height: ${scale(-1 / 5).lineHeight};
    margin-bottom: ${rhythm(0.5)};
`
const Title = styled.h1`
    font-size: ${scale(1.5).fontSize};
    line-height: ${scale(1.5).lineHeight};
    border-bottom: 1px solid hsl(0, 0%, 80%);
    padding-bottom: ${rhythm(1)};
`

export function ArticleDetail(props: RouteComponentProps) {
    const params = useParams<{ id: string; api: API }>()
    const id = getIdFromSlug(params?.id)
    const { news, loading } = useFetchSpaceNewsAPI(params.api).GetById(id)
    const { latest } = useFetchSpaceNewsAPI('blogs').GetAll({
        _limit: 2,
    })

    const Content = (
        <>
            <CoverImg src={news?.imageUrl} alt={news?.title} />
            <SectionInfo>
                <Writer>
                    By <span style={{ color: 'blue' }}>{news?.newsSite}</span>
                </Writer>
                <PublishedAt>
                    {news?.publishedAt
                        ? format(
                              new Date(news?.publishedAt as string),
                              `E. d, yyyy 'at' H:ss aaaa O`
                          )
                        : ''}
                </PublishedAt>
            </SectionInfo>
            <SectionContent>{news?.summary}</SectionContent>
        </>
    )

    return (
        <Container maxWidth="lg">
            <SEO
                title={news?.title}
                description={news?.summary}
                image={news?.imageUrl}
                last_updated_date={news?.updatedAt}
                articleid={news?.id}
                article={{
                    section: params.api,
                    published_time: news?.publishedAt,
                    modified_time: news?.updatedAt,
                }}
            />
            <Category>{params.api}</Category>
            <Title>{loading ? <Skeleton width="100%" /> : news?.title}</Title>
            <Grid container spacing={4}>
                <Grid item lg={9} md={9} sm={12}>
                    {loading ? (
                        <ArticleCardSkeleton variant={'content'} />
                    ) : (
                        <>{Content}</>
                    )}
                </Grid>

                <Grid item lg={3} md={3}>
                    <aside>
                        <TitleDecoration>
                            <p>Latest</p>
                        </TitleDecoration>
                        {latest.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                api={'blogs'}
                                variant="aside"
                            />
                        ))}
                    </aside>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticleDetail
