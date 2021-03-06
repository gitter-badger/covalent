import {
  describe,
  expect,
  beforeEach,
  it,
} from '@angular/core/testing';
import { TdBytesPipe } from './bytes.pipe';

describe('TdBytesPipe', () => {
  let pipe: TdBytesPipe;

  beforeEach(() => {
    pipe = new TdBytesPipe();
  });

  it('should return  with an empty or invalid input', () => {
    expect(pipe.transform(NaN, undefined)).toEqual('Invalid Number');
    expect(pipe.transform(undefined, undefined)).toEqual('0 B');
  });

  it('should return a formatted bytes to larger units', () => {
    expect(pipe.transform(0.3, undefined)).toEqual('0.30 B');
    expect(pipe.transform(0.76, undefined)).toEqual('0.76 B');
    expect(pipe.transform(535, undefined)).toEqual('535 B');
    expect(pipe.transform(138540, undefined)).toEqual('138.54 KB');
    expect(pipe.transform(1571800, undefined)).toEqual('1.57 MB');
    expect(pipe.transform(1571800, 4)).toEqual('1.5718 MB');
    expect(pipe.transform(10000000, undefined)).toEqual('10 MB');
    expect(pipe.transform(10200000, undefined)).toEqual('10.2 MB');
    expect(pipe.transform(3.81861e+10, undefined)).toEqual('38.19 GB');
    expect(pipe.transform(1.890381861e+14, undefined)).toEqual('189.04 TB');
    expect(pipe.transform(5.35765e+16, undefined)).toEqual('53.58 PB');
  });
});
