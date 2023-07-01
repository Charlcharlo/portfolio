const VERTICAL_ANGLE = 0.0261799;

export function calcOffset(length) {
    return Math.tan(VERTICAL_ANGLE) * length
}