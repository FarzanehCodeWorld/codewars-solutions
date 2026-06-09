// Description

// A series of cogs are connected in a sprawling network. Unlike simple gear trains arranged in a rigid straight line, a single cog in this system can drive multiple other cogs simultaneously, creating complex branches and webs of mechanical power!

// You are given a list of cogs, their tooth counts, and a list of physical connections. One specific cog is the driver cog, which spins at a given Revolutions Per Minute (RPM). Your job is to calculate the final RPM of all cogs in the network.

// Rules of Gear Engagement
// Speed Ratio: If Cog A drives Cog B, the speed ratio is determined by their teeth. The formula is: RPM_B = RPM_A * (Teeth_A / Teeth_B)
// Direction (Rotation): Every time a gear drives another, the direction reverses.
// Clockwise rotation is represented by a positive RPM.
// Counter-clockwise rotation is represented by a negative RPM.
// The Driver: The driver cog's starting RPM is always given as a positive number (clockwise).
// Valid Networks: You can safely assume all provided gear networks are physically valid. They will not lock or jam (e.g., there are no impossible loops or conflicting gear ratios).
// Input
// gears: An array of integers where the index is the Gear ID, and the value is the number of teeth. (e.g., [10, 20, 30] means Gear 0 has 10 teeth, Gear 1 has 20 teeth, Gear 2 has 30 teeth).
// connections: An array of pairs [A, B] representing a physical mesh between Gear A and Gear B.
// driver_id: The integer ID of the gear providing the power.
// driver_rpm: The starting RPM of the driver gear (can be an integer or float).
// Output
// Return an array of RPMs for all gears (ordered by their ID).

// Do not round the final results. Return the exact floating-point values (the test suite uses fuzzy matching to account for minor floating-point precision errors).
// If a gear is completely disconnected from the driver system, its RPM is 0.0.


// Solution
function cogsebi(gears, connections, driverId, driverRpm) {
  const n = gears.length;
  const rpms = new Array(n).fill(0.0);
  const visited = new Array(n).fill(false);
  
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of connections) {   
    adj[u].push(v);
    adj[v].push(u);
  }
  const queue = [driverId];
  rpms[driverId] = driverRpm;
  visited[driverId] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current)
    
    for (const neighbor of adj[current]) {

      if (!visited[neighbor]) {
        visited[neighbor] = true;
        
        rpms[neighbor] = -rpms[current] * (gears[current] / gears[neighbor]);
        
        queue.push(neighbor);
      }
    }
  }
  
  return rpms;
}
