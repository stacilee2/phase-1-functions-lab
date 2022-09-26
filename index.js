function distanceFromHqInBlocks(y) {
    if (y > 42) {
        return y - 42;
    } else if (y < 42) {
        return 42 - y; 
    }
}
function distanceFromHqInFeet(y) {
    return distanceFromHqInBlocks(y) * 264;
}
function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else if (start < end) {
        return (end - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    if (distance < 400) {
        return 0 ;
    } else if (400 < distance && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
    