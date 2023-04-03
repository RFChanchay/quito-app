import { Default } from "./default.model";
import { High } from "./high.model";
import { Maxres } from "./maxres.model";
import { Medium } from "./medium.model";
import { Standard } from "./standard.model";

export interface Thumbnail {
    default:Default;
    high:High;
    maxres:Maxres;
    medium:Medium;
    standard:Standard;
}