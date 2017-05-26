# Validator 사용 설명

## data-validation

validation을 처리하기 위한 종류

- required

  입력이 안되어 있는 지를 확인할 때 사용한다.
  ``` data-validation="required" ```

- length

  입력되는 글자 수에 대한 체크를 하기 위해 사용한다.
  ``` data-validation="length" ```

  - data-validation-length
    - min
      ``` data-validation-length="min7" ```
    - max
      ``` data-validation-length="max8" ```
    - range
      ``` data-validation-length="7-8" ```

- email

  입력되는 글자가 email 형식인지 체크를 하기 위해 사용한다.
  ``` data-validation="email" ```

## data-validation-depends-on

다른 입력과 함께 입력되어야지만 유효할 경우에 data-vailidation-depends-on에 id를 기입하여 설정한다.

# 샘플에서 사용한 내용
## 이름
글자가 입력되었는 지를 확인한다. **기본 에러 문구를 사용하지 않고, "이름을 입력하세요."라는 에러 문구로 설정**
```html
<input type="text" id="name" class="form-control" 
  data-validation="required"
  data-validation-error-msg="이름을 입력하세요." />
```


## 이메일
글자가 이메일 형식인지 확인한다.
```html
<input type="text" id="email" class="form-control"
  data-validation="email" />
```

## 휴대전화번호
휴대전화는 통신사 + 입력숫자 7-8 자리 입력을 확인한다.<br>
둘다 입력이 되어야 유효하므로 서로 depends-on을 설정해 두었다.

```html
<select class="form-control" id="phone1" 
  data-validation-depends-on="phone23"
  data-validation="required"
  data-validation-error-msg="통신사를 선택하세요.">
  <option value=""> - - 통신사 - - </option>
  <option>010</option>
  <option>016</option>
  <option>017</option>
  <option>018</option>
  <option>019</option>
</select>

<input type="text" id="phone23" 
  data-validation-depends-on="phone1"
  class="form-control"
  data-validation="length"
  data-validation-length="7-8" />
```
