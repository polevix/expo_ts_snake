export interface GestureEventType {
    nativeEvent: { translationX: any; translationY: any; };
}

export interface Coordinate {
    x: number;
    y: number;
}

export enum Direction {
    Right,
    Up,
    Left,
    Down,
}