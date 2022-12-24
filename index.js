// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return -(distance - 42);
  }
}
function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(start, end) {
  if (end > start) {
    return (end - start) * 264;
  } else {
    return -(end - start) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  let dis = distanceTravelledInFeet(start, destination);

  if (dis <= 400) {
    return 0;
  } else if (dis > 400 && dis <= 2000) {
    return 2.56;
  } else if (dis > 2000 && dis <= 2500) {
    return 25;
  } else return "cannot travel that far";
}
