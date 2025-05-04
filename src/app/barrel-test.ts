
// barrel-test.ts
import * as Sections from './components/sections';
import * as UI from './components/ui';
import * as Features from './components/features';
import * as Primitives from './components/primitives';
import * as Timeline from './components/HowWeWorkTimeline';
import * as Motion from './components/motion';

console.log('✅ All barrels resolved successfully.');
console.log({
  Sections: Object.keys(Sections),
  UI: Object.keys(UI),
  Features: Object.keys(Features),
  Primitives: Object.keys(Primitives),
  Timeline: Object.keys(Timeline),
  Motion: Object.keys(Motion),
});
