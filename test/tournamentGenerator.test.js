import { expect } from 'chai';
import { describe, it } from 'mocha';
import TournamentGenerator from '../src/tournamentGenerator.js';


describe('Tournamemnt Class', function() {
    let tournamentGenerator;   

    beforeEach(() => {
      const teams = [
        { name: 'PSG', players: ['Achraf Hakimi'] },
        { name: 'Real Madrid', players: ['Kylian Mbappé'] },
        { name: 'Liverpool', players: ['Mohamed Salah'] },
        { name: 'Manchester City', players: ['Kevin De Bruyne'] },
        { name: 'Bayern Munich', players: ['Thomas Müller'] },
        { name: 'Barcelona', players: ['Ansu Fati'] },
        { name: 'Juventus', players: ['Federico Chiesa'] },
        { name: 'Chelsea', players: ['Mason Mount'] }
      ];
      tournamentGenerator = new TournamentGenerator(teams);
    });
  
    describe('generatePoules', function() {
      it('should correctly generate poules based on teams', function() {
        tournamentGenerator.generatePoules();
        expect(tournamentGenerator.poules).to.have.lengthOf(2);
        tournamentGenerator.poules.forEach(poule => {
          expect(poule).to.have.lengthOf(4);
        });
      });
    });
  
    describe('simulatePoulesMatches', function() {
      it('should correctly simulate matches and select qualified teams', function() {
        tournamentGenerator.generatePoules();
        tournamentGenerator.simulatePoulesMatches();
        expect(tournamentGenerator.finalStages[0]).to.have.lengthOf(4);
      });
    });
  
    describe('generateFinalStages', function() {
      it('should correctly generate the final stages', function() {
        tournamentGenerator.generatePoules();
        tournamentGenerator.simulatePoulesMatches();
        tournamentGenerator.generateFinalStages();
        let finalStages = tournamentGenerator.finalStages;
        expect(finalStages.length).to.be.greaterThan(1);
        expect(finalStages[finalStages.length - 1]).to.have.lengthOf(1);
      });
    });
  
    describe('generateTournament', function() {
      it('should correctly generate a complete tournament', function() {
        let finalStages = tournamentGenerator.generateTournament();
        expect(finalStages).to.not.be.empty;
        expect(finalStages[finalStages.length - 1]).to.have.lengthOf(1);
      });
    });
});
