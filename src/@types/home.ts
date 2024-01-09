export interface FetchResult_OK {
    status:       string;
    copyright:    string;
    section:      string;
    last_updated: Date;
    num_results:  number;
    results:      Article[];
}

export interface FetchResult_NotOK {
    error: string;
}

export interface Article {
    section:             string;
    subsection:          Subsection;
    title:               string;
    abstract:            string;
    url:                 string;
    uri:                 string;
    byline:              string;
    item_type:           ItemType;
    updated_date:        Date;
    created_date:        Date | string;
    published_date:      Date | string;
    material_type_facet: string;
    kicker:              string;
    des_facet:           string[];
    org_facet:           string[];
    per_facet:           string[];
    geo_facet:           string[];
    multimedia:          Multimedia[];
    short_url:           string;
}

export enum ItemType {
    Article = "Article",
    Interactive = "Interactive",
}

export interface Multimedia {
    url:       string;
    format:    Format;
    height:    number;
    width:     number;
    type:      Type;
    subtype:   Subtype;
    caption:   string;
    copyright: string;
}

export enum Format {
    LargeThumbnail = "Large Thumbnail",
    SuperJumbo = "Super Jumbo",
    ThreeByTwoSmallAt2X = "threeByTwoSmallAt2X",
}

export enum Subtype {
    Photo = "photo",
}

export enum Type {
    Image = "image",
}

export enum Subsection {
    Asia = "asia",
    Empty = "",
    Middleeast = "middleeast",
    Newyorktoday = "newyorktoday",
    Politics = "politics",
}
