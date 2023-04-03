import { Item } from "./item.model";
import { PageInfo } from "./pageinfo.model";
import { Snippet } from "./snippet.model";

export interface Youtube{
    kind: string;
    etag: string;
    pageInfo:PageInfo;
    items:Item[];
}