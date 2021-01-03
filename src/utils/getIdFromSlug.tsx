export function getIdFromSlug(slug: string = ''): string {
    const id = slug.match(/(\w)+$/g)
    if (!id) {
        return ''
    }

    return id[0]
}
