import { MoSQL } from './MoSQL';
import { equal } from 'assert';
const instance = new MoSQL();

describe('MoSQL', () => {
    describe('decideModel', () => {
        it('should return the provided model if one is provided', () => {
            const test: any = {
                metadata: {},
                recordName: () => {}
            };
            equal(instance.decideModel(test), test);
        });

        it('should return the internal initial model if none is provided', () => {
            const test: any = {
                metadata: {},
                recordName: () => {}
            };
            const instance2 = new MoSQL(test);
            equal(instance2.decideModel(null), test);
        });
    });
});