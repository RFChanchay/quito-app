import { Snippet } from "./snippet.model";

export interface Item{
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}