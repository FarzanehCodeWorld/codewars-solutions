// Description
// Perlin Noise is a pseudorandom procedural texture used in various visual effects generation but also procedural world generation. Noise algorithms are used for generating world in video games like Minecraft, No Man's Sky, Noita, etc...

// In this kata you should use the already implemented function perlin(x: number, y: number): number function to procedurally generate a 2D world of dimension width * height. This function returns a float between 0 and 1.

// The coordinates passed to the perlin function must be offset from startX and startY and will be smoothed by multiplying by scale. x is considered to be the horizontal coordinate and y the vertical coordinate.

// x=0 is left and x=(width - 1) is right.
// y=0 is top and y=(height - 1) is bottom.

// Input
// startX: An integer used as an offset for the x axis.
// startY: An integer used as an offset for the y axis.
// width: An integer representing the length of the x axis. Always >= 0.
// height: An integer representing the length of the y axis. Always >= 0.
// scale: A float used to smooth the coordinates. Always >= 0.
// How scale works
// Without smoothing, parameters width=20, height=10 would render that:

// .▒▒..▓▒▒▓.█░..░░.▓░.
// .█░..░░.▓░.░▒.▒.░..█
// ░..█..▓▓▓.▓....▒▒..▓
// .█.░....░.▓..▓.░▒▓..
// █.█.░....░.▓..▓.░▒▓.
// ▓░....░...█...▒.░█.█
// █...▒.░..█..▓▓▓.▓...
// █.▓░....░...█...▒.░█
// ▓░.▒▒░█..░██.█..▒▓.▒
// ....░.▓..▓.░▒▓..▒▒▒░
// Not very great if you ask me. But when multiplying x and y by scale, we obtain smoother terrain (here width=20, height=10, scale=0.08):

// ........░░░▒▒▒▒▒▒▒▒▒
// ........░░▒▒▒▒▒▒▒▒▒▒
// ........░░▒▒▒▒▒▒▒▒▒▒
// ........░░▒▒▒▒▒▒▒▒▒▒
// .......░░▒▒▒▒▒▒▒▒▒▒▒
// .......░░▒▒▒▓▓▓▒▒▒▒▒
// ......░░▒▒▒▓▓▓▓▓▓▒▒▒
// .....░░░▒▒▓▓▓▓▓▓▓▓▒▒
// .....░░▒▒▒▓▓▓▓▓▓▓▓▒▒
// ....░░░▒▒▓▓████▓▓▓▓▒
// You can smooth terrains by calling the perlin function like so:

// perlin(x * scale, y * scale);
// Don't forget to addition the offsets in your code!

// Output
// A string representing the world. Each line must be separated by a line jump.

// Different unicode characters will represent the height of each position. Those characters are deduced from the perlin function return value like so:

// >= 0.90: █
// >= 0.80: ▓
// >= 0.65: ▒
// >= 0.50: ░
//  < 0.50: .
// (. represents water.)


function render(startX, startY, width, height, scale) {
  const world = [];
  for (let y = 0; y < height; y++) {
    let row = "";
    for (let x = 0; x < width; x++) {
      const noiseValue = perlin((x + startX) * scale, (y + startY) * scale);
      if (noiseValue >= 0.9) row += "█";
      else if (noiseValue >= 0.8) row += "▓";
      else if (noiseValue >= 0.65) row += "▒";
      else if (noiseValue >= 0.5) row += "░";
      else row += ".";
    }
    world.push(row);
  }
  return world.join("\n");
}
