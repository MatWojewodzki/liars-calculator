export default function (handSizeToExclude: number): number[] {
    return Array.from({ length: 23 - handSizeToExclude }, (_, i) => i + 1 + handSizeToExclude)
}