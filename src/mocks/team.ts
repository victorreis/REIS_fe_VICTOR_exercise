import { Team } from '@models/Team';

export const teamMock1: Team = {
  id: 'team1',
  name: 'Team 1 test',
  teamLeadId: 'teamLead1',
  teamMemberIds: ['teamMember1', 'teamMember2', 'teamMember3'],
};

export const teamMock2: Team = {
  id: 'team2',
  name: 'Team 2 test',
  teamLeadId: 'teamLead2',
  teamMemberIds: ['teamMember1', 'teamMember2', 'teamMember3'],
};

export const teamsMock: Team[] = [teamMock1, teamMock2];
