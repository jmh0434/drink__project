# project 기능정리

## 페이지
- USER(사용자)
    - Main(GET : /index)
        - 술 이름으로 검색(GET /drink ? title = "")
        - 술 상세페이지 (GET /drink/:id)
        - 술 정렬 (GET /drink ? )
        - 술 리스트(12개) 
            - 이미지
            - title
            - price
            - type(종류)
            - alchol(도수)
            - sweet(단맛)
            - sour(신만)
    - Login(GET : /local/index)
    - Register(GET : /new/index)
    - myPage(GET : /my-pages/index)
    - logout(GET : /logout)
    - 취향(GET : /drink-type/index)
        - 질문 8개(db에 넣어둠)
        - 
    - 주점(GET : /drink-shop/index)
    - 술 설명(GET : /drink-ex/index)
- ADMIN(관리자)
    - 질문관리
    - 유져관리
    - 술관리


## 기능

## DATABASE