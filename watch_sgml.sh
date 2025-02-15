#!/bin/bash

WATCH_DIR="doc/src/sgml"
BUILD_CMD="make -C $WATCH_DIR STYLE=website html"

echo "🔄 Watching $WATCH_DIR for SGML changes..."

inotifywait -m -e modify,create,delete --format "%w%f" -r $WATCH_DIR --exclude '.*\.(xml|html|log|out)$' | while read FILE
do
    # SGML 파일이 변경되었는지 확인
    CHANGED_FILES=$(git status --porcelain | grep '\.sgml$' | wc -l)

    if [ "$CHANGED_FILES" -gt 0 ]; then
        echo "📄 SGML file changed: $FILE"
        echo "🚀 Rebuilding SGML to HTML..."
        $BUILD_CMD
        echo "✅ Build completed!"
    else
        echo "⚠ No SGML changes detected, skipping build."
    fi
done