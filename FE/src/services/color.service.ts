export let currColor = 'black'
export const colors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#FF0000", // Red
    "#0000FF", // Blue
    "#008000", // Green
    "#FFFF00", // Yellow
    "#A52A2A", // Brown
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#00008B", // Dark blue
    "#90EE90", // Light green
    "#006400", // Dark green
    "#40E0D0", // Turquoise
    "#808000", // Olive green
    "#800000", // Maroon
    "#F5F5DC", // Beige
    "#808080", // Gray
    "#9370DB", // Light purple
    "#4B0082", // Dark purple
    "#E6E6FA", // Lavender
    "#FA8072", // Salmon
    "#87CEEB", // Sky blue
    "#D2B48C"  // Tan
]

export function changeColor(ev: any) {
    currColor = ev.target.value
}

