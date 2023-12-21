export const ROLES = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  USER: 3,
};

export const NOTE_STATUS = {
  DRAFT: 1,
  SUBMITTED: 2,
  IN_REVIEW: 3,
  APPROVED: 4,
  REJECTED: 5,
  REMOVED: 6,
};

export const handleStatus = (status) => {
  switch (status) {
    case NOTE_STATUS.DRAFT:
      return "Draft";
    case NOTE_STATUS.APPROVED:
      return "Approved";
    case NOTE_STATUS.IN_REVIEW:
      return "In Review";
    case NOTE_STATUS.REJECTED:
      return "Rejected";
    case NOTE_STATUS.REMOVED:
      return "Removed";
    case NOTE_STATUS.SUBMITTED:
      return "Submitted";
    default:
      return "";
  }
};
