# Dependency Review Lab

Sample repository used to validate dependency-review controls on pull requests.

## Prepared Snippet — Dependency Review workflow

```yaml
name: Dependency Review

on:
  pull_request:
    branches:
      - main

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Review dependency changes
        uses: actions/dependency-review-action@v4