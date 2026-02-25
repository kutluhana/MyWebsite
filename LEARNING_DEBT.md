# Learning Debt

Concepts introduced in conversation that we want to remember.

---

## package.json vs package-lock.json

**Plain English:** `package.json` is the list of dependencies you choose (with flexible version ranges like "React 18.x"). `package-lock.json` is a snapshot of the exact versions npm actually installed, including every nested dependency, so everyone gets the same install. You edit `package.json`; you commit both and let npm maintain the lock file.

**In this project:** Dependencies are declared with ranges in `package.json`; the lock file pins exact versions.

```json
// package.json — you edit this (ranges)
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}

// package-lock.json — npm maintains this (exact versions for every package)
```
