export type Team = {
  id: string;
  name: string;
};

export type TeamOverview = {
  id: string;
  teamLeadId: string;
  teamMemberIds: string[];
};
