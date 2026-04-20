# Aurora v2 UI Development Guidelines

## 1. Desktop-Mobile Feature Parity (필수)

**Rule: Every feature change must apply equally to desktop and mobile.**

When modifying components with responsive layouts (proof-shell, evidence-context, landing, proof-body, etc.):

### Checklist for every feature commit:
- [ ] Identified all @if blocks with desktop/mobile conditionals in the modified template
- [ ] Applied the change to BOTH branches (not just desktop)
- [ ] If adding an input/output, passed it to both desktop AND mobile sub-components
- [ ] Tested on both viewport sizes (desktop ≥ 768px, mobile < 768px)
- [ ] Commit message explicitly mentions both responsiveness ("desktop + mobile" or "responsive")

### Example patterns to check:
```html
<!-- ❌ Bad: Change applies to desktop only -->
<aside class="panel-right">
  <app-evidence-context [newFeature]="newData" />
</aside>
<!-- Mobile sheet below gets no change -->

<!-- ✅ Good: Change applies to both -->
<aside class="panel-right">
  <app-evidence-context [newFeature]="newData" />
</aside>
@if (isProof()) {
  @if (mobileContextOpen()) {
    <app-evidence-context [newFeature]="newData" />  <!-- Same input -->
  }
}
```

## 2. Test After Every 2 Features

Don't accumulate untested changes. Deploy and test on both sizes after:
- 2 feature implementations
- Any responsive-layout change
- Any event/input binding change

Run: `npm start` → test landing, proof, search, navigation on both mobile (375px) and desktop (1280px).

## 3. Component Hierarchy Reference

For understanding which components need dual updates:

| Component | Desktop | Mobile | Notes |
|-----------|---------|--------|-------|
| proof-shell | Panel layout | Stacked/sheet | Main state machine; search entry point |
| evidence-context | Right panel | Bottom sheet | Related findings, preset answer display |
| landing | Main area | Mobile-main | Layer constellation, chain menu, search |
| proof-body | Center panel | Full width | Proof chain, fractures, answer view |

When modifying one, check both contexts.

## 4. Common Pitfalls

- ❌ Adding input to desktop component but forgetting mobile sibling
- ❌ Testing desktop only, deploying, then discovering mobile broken
- ❌ Changing template structure (html layout) without checking responsive breakpoints
- ❌ Adding event emitters to desktop without mobile equivalent

## 5. Verification Checklist Before Commit

1. **Search**: Landing → search → proof (both sizes)
2. **Navigation**: Proof → back to landing (both sizes)
3. **Chat history**: Present in landing after proof state (both sizes)
4. **New features**: Visible and functional on both viewport sizes
5. **No console errors**: Check browser DevTools on both sizes

---

**Memory reference:** [[feedback_responsive_feature_parity.md]]
