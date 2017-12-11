import 'mocha';
import { expect } from 'chai';

import { Caption } from "../src/Caption";

describe('test', function () {
    let d = new Caption({ message: () => "foo", x: 100, y: 100 });

    it('test', function () {
        expect(true).to.be.true;
    });
});