import { expect } from 'chai';
import { describe, it } from 'mocha';
import TeamGenerator from '../src/teamGenerator.js';


describe('TeamGenerator Class', function () {
    let teamGenerator;

    beforeEach(() => {
        let players = ['Kylian Mbappé', 'Achraf Hakimi', 'Son Heung-min', 'Karim Benzema', 'Mathieu Valbuena', 'Kaoru Mitoma']
        teamGenerator = new TeamGenerator(players);
    });

    describe('generateTeams()', function () {
        it('should generate a team', function () {
            teamGenerator.generateTeams();
            const teams = teamGenerator.getTeams();
            expect(teams).to.have.lengthOf(2);
            teams.forEach(team => {
                expect(team.players).to.have.lengthOf(teamGenerator.playersPerTeam);
            });
        });
    });
    describe('getTeams', function () {
        it('should return the generated teams', function () {
            teamGenerator.generateTeams();
            const teams = teamGenerator.getTeams();
            expect(teams).to.be.an('array');
            expect(teams.length).to.be.greaterThan(0); // Assurez-vous que des équipes ont été générées
        });
    });
});

describe('TeamGenerator Player', () => {
    const players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];
    const playersPerTeam = 3;
    const teamGenerator = new TeamGenerator(players, playersPerTeam);

    describe('should add a player to a team', () => {
        teamGenerator.generateTeams();
        const initialTeams = teamGenerator.getTeams();
        const teamIndex = 0;
        const initialTeamPlayers = [...initialTeams[teamIndex].players];

        teamGenerator.addPlayerToTeam(teamIndex, 'NewPlayer');

        const updatedTeams = teamGenerator.getTeams();
        const updatedTeamPlayers = updatedTeams[teamIndex].players;

        expect(updatedTeamPlayers.length).to.equal(initialTeamPlayers.length + 1);
        expect(updatedTeamPlayers).to.include('NewPlayer');
    });
});