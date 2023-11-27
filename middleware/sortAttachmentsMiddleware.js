const attachmentController = require('../controllers/attachmentController');
const userController = require('../controllers/userController');
const matchingAlgorithms = require('../utils/matchingAlgorithms');

const sortAttachmentsMiddleware = async (req, res, next) => {
  const attachments = attachmentController.getAllAttachments();
  const user = userController.getUser(req.user.id);
  const userRole = user.role;

  // Function for sorting based on user role
  const compareAttachments = (attachmentA, attachmentB) => {
    if (userRole === 'guest') {
      return compareByLocation(attachmentA, attachmentB);
    } else if (userRole === 'student') {
      return compareByAllFunctions(attachmentA, attachmentB);
    } else {
      return 0; // No sorting for other roles
    }
  };

  // Function to compare attachments based on location
  const compareByLocation = (attachmentA, attachmentB) => {
    const locationMatchA = matchingAlgorithms.calculateLocationMatch(user.location.coordinates, attachmentA.location.coordinates);
    const locationMatchB = matchingAlgorithms.calculateLocationMatch(user.location.coordinates, attachmentB.location.coordinates);
    return locationMatchB - locationMatchA; // Sort by location in descending order
  };

  // Function to compare attachments based on all functions
  const compareByAllFunctions = (attachmentA, attachmentB) => {
    const averageMatchA = calculateAverageMatch(attachmentA);
    const averageMatchB = calculateAverageMatch(attachmentB);
    return averageMatchB - averageMatchA; // Sort by average match in descending order
  };

  // Function to calculate the average match for an attachment
  const calculateAverageMatch = (attachment) => {
    const skillMatch = matchingAlgorithms.calculateSkillMatch(user.skills, attachment.requiredSkills);
    const keywordMatch = matchingAlgorithms.calculateKeywordMatch(user.keywords, attachment.keywords);
    const timeMatch = matchingAlgorithms.calculateTimeMatch(user.availability, attachment.duration);
    const locationMatch = matchingAlgorithms.calculateLocationMatch(user.location.coordinates, attachment.location.coordinates);

    // Calculate the average percentage match
    const averageMatch = (skillMatch + keywordMatch + timeMatch + locationMatch) / 4;

    return averageMatch;
  };

  // Sort the attachments using the appropriate comparison function
  attachments.sort(compareAttachments);

  // Attach the sorted attachments to the response object
  res.locals.sortedAttachments = attachments;

  // Continue to the next middleware or route handler
  next();
};

module.exports = sortAttachmentsMiddleware;
