import { IMovie } from "src/interfaces/app.interface";

export interface ThubnailProps {
  movie: IMovie;
  isBig?:boolean;
}