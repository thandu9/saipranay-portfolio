# Independent V4 design review
Reviewer disposition: fix, then ship locally. No broad redesign warranted. Hero B selected for clearer identity, confident typography, unobstructed authentic portrait, and orange framing consistent with the wider visual system.

| Before | After | Why |
| --- | --- | --- |
| Mobile fact table had no focus target or scroll cue | Labeled keyboard-focusable region and explicit horizontal-scroll hint | Make duration/risk columns discoverable on narrow screens |
| Mobile caption joined “connections” and “that” | Explicit whitespace at responsive line break | Preserve readable copy when break is hidden |
| Model subline retained orphaned “Neither does my work” | “Six disciplines. One connected practice.” | Copy matches the new heading |
| Gallery denominator contrast 4.39:1 | Darkened denominator | Meet normal-text contrast requirement |

Independent reviewer inspected both desktop heroes, mobile B, desktop/mobile noise/model/gallery/schema, mobile supporting sections and all three mobile case studies, plus relevant source and design instructions. Static review cannot certify motion, performance or keyboard behavior; browser tests cover those separately. Follow-up verdict pending final captures.

Final correction verification: mobile caption whitespace restored; table region is focusable/labeled with a visible scroll cue and explicit arrow-key handling. Chromium and WebKit tests pass. Gallery contrast and credential accessible names pass automated checks. Follow-up independent whole-surface review was not performed; final corrections are verified by source, captures and browser tests.
