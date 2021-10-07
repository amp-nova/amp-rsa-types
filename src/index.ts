export class Prices {
    sale?: string
    list?: string
}

export class ProductImage {
    url: string
    large?: string
    thumb?: string
}

export class ResultsMeta {
    limit: number
    offset: number
    count: number
    total: number
}

export class ProductResults {
    meta: ResultsMeta
    results: [Product]
}

export class CategoryResults {
    meta: ResultsMeta
    results: [Category]
}

export class Identifiable {
    id: string
}

export class CommerceObject extends Identifiable {
    slug: string
    name: string
    raw: string
}

export class Product extends CommerceObject {
    shortDescription?: string
    longDescription?: string
    categories: Category[]
    variants: Variant[]
    productType: string
}

export class Attribute {
    name: string
    value: string
}

export class Variant extends Identifiable {
    sku: string
    prices: Prices
    defaultImage?: ProductImage
    images: ProductImage[]
    attributes: Attribute[]

    color?: string
    size?: string
    articleNumberMax?: string
}

export class Category extends CommerceObject {
    parent?: Category
    children: Category[]
    products: Product[]
}

export class SearchResult {
    products: Product[]
}