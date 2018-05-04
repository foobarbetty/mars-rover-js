var MarsRover = require('../lib/MarsRover.js');

describe('Mars Rover', function() {

    describe('You have a mars rover machine that must be remote controlled', function() {

        it('should use default starting direction value N when not assigned', function() {
            var mr = new MarsRover([12, 21]);
            expect(mr.direction).toEqual('N');
        });

        it('should reduce Y when moving north', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['f', 'f']);
            expect(mr.location).toEqual([12, 19]);
        });

        it('should increase Y when moving south', function() {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['f']);
            expect(mr.location).toEqual([12, 22]);
        });

        it('should reduce X when moving west', function() {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['f']);
            expect(mr.location).toEqual([11, 21]);
        });

        it('should increase X when moving east', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['f']);
            expect(mr.location).toEqual([13, 21]);
        });

        it('should increase Y when moving backwards facing north', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['b']);
            expect(mr.location).toEqual([12, 22]);
        });

        it('should reduce Y when moving backwards facing south', function() {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['b']);
            expect(mr.location).toEqual([12, 20]);
        });

        it('should increase X when moving backwards facing west', function() {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['b']);
            expect(mr.location).toEqual([13, 21]);
        });

        it('should reduce X when moving backwards facing east', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['b']);
            expect(mr.location).toEqual([11, 21]);
        });

        it('should change direction from E to N when command is to turn left', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['l']);
            expect(mr.direction).toEqual('N');
        });

        it('should change direction from N to W when command is to turn left', function() {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['l']);
            expect(mr.direction).toEqual('W');
        });

        it('should change direction from E to S when command is to turn right', function() {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['r']);
            expect(mr.direction).toEqual('S');
        });
    });
});
