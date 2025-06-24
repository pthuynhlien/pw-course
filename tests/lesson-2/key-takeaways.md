1. Giải thích các câu lệnh
    - git init: khởi tạo kho lưu trữ mới ở vùng Working directory
    - git add <file_name>: add file đã chỉ định vào vùng Staging
    - git add . : add tất cả các file từ vùng Working vào vùng Staging
    - git commit -m "message": tạo ra một phiên bản dựa vào các file được thêm ở vùng staging vào Repository với thông điệp là "message"

2. Hãy tưởng tượng có 1 folder lesson-2 mới được tạo. Hãy liệt kê các file theo từng vùng sau khi thao tác một loạt các lệnh sau
    a. Tạo 3 file: file1, file2, file3
        - Local: file1, file2, file3
        - Working:
        - Staging:
        - Repository:
    
    b. Chạy lệnh: git init
        - Local:
        - Working: file1, file2, file3
        - Staging:
        - Repository:

    c. Chạy lệnh: git commit -m "init project"
        - Local:
        - Working: file1, file2, file3
        - Staging:
        - Repository:
    
    d. Chạy lệnh: git add file1
        - Local:
        - Working: file2, file3
        - Staging: file1
        - Repository:

    e. Chạy lệnh: git commit -m "add file1"
        - Local:
        - Working: file2, file3
        - Staging: 
        - Repository: file1

    f. Chạy lệnh: git commit -m "add file"
        - Local:
        - Working: file2, file3
        - Staging: 
        - Repository: file1