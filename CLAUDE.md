# Hockey is the Best: A Powerpoint Party Presentation

## Context

This repository holds the code for a **powerpoint party** presentation. A powerpoint party is a social event where attendees each prepare a short presentation on a topic of their choosing and present it to the group. The presentations are meant to be fun, low-stakes, and reflect the presenter's personality. No one said they have to be fair.

## Presentation

**Title:** Hockey is the Best of the Major 4 North American Sports (And It's Not Close)

A confident, slightly unhinged defense of hockey's supremacy over the NFL, NBA, and MLB. The presenter acknowledges upfront that the criteria used to evaluate "best sport" were specifically chosen to make hockey look good — and argues this is completely fine, because it's their presentation and they make the rules. Occasional moments of genuine sincerity sneak through.

---

## Outline

> This outline is a living document, updated collaboratively as the presentation is built.

### 1. Title Slide
- Title, presenter name, maybe a dramatic tagline

### 2. Ground Rules
- "I will be defining the criteria. The criteria will be fair. (They will not be fair.)"
- Acknowledge the conflict of interest; proceed anyway

### 3. The Criteria
- Define the rubric used to judge each sport
- *(To be determined — criteria chosen to favor hockey)*

### 4. The Competitors
- Brief, slightly dismissive introductions to football, basketball, and baseball
- Acknowledge their good qualities before systematically dismantling them

### 5. The Case for Hockey (by criterion)
- Walk through each criterion and score hockey vs. the field
- Running tally / scoreboard gag optional

### 6. The Moment of Sincerity
- A genuine, heartfelt section about what makes hockey actually special
- The speed, the physicality, the culture, the playoffs — no irony here

### 7. Counterarguments (Addressed and Dismissed)
- "But hockey isn't popular in warm climates" → addressed
- "The NHL has a smaller fanbase" → addressed
- *(other objections TBD)*

### 8. Conclusion
- Restate thesis with confidence
- Thank the audience for coming to this completely unbiased presentation

---

## Technical Specifications

- **Format:** Single-page web app, each slide is a full-viewport (`100vh`) section
- **Scroll behavior:** CSS `scroll-snap-type: y mandatory` — one scroll gesture snaps to the next section with smooth easing; no libraries required
- **Markup:** Semantic HTML5
- **Styling:** Plain CSS (custom properties for theming, flexbox/grid for layout)
- **Interactivity:** Vanilla JavaScript only — no frameworks, no build step
- **Fonts/assets:** TBD as design takes shape
- **Target:** Desktop browser (this is a live presentation, not a mobile site)
