import { expect } from 'chai';
import { describe, it } from 'mocha';
import TeamGenerator from '../src/teamGenerator.js';


describe('TeamGenerator Class', function() {
    let teamGenerator;   

    beforeEach(() => {
        let players = ['Kylian Mbappé', 'Achraf Hakimi','Son Heung-min', 'Karim Benzema', 'Mathieu Valbuena', 'Kaoru Mitoma']
        teamGenerator = new TeamGenerator(players);
    });

    describe('generateTeams()', function() {
        it('should generate a team', function() {
            teamGenerator.generateTeams();
            const teams = teamGenerator.getTeams();
            expect(teams).to.have.lengthOf(2);
            teams.forEach(team => {
                expect(team.players).to.have.lengthOf(teamGenerator.playersPerTeam);
            });
        });
    });
    describe('getTeams', function() {
        it('should return the generated teams', function() {
            teamGenerator.generateTeams();
            const teams = teamGenerator.getTeams();
            expect(teams).to.be.an('array');
            expect(teams.length).to.be.greaterThan(0); // Assurez-vous que des équipes ont été générées
        });
      });
});