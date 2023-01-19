const side1 = parseInt(process.argv[2])
const side2 = parseInt(process.argv[3])
const side3 = parseInt(process.argv[4])

let perimeter = 0

if (side1+side2 > side3 || side1+side3 > side2 || side2+side3 > side1) {
    const triangle = [side1, side2, side3]
    for (const side of triangle) {
        perimeter += parseInt(side)
    }

    const semi = perimeter/2

    const area = Math.sqrt(perimeter * (perimeter - triangle[0]) 
    * (perimeter - triangle[1]) 
    * (perimeter - triangle[2]))

    console.log(perimeter);
    console.log(area);
}else{
    console.log("Impossible triangle");

}