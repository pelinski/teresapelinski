#!/bin/bash
TYPE=${1:-patch}
git checkout dev && yarn test && yarn version --$TYPE && git push origin dev --no-verify && git checkout main && git merge -X theirs dev && git push origin main --no-verify