/*
 * 
 */

/* Skill-Based Matching Algorithm
 * Match students to attachments by comparing their skills
 * with the required skills for each attachment opportunity.
 */

function calculateSkillMatch(studentSkills, requiredSkills) {
    return percentageMatch(studentSkills, requiredSkills);
}

/* Keyword Matching Algorithm
 * Match students to attachments by comparing the keywords or 
 * tags associated with their profiles or opportunities.
 */

function calculateKeywordMatch(studentKeywords, attachmentKeywords) {
    return percentageMatch(studentKeywords, attachmentKeywords);
}

/* Time-Based Matching Algorithm:
 * Match students to attachments based on the time constraints and
 * availability specified by both students and organizations.
 */

function calculateTimeMatch(userDates, attachmentDates) {
    const userStartDate = userDates.start;
    const userEndDate = userDates.end;
    const attachmentStartDate = attachmentDates.start;
    const attachmentEndDate = attachmentDates.end;
    
    // Find the latest of the start dates and the earliest of end dates
    const overlapStartDate = userStartDate > attachmentStartDate ? userStartDate : attachmentStartDate;
    const overlapEndDate = userEndDate < attachmentEndDate ? userEndDate : attachmentEndDate;

    // Calculate the number of days in the overlap
    const overlapDays = Math.max(0, (new Date(overlapEndDate) - new Date(overlapStartDate)) / (1000 * 60 * 60 * 24) + 1);
    
    // Find the earliest of start dates and latest of end dates
    const earliestStartDate = userStartDate < attachmentStartDate ? userStartDate : attachmentStartDate;
    const latestEndDate = userEndDate > attachmentEndDate ? userEndDate : attachmentEndDate;
    
    // Calculate the total number of days between the user and attachment dates.
    const totalDays = Math.max(0, (new Date(latestEndDate) - new Date(earliestStartDate)) / (1000 * 60 * 60 * 24) + 1);
    
    // Calculate the percentage overlap
    const percentageOverlap = (overlapDays / totalDays) * 100;

    return percentageOverlap;
}

/* Location-Based Matching Algorithm
 * Match students to attachments based on their geographical location or proximity.
 */

function calculateLocationMatch(studentLocation, attachmentLocation, radius) {
    const distance = haversine(studentLocation, attachmentLocation);

    // Ensure radius is non-zero to avoid division by zero
    if(radius > 0) {
        // Calculate percentage based on relative distance
        const percentage = Math.max(0, ((radius - distance) / radius) * 100);

        return percentage;
    } else {
        // Handle the case where radius is zero or negative
        return 0;
    }
}

// Function to calculate percentage match
function percentageMatch(array1, array2) {
    // Convert arrays to lowercase to ensure case insensitivity
    const lowercaseArray1 = array1.map(item => item.toLowerCase());
    const lowercaseArray2 = array2.map(item => item.toLowerCase());

    // Find the number of common items
    const commonItems = lowercaseArray1.filter(item => lowercaseArray2.includes(item));

    // Calculate percentange match
    const percentageMatch = (commonItems.length / lowercaseArray2.length) * 100;

    return percentageMatch;
}

// Haversine Formula
// Function to calculate proximity or distance between two locations on the earth surface.
function haversine(point1, point2) {
    // Earth's radius in kilometers
    const radius = 6371;

    // Convert degrees to radians
    const toRadians = (angle) => angle * (Math.PI / 180);

    const latitude1 = toRadians(point1.latitude);
    const longtitude1 = toRadians(point1.longtitude);
    const latitude2 = toRadians(point2.latitude);
    const longtitude2 = toRadians(point2.longtitude);

    // Differences in coordinates 
    const differenceInLatitude = latitude2 - latitude1;
    const differenceInLongtitude = longtitude2 - longtitude1;

    // Haversine formula
    const a = Math.sin(differenceInLatitude / 2) ** 2 + Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(differenceInLongtitude / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calculate distance
    const distance = radius * c;

    return distance;
}

module.exports = {
    calculateSkillMatch,
    calculateKeywordMatch,
    calculateTimeMatch,
    calculateLocationMatch
}