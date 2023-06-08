
type Category = {
    name: string,
    slug: string
}

export function generateSlug(string: string): string {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[ˆ\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/ˆ-+/g, '')
        .replace(/-+$/, '')
}

export function generateCategoryData(categories: string[]): Category[] {
    let categoryData: Category[] = [];
    categories.forEach((category: string) => {
        categoryData.push({
            name: category,
            slug: `${generateSlug(category)}`,
        });
    });
    return categoryData
}