function calculateDemeritPoints(speed) {
    const speedLimit = 100;
    const kmPerDemeritPoint = 10;

    if (speed <= speedLimit) {
        console.log("Speed is fine.");
        return 0; // No demerit points
    } else {
        // Calculate how many km/s above the speed limit
        const kmAboveLimit = speed - speedLimit;

        // Calculate demerit points
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint);

        console.log(`license suspended ${demeritPoints}`);
        return demeritPoints;
    }
}

// Example usage:
const carSpeed = 70;
const points = calculateDemeritPoints(carSpeed);
