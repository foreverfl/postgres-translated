## PostgreSQL이란 무엇인가? {#intro-whatis}

PostgreSQL은 캘리포니아 대학교 버클리 컴퓨터 과학과에서 개발된 [POSTGRES, Version 4.2](https://dsf.berkeley.edu/postgres.html)를 기반으로 하는 객체-관계형 데이터베이스 관리 시스템(ORDBMS)입니다. POSTGRES는 이후 일부 상용 데이터베이스 시스템에서야 사용 가능해진 많은 개념들을 선구적으로 도입했습니다.

PostgreSQL은 이 원래 버클리 코드의 오픈소스 후손입니다. SQL 표준의 많은 부분을 지원하며 다음과 같은 현대적인 기능들을 제공합니다:

* [복잡한 쿼리](sql)
* [외래 키](ddl-constraints-fk)
* [트리거](triggers)
* [갱신 가능한 뷰](sql-createview-updatable-views)
* [트랜잭션 무결성](transaction-iso)
* [다중 버전 동시성 제어](mvcc)

또한, PostgreSQL은 다음과 같은 새로운 것들을 추가하여 사용자가 많은 방식으로 확장할 수 있습니다:

* [데이터 타입](datatype)
* [함수](functions)
* [연산자](functions)
* [집계 함수](functions-aggregate)
* [인덱스 메서드](indexes)
* [프로시저 언어](server-programming)

그리고 자유로운 라이선스 덕분에, PostgreSQL은 개인, 상업, 또는 학술적인 목적에 관계없이 누구나 무료로 사용, 수정 및 배포할 수 있습니다.