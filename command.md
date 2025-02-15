# 명령어

- **초기화**: make -C doc/src/sgml clean
- **문서 생성**: make -C doc/src/sgml STYLE=website html
- **강제 빌드 후 문서 생성**: make -C doc/src/sgml STYLE=website html -B