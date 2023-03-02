import { Coordinate } from "../types/types";

export const checkGameOver = (
    snakeHead: Coordinate,
    boudaries: any
): boolean => {
    return (
        snakeHead.x < boudaries.xMin ||
        snakeHead.x > boudaries.xMax ||
        snakeHead.y > boudaries.yMax ||
        snakeHead.y < boudaries.yMin

    )
}