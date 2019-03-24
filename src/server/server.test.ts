import app from './server';
import { equal, ok} from 'assert';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      equal([1, 2, 3].indexOf(4), -1);
    });
  });

  it('should be defined', () => {
    ok(app);
  });
});