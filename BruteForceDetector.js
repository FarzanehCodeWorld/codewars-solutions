// Description:
// You're analyzing authentication logs. Each log entry is a string like:

// 192.168.1.1 LOGIN_FAIL user=admin
// 192.168.1.1 LOGIN_SUCCESS user=admin
// 10.0.0.5 LOGIN_FAIL user=root
// An IP is suspicious if it has 3 or more consecutive failures without a success in between. Return a list of suspicious IPs, sorted alphabetically.

// logs = [
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=root",
//     "10.0.0.5 LOGIN_FAIL user=test",
//     "10.0.0.5 LOGIN_SUCCESS user=test"
// ]
// detect_brute_force(logs)  # ["192.168.1.1"]
// The 10.0.0.5 IP had a failure then a success, so its streak reset. The 192.168.1.1 IP hit 3 failures in a row - busted. Only respond with a list of the suspicious IPs.

// A success resets that IP's failure count to zero. Empty list returns empty list.

// PS. You do not need to validate the IP addresses.

//Solution
function detectBruteForce(logs) {
  
  let failures = {};
  let suspects = new Set();
  
  for (let log of logs) {
    
    const [ ip, status ] = log.split(' ');
    
    if (status === 'LOGIN_SUCCESS')
      failures[ip] = 0;
    
    if (status !== 'LOGIN_FAIL')
      continue;
    
    failures[ip] = (failures[ip] || 0) + 1;
    
    if (failures[ip] === 3)
      suspects.add(ip);
  
  }

  return Array.from(suspects).sort();
}
