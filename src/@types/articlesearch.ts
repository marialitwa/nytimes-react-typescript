export interface FetchResult_OK {
    status:    string;
    copyright: string;
    response:  Response;
    results: Article_ArticleSearch[];
}

export interface FetchResult_NotOK {
    error: string;
}

export interface Response {
    docs: Article_ArticleSearch[];
    meta: Meta;
}

export interface Article_ArticleSearch {
    abstract:         string;
    web_url:          string;
    snippet:          string;
    lead_paragraph:   string;
    source:           Source;
    multimedia:       Multimedia[];
    headline:         Headline;
    keywords:         Keyword[];
    pub_date:         string;
    document_type:    DocumentType;
    news_desk:        string;
    section_name:     string;
    byline:           Byline;
    type_of_material: string;
    _id:              string;
    word_count:       number;
    uri:              string;
    subsection_name?: string;
}

export interface Byline {
    original:     string;
    person:       Person[];
    organization: null;
}

export interface Person {
    firstname:    string;
    middlename:   null | string;
    lastname:     string;
    qualifier:    null;
    title:        null;
    role:         Role;
    organization: string;
    rank:         number;
}

export enum Role {
    Reported = "reported",
}

export enum DocumentType {
    Article = "article",
    Multimedia = "multimedia",
}

export interface Headline {
    main:           string;
    kicker:         null | string;
    content_kicker: null;
    print_headline: null;
    name:           null;
    seo:            null;
    sub:            null;
}

export interface Keyword {
    name:  Name;
    value: string;
    rank:  number;
    major: Major;
}

export enum Major {
    N = "N",
}

export enum Name {
    Glocations = "glocations",
    Organizations = "organizations",
    Persons = "persons",
    Subject = "subject",
}

export interface Multimedia {
    rank:      number;
    subtype:   string;
    caption:   null;
    credit:    null;
    type:      Type;
    url:       string;
    height:    number;
    width:     number;
    legacy:    Legacy;
    subType:   string;
    crop_name: string;
}

export interface Legacy {
    xlarge?:          string;
    xlargewidth?:     number;
    xlargeheight?:    number;
    thumbnail?:       string;
    thumbnailwidth?:  number;
    thumbnailheight?: number;
    widewidth?:       number;
    wideheight?:      number;
    wide?:            string;
}

export enum Type {
    Image = "image",
}

export enum Source {
    TheNewYorkTimes = "The New York Times",
}

export interface Meta {
    hits:   number;
    offset: number;
    time:   number;
}
