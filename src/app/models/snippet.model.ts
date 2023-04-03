import { Localized } from "./localized.model";
import { Thumbnail } from "./thumbnails.model";

export interface Snippet{
    channelId: string;
    channelTitle: string;
    localized: Localized;
    publishedAt: string;
    thumbnails :Thumbnail;
    title:string;
}