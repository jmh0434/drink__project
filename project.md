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

## Front End
- 2022-10-25
    - grid레이아웃에서 fr이라는 속성은 높이나 너비를 가변적으로 바꾼다. 
    - 가변 길이에 대해서 overflow : scroll속성이 계속 먹히지않음.
    - 초과됐을 때 먹히는 속성인데 가변적이다 보니, 초과되지 않고, 위에 요소들의 높이가 줄어드는 현상이 발생함.