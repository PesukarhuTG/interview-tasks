/* periodOutput(period) method should output in the console once per every period how mach time has passed since the first function call. 
Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), */

function periodOutput(period) {
  let num = period;

  function memo() {
    console.log(`${num}(after ${period} ms)`);
    num += 100;
  }

  setInterval(memo, 100);
}

//periodOutput(100);